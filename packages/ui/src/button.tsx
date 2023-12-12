'use client'

import {type ReactNode} from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export function Button({children, className, appName}: ButtonProps) {
  return (
    <button
      onClick={() => alert(`Hello from your ${appName} app!`)}
      className={className}
      type="button">
      {children}
    </button>
  )
}
