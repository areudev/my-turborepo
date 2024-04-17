import { useEffect } from 'react'

export function useFavicon(url: string) {
	useEffect(() => {
		let link = document.querySelector("link[rel*='icon']")
		if (!link) {
			link = document.createElement('link')
			link.setAttribute('type', 'image/x-icon')
			link.setAttribute('rel', 'icon')
			link.setAttribute('href', url)

			document.head.appendChild(link)
		} else {
			link.setAttribute('href', url)
		}
	}, [url])
}
