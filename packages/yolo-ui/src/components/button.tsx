import clsx from 'clsx'
import {type ComponentProps} from 'react'
import './button.css'

export type ButtonProps = ComponentProps<'button'> & {
	dangerous?: boolean
}

export function Button({className, dangerous = false, ...props}: ButtonProps) {
	return (
		<button
			className={clsx('button', dangerous && 'dangerous', className)}
			type="button"
			{...props}
		/>
	)
}
