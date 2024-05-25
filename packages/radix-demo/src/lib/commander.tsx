import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { cn } from '../utils/misc'
import { useEventListener } from '../hooks/event'
import { callAll } from '../utils/call-all'
import { mergeRefs } from '../utils/merge-refs'

type CommandContextValue = {
	open: boolean
	openList: () => void
	closeList: () => void
	toggleList: () => void
	inputRef: React.RefObject<HTMLInputElement>
	valueState: { value: string }
	valueDispatch: React.Dispatch<ValueAction>
	setValue: (value: string) => void
	isValueControlledRef: React.MutableRefObject<boolean>
}
const CommandContext = React.createContext<CommandContextValue | undefined>(
	undefined,
)

const useCommandContext = () => {
	const value = React.useContext(CommandContext)
	if (!value) {
		throw new Error('useCommandContext must be used within a CommandProvider')
	}
	return value
}
type OpenReducerState = {
	open: boolean
}
type OpenReducerAction =
	| { type: 'open' }
	| { type: 'close' }
	| { type: 'toggle' }

type ValueState = {
	value: string
}
type ValueAction = { type: 'value'; value: string }

export function valueReducer(
	state: ValueState,
	action: ValueAction,
): ValueState {
	switch (action.type) {
		case 'value':
			return { value: action.value }
		default:
			return state
	}
}

export function openReducer(
	state: OpenReducerState,
	action: OpenReducerAction,
): OpenReducerState {
	switch (action.type) {
		case 'open':
			return { open: true }
		case 'close':
			return { open: false }
		case 'toggle':
			return { open: !state.open }
		default:
			return state
	}
}
const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
		open?: boolean
		onOpenChange?: (open: boolean, action: OpenReducerAction) => void
		initialOpen?: boolean
		reducer?: (
			state: OpenReducerState,
			action: OpenReducerAction,
		) => OpenReducerState
	}
>(
	(
		{
			className,
			open: controlledOpen,
			onOpenChange,
			initialOpen = false,
			reducer = openReducer,
			...props
		},
		ref,
	) => {
		const isValueControlledRef = React.useRef(false)
		const [valueState, valueDispatch] = React.useReducer(valueReducer, {
			value: '',
		})

		// const setValue = (value: string) => valueDispatch({ type: 'value', value })
		initialOpen = React.useRef(initialOpen).current
		const [openState, openDispatch] = React.useReducer(reducer, {
			open: initialOpen,
		})
		const setValue = (value: string) => valueDispatch({ type: 'value', value })

		const openIsControlled = controlledOpen != null
		const open = openIsControlled ? controlledOpen : openState.open

		function dispatchWithOnChange(action: OpenReducerAction) {
			if (!openIsControlled) {
				openDispatch(action)
			}
			onOpenChange?.(reducer({ ...openState, open }, action).open, action)
		}

		const openList = () => dispatchWithOnChange({ type: 'open' })
		const closeList = () => dispatchWithOnChange({ type: 'close' })
		const toggleList = () => dispatchWithOnChange({ type: 'toggle' })

		const inputRef = React.useRef<HTMLInputElement>(null)
		const commandRef = React.useRef<HTMLDivElement | null>(null)

		const handleClick = (e: MouseEvent | TouchEvent) => {
			const element = commandRef.current
			if (!element || element.contains(e.target as Node)) return
			if (open) {
				closeList()
			}
		}

		useEventListener('mousedown', handleClick)
		useEventListener('touchstart', handleClick)
		useEventListener('keydown', e => {
			if (e.key === 'Escape') {
				closeList()
			}
		})

		return (
			<CommandContext.Provider
				value={{
					open,
					openList,
					closeList,
					toggleList,
					inputRef,
					valueState,
					valueDispatch,
					setValue,
					isValueControlledRef,
				}}
			>
				<CommandPrimitive
					ref={mergeRefs([commandRef, ref])}
					className={cn(
						'flex h-full w-full flex-col gap-2 overflow-hidden rounded-md bg-white text-black',
						className,
					)}
					// value={valueState.value}
					{...props}
				/>
			</CommandContext.Provider>
		)
	},
)

Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(
	(
		{ className, onClick, onValueChange, value: controlledValue, ...props },
		ref,
	) => {
		const {
			openList,
			inputRef,
			open,
			valueState,
			setValue,
			isValueControlledRef,
		} = useCommandContext()

		const openListIfClosed = () => {
			if (!open) {
				openList()
			}
		}

		isValueControlledRef.current = controlledValue != null
		const value = isValueControlledRef.current
			? controlledValue
			: valueState.value
		console.log('value', value)
		onValueChange = callAll(setValue, openListIfClosed, console.log)
		// onValueChange = callAll(onValueChange, openListIfClosed)

		onClick = callAll(onClick, openListIfClosed)
		// const setBothRefs = (el: HTMLInputElement | null) => {
		// 	inputRef.current = el
		// 	if (ref) {
		// 		if (typeof ref === 'function') {
		// 			ref(el)
		// 		} else {
		// 			ref.current = el
		// 		}
		// 	}
		// }
		return (
			<div className="flex items-center border px-3" cmdk-input-wrapper="">
				<p className="mr-2 h-5 w-4 shrink-0 opacity-50">🔎</p>
				<CommandPrimitive.Input
					ref={mergeRefs([inputRef, ref])}
					className={cn(
						'flex h-10 w-full rounded-md  bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					{...props}
					onClick={onClick}
					onValueChange={onValueChange}
					value={value}
				/>
			</div>
		)
	},
)

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => {
	const { open } = useCommandContext()

	if (!open) {
		return null
	}
	return (
		<CommandPrimitive.List
			ref={ref}
			className={cn(
				'top-10 max-h-[300px] overflow-y-auto overflow-x-hidden border ',
				className,
			)}
			{...props}
		/>
	)
})

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className="py-6 text-center text-sm"
		{...props}
	/>
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			'overflow-hidden p-1 text-black [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-600',
			className,
		)}
		{...props}
	/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn('bg-border -mx-1 h-px', className)}
		{...props}
	/>
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, onSelect, ...props }, ref) => {
	const { closeList, inputRef, setValue } = useCommandContext()
	const focusInput = () => {
		inputRef.current?.focus()
	}

	onSelect = callAll(onSelect, setValue, closeList, focusInput)

	return (
		<CommandPrimitive.Item
			ref={ref}
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-blue-200 aria-selected:text-blue-800 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
				className,
			)}
			{...props}
			onSelect={onSelect}
		/>
	)
})

CommandItem.displayName = CommandPrimitive.Item.displayName

function CommandShortcut({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest text-slate-500',
				className,
			)}
			{...props}
		/>
	)
}
CommandShortcut.displayName = 'CommandShortcut'

export {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
}
