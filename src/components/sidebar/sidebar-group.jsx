import * as React from "react"
import { cn } from "../../lib/utils"

export function SidebarGroup({ className, children }) {
  return <div className={cn("space-y-4", className)}>{children}</div>
}

export function SidebarGroupLabel({ className, children }) {
  return (
    <h3 className={cn("px-4 text-sm font-medium text-muted-foreground", className)}>
      {children}
    </h3>
  )
}

export function SidebarGroupContent({ className, children }) {
  return <div className={cn("space-y-1", className)}>{children}</div>
} 