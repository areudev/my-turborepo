import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../utils/misc'

type RootProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
type TrackProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>
type RangeProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>
// type ThumbProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	{
		rootProps?: RootProps
		trackProps?: TrackProps
		rangeProps?: RangeProps
	}
>((props, ref) => {
	const { rootProps, rangeProps, trackProps } = props
	const { className, ...restRootProps } = rootProps || {}
	const { className: trackClassName, ...restTrackProps } = trackProps || {}
	const { className: rangeClassName, ...restRangeProps } = rangeProps || {}

	return (
		<SliderPrimitive.Root
			className={cn('relative flex h-1.5 items-center rounded-full', className)}
			ref={ref}
			{...restRootProps}
		>
			<SliderPrimitive.Track
				className={cn(
					'relative h-full overflow-hidden rounded-full bg-gray-700',
					trackClassName,
				)}
				{...restTrackProps}
			>
				<SliderPrimitive.Range
					className={cn(
						'absolute h-full bg-gray-300  hover:bg-white',
						rangeClassName,
					)}
					{...restRangeProps}
				>
					{/* <div className="group-has-[:focus-visible]:bg-white absolute  inset-0" /> */}
				</SliderPrimitive.Range>
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb />
		</SliderPrimitive.Root>
	)
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
