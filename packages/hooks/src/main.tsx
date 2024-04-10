import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DocumentTitle from './examples/document-title.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<DocumentTitle />
	</React.StrictMode>,
)
