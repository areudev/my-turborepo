import clsx from 'clsx'
import {type ComponentProps} from 'react'
import './input.css'

export type InputProps = ComponentProps<'input'>

export function Input({className, ...props}: InputProps) {
	return <input className={clsx('Input', className)} {...props} />
}
