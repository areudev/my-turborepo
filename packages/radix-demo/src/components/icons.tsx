import React from 'react'

export function SpeakerXMark(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
			<path
				fill="currentColor"
				d="M10.048 3.062a.75.75 0 0 1 .452.688v12.5a.75.75 0 0 1-1.264.546L5.203 13H2.667a.75.75 0 0 1-.7-.48A6.985 6.985 0 0 1 1.5 10c0-.887.165-1.737.468-2.52a.75.75 0 0 1 .7-.48h2.535l4.033-3.796a.75.75 0 0 1 .811-.142M13.78 7.22a.75.75 0 1 0-1.06 1.06L14.44 10l-1.72 1.72a.75.75 0 0 0 1.06 1.06l1.72-1.72l1.72 1.72a.75.75 0 1 0 1.06-1.06L16.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L15.5 8.94z"
			/>
		</svg>
	)
}

export function SpeakerWave(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
			<g fill="currentColor">
				<path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52c.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546zm5.95 1.3a.75.75 0 0 0-1.06 1.061a5.5 5.5 0 0 1 0 7.778a.75.75 0 0 0 1.06 1.06a7 7 0 0 0 0-9.899" />
				<path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06a2.5 2.5 0 0 1 0 3.536a.75.75 0 0 0 1.06 1.06a4 4 0 0 0 0-5.656" />
			</g>
		</svg>
	)
}

export function XMark(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5.72 5.72a.75.75 0 1 0 1.06 1.06L10 11.06l5.72 5.72a.75.75 0 1 0 1.06-1.06L11.06 10l5.72-5.72a.75.75 0 0 0-1.06-1.06L10 8.94L4.28 3.22Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
