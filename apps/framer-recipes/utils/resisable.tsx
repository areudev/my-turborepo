import { motion } from 'framer-motion'
import useMeasure from 'react-use-measure'

export function Resisable({ children }: { children: React.ReactNode }) {
	const [ref, bounds] = useMeasure()

	return (
		<motion.div
			animate={{
				height: bounds.height > 0 ? bounds.height : undefined,
			}}
		>
			<div ref={ref}>{children}</div>
		</motion.div>
	)
}
