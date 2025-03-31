import { Rocket } from 'lucide-react'
import { LogOut } from 'lucide-react'
import { ChevronsUpDown } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import { MixerVerticalIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Session } from '@/lib/auth'
import { signOut, useSession } from '@/lib/auth-client'

export const UserInfo = () => {
  const { data: session } = useSession()
  const userNameFallback = session?.user?.name
    ?.split(' ')
    .map((name: string) => name[0])
    .join('')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size='lg'
          className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
        >
          <Avatar className='h-8 w-8 rounded-lg'>
            <AvatarImage src={(session?.user?.image as string) || ''} />
            <AvatarFallback className='rounded-lg'>
              {userNameFallback}
            </AvatarFallback>
          </Avatar>
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-semibold'>
              {session?.user?.name}
            </span>
            <span className='truncate text-xs'>{session?.user?.email}</span>
          </div>
          <ChevronsUpDown className='ml-auto size-4' />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
        side='bottom'
        align='end'
        sideOffset={4}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/settings/profile'>
              <MixerVerticalIcon />
              Configurações
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/settings/billing'>
              <Rocket />
              Upgrade
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut()
          }}
        >
          <LogOut />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
