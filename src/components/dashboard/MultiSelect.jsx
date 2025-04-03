import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"

export function MultiSelect({ options, value, onChange, placeholder, showCheckAll = false }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
    } else {
      onChange([...value, option])
    }
  }

  const handleSelectAll = () => {
    if (value.length === options.length) {
      onChange([])
    } else {
      onChange([...options])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="w-full justify-between">
          {value.length > 0 ? (
            <div className="flex flex-wrap gap-1 max-w-[90%] overflow-hidden">
              {value.length <= 2 ? (
                value.map((item) => (
                  <Badge key={item} variant="secondary" className="mr-1">
                    {item}
                  </Badge>
                ))
              ) : (
                <>
                  <Badge variant="secondary" className="mr-1">
                    {value[0]}
                  </Badge>
                  <Badge variant="secondary">+{value.length - 1} more</Badge>
                </>
              )}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {showCheckAll && (
                <CommandItem onSelect={handleSelectAll} className="flex items-center gap-2">
                  <Checkbox checked={value.length === options.length} onCheckedChange={handleSelectAll} />
                  <span className="font-medium">{value.length === options.length ? "Unselect All" : "Select All"}</span>
                </CommandItem>
              )}
              <ScrollArea className="h-[200px]">
                {options.map((option) => (
                  <CommandItem key={option} onSelect={() => handleSelect(option)} className="flex items-center gap-2">
                    <Checkbox checked={value.includes(option)} onCheckedChange={() => handleSelect(option)} />
                    {option}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 