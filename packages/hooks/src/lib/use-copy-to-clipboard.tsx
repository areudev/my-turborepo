import { useCallback, useState } from 'react'

export function useCopyToClipboard() {
	const [state, setState] = useState<string | null>(null)
	// const copy = useCallback((text: string) => {
	// 	navigator.clipboard.writeText(text).then(() => {
	// 		setHasCopied(true)
	// 	})
	// }, [])
	const copyToClipboard = useCallback((value: string) => {
		async function handleCopy() {
			try {
				if (navigator?.clipboard?.writeText) {
					await navigator.clipboard.writeText(value)
					setState(value)
				} else {
					throw new Error('writeText not supported')
				}
			} catch {
				const tempTextArea = document.createElement('textarea')
				tempTextArea.value = value
				document.body.appendChild(tempTextArea)
				tempTextArea.select()
				document.execCommand('copy')
				document.body.removeChild(tempTextArea)

				setState(value)
			}
		}

		handleCopy()
	}, [])
	return [state, copyToClipboard] as const
}
