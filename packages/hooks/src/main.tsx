import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Example from './examples/local-storage/local-storage'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Example />
	</React.StrictMode>,
)
