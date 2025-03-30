'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import {
  Handshake,
  Home,
  Package,
  PackageSearch,
  PanelLeft,
  ShoppingBasket
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MixerVerticalIcon } from '@radix-ui/react-icons'
const items = [
  {
    title: 'Dashboard',
    url: '/app/dashboard',
    icon: Home
  },
  {
    title: 'Produtos',
    url: '/app/products',
    icon: PackageSearch
  },
  {
    title: 'Clientes',
    url: '/app/clients',
    icon: Handshake
  },
  {
    title: 'Vendas',
    url: '/app/sales',
    icon: ShoppingBasket
  },
  {
    title: 'Configurações',
    url: '/app/settings/profile',
    icon: MixerVerticalIcon
  }
]

interface AppSidebarProps {
  //TODO: Add user and planName
  // user: Session['user']
  planName?: string
}

export const SidebarButtonToggle = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <span onClick={toggleSidebar} className='cursor-pointer'>
      <PanelLeft size={20} />
    </span>
  )
}

export function AppSidebar({ planName }: AppSidebarProps) {
  const pathname = usePathname()
  return (
    <Sidebar collapsible='icon' variant='floating' className='group'>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className='mt-6'>
            <SidebarMenu>
              {items.map(item => {
                const isActive =
                  pathname === item.url || pathname.startsWith(`${item.url}/`)
                return (
                  <React.Fragment key={item.title}>
                    {item.title === 'Configurações' && (
                      <SidebarSeparator className='my-auto' />
                    )}
                    <SidebarMenuItem className='duration-300 hover:transition-all'>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                      >
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </React.Fragment>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='border-t border-border'>
        {/* <UserInfo user={user} planName={planName} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}

const SidebarLogo = () => {
  return (
    <Link
      href='/app/dashboard'
      className='group-data-[collapsible=icon]/35 flex items-center gap-2 rounded-lg p-1 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
    >
      <div
        className={cn(
          'flex aspect-square items-center justify-center rounded-lg transition-all'
        )}
      >
        <Package className={cn('transition-all')} size={25} />
      </div>

      <div className='text-left text-sm leading-tight group-data-[state=open]/collapsible:rotate-90'>
        <p className='truncate text-xl font-semibold group-data-[collapsible=icon]:hidden group-data-[collapsible=offcanvas]:hidden'>
          Gestock
        </p>
      </div>
    </Link>
  )
}
