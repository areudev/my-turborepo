import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {CaretDownIcon} from '@radix-ui/react-icons'
import './navigation-menu.css'

export function NavigationMenuDemo() {
	return (
		<NavigationMenu.Root className="NavigationMenuRoot">
			<NavigationMenu.List className="NavigationMenuList">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Learn <CaretDownIcon aria-hidden className="CaretDown" />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List one">
							<li style={{gridRow: 'span 3'}}>
								<NavigationMenu.Link asChild>
									<a className="Callout" href="/">
										<svg
											aria-hidden
											fill="white"
											height="38"
											viewBox="0 0 25 25"
											width="38"
										>
											<path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" />
											<path d="M12 0H4V8H12V0Z" />
											<path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
										</svg>
										<div className="CalloutHeading">Radix Primitives</div>
										<p className="CalloutText">
											Unstyled, accessible components for React.
										</p>
									</a>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Stitches">
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href="/colors" title="Colors">
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Icons">
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Overview <CaretDownIcon aria-hidden className="CaretDown" />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								href="/primitives/docs/overview/introduction"
								title="Introduction"
							>
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								href="/primitives/docs/overview/getting-started"
								title="Getting started"
							>
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem href="/primitives/docs/guides/styling" title="Styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								href="/primitives/docs/guides/animation"
								title="Animation"
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
							<ListItem
								href="/primitives/docs/overview/accessibility"
								title="Accessibility"
							>
								Tested in a range of browsers and assistive technologies.
							</ListItem>
							<ListItem
								href="/primitives/docs/overview/releases"
								title="Releases"
							>
								Radix Primitives releases and their changelogs.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="NavigationMenuLink"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="NavigationMenuIndicator">
					<div className="Arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="ViewportPosition">
				<NavigationMenu.Viewport className="NavigationMenuViewport" />
			</div>
		</NavigationMenu.Root>
	)
}
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	title: string
	children: React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
	({className, children, title, ...props}, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={`ListItemLink ${className || ''}`}
					{...props}
					ref={forwardedRef}
				>
					<div className="ListItemHeading">{title}</div>
					<p className="ListItemText">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
)
ListItem.displayName = 'ListItem'
