// import { SwitchDemo } from './components/switch-demo'
// import { SelectorDemo } from './components/selector-demo'
// import { SliderDemo } from './components/slider-demo'

import { ToastDemo } from './components/toast-demo'
import { ToastProvider } from './lib/toast'

export function App() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-2">
			{/* <SwitchDemo /> */}
			{/* <SelectorDemo /> */}
			{/* <SliderDemo /> */}
			<ToastProvider>
				<ToastDemo />
			</ToastProvider>
		</div>
	)
}
