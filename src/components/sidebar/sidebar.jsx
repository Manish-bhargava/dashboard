import * as React from "react"
import { cn } from "../../lib/utils"
import { useSidebar } from "./sidebar-provider"

const Sidebar = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen } = useSidebar()

  return (
    <>
      {/* Backdrop - only on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 lg:hidden" 
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background",
          "transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:relative lg:translate-x-0",
          !isOpen && "lg:w-0 lg:opacity-0 lg:border-0",
          className
        )}
        {...props}
      >
        <div className={cn(
          "h-full w-full",
          !isOpen && "lg:hidden"
        )}>
          {children}
        </div>
      </aside>
    </>
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }

export function SidebarHeader({ className, children }) {
  return <div className={cn("flex-none border-b", className)}>{children}</div>
}

export function SidebarContent({ className, children }) {
  return <div className={cn("flex-1 overflow-y-auto", className)}>{children}</div>
}

export function SidebarFooter({ className, children }) {
  return <div className={cn("flex-none border-t", className)}>{children}</div>
} 