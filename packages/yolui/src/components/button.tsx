import clsx from 'clsx'
import {type ComponentProps} from 'react'
import './button.css'

export type ButtonProps = ComponentProps<'button'> & {
	dangerous?: boolean
	violet?: boolean
}

export function Button({
	className,
	violet,
	dangerous = false,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(
				'Button',
				violet && 'violet',
				dangerous && 'dangerous',
				className,
			)}
			type="button"
			{...props}
		/>
	)
}
