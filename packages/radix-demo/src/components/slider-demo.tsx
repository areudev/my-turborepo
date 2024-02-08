import React, { useState } from 'react'
import { Slider } from '../lib/slider'
import { cn } from '../utils/misc'
import { SpeakerWave, SpeakerXMark } from './icons'

const MIN = 0
const MAX = 100

export function SliderDemo() {
	const [usingPointer, setUsingPointer] = useState(false)
	const [internalValue, setInternalValue] = useState(50)
	const [stash, setStash] = useState({ clientX: 0, internalValue })
	// const [startingClientX, setStartingClientX] = useState(0)
	// const [startingInternalValue, setStartingInternalValue] =
	// 	useState(internalValue)

	return (
		<div className="mx-auto w-full max-w-xs">
			<form
				className="space-y-8 rounded"
				onSubmit={event => {
					event.preventDefault()
					const formData = new FormData(event.currentTarget)
					const json = JSON.stringify(Object.fromEntries(formData))
					alert(json)
				}}
			>
				<p>internal value {internalValue}</p>
				<p className="text-sm font-medium text-white/60">Settings</p>
				<div className="*:duration-[350ms] group flex items-center gap-3 transition-[margin] duration-[350ms] hover:-mx-3 hover:cursor-grab active:cursor-grabbing">
					<SpeakerXMark className="size-5 duration-[350ms] group-hover:scale-125" />
					<Slider
						rootProps={{
							name: 'what',
							min: MIN,
							max: MAX,
							value: [internalValue],
							className:
								'grow transition-[height] duration-[350ms] group-hover:h-4',
						}}
						trackProps={{
							onPointerDown: e => {
								setUsingPointer(true)
								setStash({ clientX: e.clientX, internalValue })
							},
							onPointerMove: e => {
								if (e.buttons > 0) {
									const diffInPixels = e.clientX - stash.clientX
									const sliderWidth = e.currentTarget.clientWidth
									const pixelsPerUnit = (MAX - MIN) / sliderWidth
									const diffInUnits = diffInPixels * pixelsPerUnit
									const newValue = stash.internalValue + diffInUnits
									setInternalValue(Math.max(Math.min(newValue, MAX), MIN))
								}
							},
							onBlur: () => setUsingPointer(false),
							className: cn(
								'grow',
								!usingPointer &&
									'group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-2 group-has-[:focus-visible]:outline-sky-500',
							),
						}}
						rangeProps={{
							className: 'group-has-[:focus-visible]:bg-white',
						}}
					/>
					<SpeakerWave className="h-5 w-5 duration-[350ms] group-hover:scale-125" />
				</div>
				{/* <input className="w-full" name="native" type="range" /> */}
				<div className="mt-5 flex items-center justify-between">
					<button
						className="focus-visible-visible:outline-2 rounded bg-white/[.15] px-3 py-1 font-medium text-white hover:bg-white/25 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
						type="submit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	)
}
