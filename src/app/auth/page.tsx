import type { Metadata } from 'next'
import { LoginForm } from './components/login-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Login | Gestock',
  description: 'Login to your Gestock account'
}

export default function LoginPage() {
  return (
    <div className='flex min-h-screen flex-col md:flex-row'>
      {/* Left side - Branding */}
      <div className='flex w-full md:w-1/2 bg-primary flex-col items-center justify-center p-8 text-white'>
        <div className='max-w-md text-center'>
          <div className='mb-8'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-16 w-16 mx-auto'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5z' />
              <path d='M2 17l10 5 10-5' />
              <path d='M2 12l10 5 10-5' />
            </svg>
          </div>
          <h1 className='text-4xl font-bold tracking-tight mb-2'>Gestock</h1>
          <p className='text-xl mb-8'>
            Gestão de estoque simplificada para o seu negócio
          </p>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 mr-3'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                <polyline points='22 4 12 14.01 9 11.01' />
              </svg>
              <span>Controle de estoque em tempo real</span>
            </div>
            <div className='flex items-center'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 mr-3'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                <polyline points='22 4 12 14.01 9 11.01' />
              </svg>
              <span>Relatórios detalhados</span>
            </div>
            <div className='flex items-center'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 mr-3'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                <polyline points='22 4 12 14.01 9 11.01' />
              </svg>
              <span>Integração com múltiplas plataformas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className='flex w-full md:w-1/2 items-center justify-center bg-white p-8'>
        <div className='w-full max-w-md'>
          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900'>
              Bem-vindo de volta
            </h2>
            <p className='mt-2 text-gray-600'>
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>
          <Card className='border-none shadow-xl'>
            <CardContent className='space-y-4 pt-4'>
              <LoginForm />
            </CardContent>
            <CardFooter className='flex justify-center border-t bg-gray-50/50 py-4'>
              <CardDescription className='flex items-center justify-center gap-2 text-end'>
                Não possui uma conta?
                <Button
                  type='button'
                  variant='link'
                  className='group p-0 text-sm font-medium'
                  asChild
                >
                  <a href='/auth/register'>
                    Criar agora
                    <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />
                  </a>
                </Button>
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
