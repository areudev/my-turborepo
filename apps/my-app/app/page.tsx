'use client'
import {Button, NavigationMenuDemo} from 'yolui'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<NavigationMenuDemo />
			<Button violet>Click me</Button>
		</main>
	)
}
