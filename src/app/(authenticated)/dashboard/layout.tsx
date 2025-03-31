import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/providers/theme-provider'
import { cookies } from 'next/headers'
import { AppSidebar } from '@/app/components/app-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestock | Sistema de gerenciamento de estoque',
  description: 'Gestock | Sistema de gerenciamento de estoque'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className={`${inter.className} antialiased`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </div>
    </ThemeProvider>
  )
}
