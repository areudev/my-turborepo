import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import {clsx} from 'clsx'

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({className, ...props}, ref) => (
	<LabelPrimitive.Root
		className={clsx('Label', className)}
		ref={ref}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

export {Label}
