"use client"

import { ThemeToggle } from "@/components/layout/theme-toggle"
import { UserNav } from "@/components/layout/user-nav"
import { MobileSidebar } from "@/components/layout/mobile-sidebar"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <div className="border-b bg-background">
      <div className="flex h-16 items-center px-4">
        <MobileSidebar />
        <div className="hidden md:flex items-center font-semibold text-lg tracking-tight mr-4">
          NextAdmin
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  )
}
