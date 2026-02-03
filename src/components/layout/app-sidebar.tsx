"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"

import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiBarChart2,
} from "react-icons/fi"

const sidebarItems = [
  { title: "Home", url: "/", icon: FiHome },
  { title: "Users", url: "/users", icon: FiUsers },
  { title: "Services", url: "/services/mongodb", icon: FiBriefcase },
  { title: "Reports", url: "/reports", icon: FiFileText },
  { title: "Analytics", url: "/analytics", icon: FiBarChart2 },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar() // expanded | collapsed

  return (
    <Sidebar
      collapsible="icon"
      className="h-screen bg-white border-r border-green-100"
    >
      {/* Header */}
      <SidebarHeader className="px-4 py-5 flex items-center gap-3 border-b border-green-100">
        <div className="h-9 w-9 rounded-lg bg-green-100 flex items-center justify-center text-green-700 font-bold">
          M
        </div>

        {/* Hide title when collapsed */}
        {state === "expanded" && (
          <div className="text-md font-semibold text-green-800">
            My Dashboard
          </div>
        )}
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="py-6">
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => {
              const isActive = pathname === item.url

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className="
                      h-10
                      gap-3
                      justify-start
                      data-[collapsed=true]:justify-center
                      text-green-700
                      hover:bg-green-50
                      data-[active=true]:bg-green-100
                      data-[active=true]:text-green-900
                    "
                  >
                    <Link href={item.url}>
                      <item.icon className="h-5 w-5" />

                      {/* Hide text when collapsed */}
                      {state === "expanded" && (
                        <span>{item.title}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="px-4 py-4 border-t border-green-100 text-sm text-green-600">
        {state === "expanded" && "© 2026 My App"}
      </SidebarFooter>
    </Sidebar>
  )
}
