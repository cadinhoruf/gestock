'use client'
import Link from 'next/link'
import { LogIn, UserPlus } from 'lucide-react'

export const Header = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className='backdrop-brightness fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='text-xl font-bold text-blue-600'>
          Gestock
        </Link>
        <nav className='hidden items-center gap-8 md:flex'>
          <Link
            href='#pricing'
            onClick={e => scrollToSection(e, 'pricing')}
            className='text-sm text-gray-600 transition-colors hover:text-blue-600'
          >
            Preços
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <Link
            href='/sign-in'
            className='flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600'
          >
            <LogIn className='h-4 w-4' />
            Login
          </Link>
          <Link
            href='sign-up'
            className='flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700'
          >
            <UserPlus className='h-4 w-4' />
            Criar Conta
          </Link>
        </div>
      </div>
    </header>
  )
}
