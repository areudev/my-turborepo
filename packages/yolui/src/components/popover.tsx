import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import {MixerHorizontalIcon, Cross2Icon} from '@radix-ui/react-icons'
import './popover.css'

export function PopoverDemo() {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<button
					aria-label="Update dimensions"
					className="IconButton"
					type="button"
				>
					<MixerHorizontalIcon />
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content className="PopoverContent" sideOffset={5}>
					<div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
						<p className="Text" style={{marginBottom: 10}}>
							Dimensions
						</p>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="width">
								Width
							</label>
							<input className="Input" defaultValue="100%" id="width" />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="maxWidth">
								Max. width
							</label>
							<input className="Input" defaultValue="300px" id="maxWidth" />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="height">
								Height
							</label>
							<input className="Input" defaultValue="25px" id="height" />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="maxHeight">
								Max. height
							</label>
							<input className="Input" defaultValue="none" id="maxHeight" />
						</fieldset>
					</div>
					<Popover.Close aria-label="Close" className="PopoverClose">
						<Cross2Icon />
					</Popover.Close>
					<Popover.Arrow className="PopoverArrow" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
