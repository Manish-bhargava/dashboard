import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { useSidebar } from "./sidebar-provider"
import { Menu, X } from "lucide-react"

export function SidebarTrigger({ className, ...props }) {
  const context = useSidebar()
  
  // If context is not available, don't render anything
  if (!context) return null

  const { isOpen, setIsOpen } = context

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "h-8 w-8 rounded-md",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      <span className="sr-only">{isOpen ? "Close sidebar" : "Open sidebar"}</span>
    </Button>
  )
} 