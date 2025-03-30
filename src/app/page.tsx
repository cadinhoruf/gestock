import { Metadata } from 'next'
import {
  PackageSearch,
  Zap,
  Users,
  ShoppingBasket,
  Handshake,
  Phone,
  Mail,
  Rocket
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/app/components/header'

export const metadata: Metadata = {
  title: 'StoQ - Transforme a Gestão do Seu Negócio',
  description:
    'Plataforma completa de gestão empresarial que simplifica processos e impulsiona resultados'
}

export default async function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
        <section className='relative flex min-h-[85vh] flex-col items-center justify-center px-6'>
          <div className='container mx-auto grid items-center gap-12 md:grid-cols-2'>
            <div className='text-center md:text-left'>
              <div className='mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-600 backdrop-blur-sm'>
                <Zap className='mr-2 h-4 w-4' />
                Revolucione sua gestão empresarial
              </div>
              <h1 className='mb-8 text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-6xl lg:text-7xl'>
                Gestão inteligente para um futuro{' '}
                <span className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
                  extraordinário
                </span>
              </h1>
              <p className='mb-10 text-xl leading-relaxed text-gray-600 dark:text-gray-300'>
                Organize suas operações com facilidade e aumente a eficiência do
                seu negócio, tudo em um só lugar.
              </p>
              <div className='flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start'>
                <Link
                  href='/auth'
                  className='group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
                >
                  <Zap className='h-5 w-5 transition-transform group-hover:scale-110' />
                  Comece Gratuitamente
                </Link>
              </div>
            </div>
            <div className='relative hidden md:block'>
              <Image
                src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
                alt='Dashboard Preview'
                width={600}
                height={400}
                className='rounded-xl shadow-xl transition-transform hover:scale-[1.02]'
                priority
              />
              <div className='absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-blue-100 to-blue-50'></div>
            </div>
          </div>
        </section>

        <section className='relative bg-gradient-to-b from-white to-gray-50 py-24 dark:from-gray-900 dark:to-gray-800'>
          <div className='container mx-auto px-6'>
            <div className='mb-16 text-center'>
              <span className='mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600'>
                Recursos Exclusivos
              </span>
              <h2 className='mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl'>
                Tudo que você precisa em um só lugar
              </h2>
              <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
                Gerencie seu negócio com ferramentas poderosas que se integram
                perfeitamente
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
              <div className='group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl'>
                <div className='mb-4 inline-block rounded-xl bg-blue-100 p-3 text-blue-600'>
                  <PackageSearch className='h-6 w-6' />
                </div>
                <h3 className='mb-4 text-xl font-bold dark:text-gray-100'>
                  Gestão de Estoque
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Controle completo do seu inventário com alertas inteligentes e
                  relatórios em tempo real
                </p>
              </div>
              <div className='group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl'>
                <div className='mb-4 inline-block rounded-xl bg-blue-100 p-3 text-blue-600'>
                  <ShoppingBasket className='h-6 w-6' />
                </div>
                <h3 className='mb-4 text-xl font-bold dark:text-gray-100'>
                  Gestão de Vendas
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Acompanhe suas vendas em tempo real e otimize suas estratégias
                  de marketing
                </p>
              </div>
              <div className='group rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl'>
                <div className='mb-4 inline-block rounded-xl bg-blue-100 p-3 text-blue-600'>
                  <Handshake className='h-6 w-6' />
                </div>
                <h3 className='mb-4 text-xl font-bold dark:text-gray-100'>
                  Gestão de Clientes
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Mantenha um registro completo dos seus clientes e suas
                  informações de contato
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id='pricing'
          className='scroll-mt-16 bg-gray-900 py-24 dark:bg-gray-800'
        >
          <div className='container mx-auto px-4'>
            <div className='mb-16 text-center'>
              <span className='mb-4 inline-block rounded-full bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-400'>
                Planos & Preços
              </span>
              <h2 className='mb-6 text-4xl font-bold text-gray-100 md:text-5xl'>
                Invista no crescimento do seu negócio
              </h2>
              <p className='mx-auto max-w-2xl text-lg text-gray-400'>
                Escolha o plano ideal para suas necessidades
              </p>
            </div>

            <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-2'>
              <div className='group rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-800/80'>
                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-2xl font-bold text-gray-100'>Starter</h3>
                  <span className='rounded-full bg-blue-900/30 px-4 py-1 text-sm text-blue-400'>
                    Free
                  </span>
                </div>
                <p className='mb-8 text-5xl font-bold text-gray-100'>
                  R$ 0<span className='text-lg'>/mês</span>
                </p>
                <ul className='mb-8 space-y-4'>
                  <li className='flex items-center gap-3'>
                    <PackageSearch className='h-5 w-5 text-blue-400' />
                    <span className='text-gray-100'>Até 20 produtos</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <ShoppingBasket className='h-5 w-5 text-blue-400' />
                    <span className='text-gray-100'>5 vendas/mês</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Users className='h-5 w-5 text-blue-400' />
                    <span className='text-gray-100'>3 clientes</span>
                  </li>
                </ul>
                <button className='w-full rounded-xl border-2 border-gray-700 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-700'>
                  Começar Grátis
                </button>
              </div>

              <div className='relative rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/20'>
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-2 text-sm font-bold text-white'>
                  MAIS POPULAR
                </div>

                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-2xl font-bold text-gray-100'>
                    Professional
                  </h3>
                  <span className='rounded-full bg-blue-400/20 px-4 py-1 text-sm text-blue-200'>
                    Pro
                  </span>
                </div>
                <p className='mb-8 text-5xl font-bold text-gray-100'>
                  R$ 80<span className='text-lg text-blue-200'>/mês</span>
                </p>
                <ul className='mb-8 space-y-4'>
                  <li className='flex items-center gap-3'>
                    <PackageSearch className='h-5 w-5' color='white' />
                    <span className='text-gray-100'>Produtos ilimitados</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <ShoppingBasket className='h-5 w-5' color='white' />
                    <span className='text-gray-100'>Vendas ilimitadas</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Users className='h-5 w-5' color='white' />
                    <span className='text-gray-100'>Clientes ilimitados</span>
                  </li>
                </ul>
                <button className='group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50'>
                  <Rocket
                    className='text-blue-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    size={20}
                  />
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute -left-[20%] -top-[50%] h-[600px] w-[600px] rounded-full bg-blue-500 opacity-30 blur-[100px]'></div>
            <div className='absolute -bottom-[50%] right-[20%] h-[600px] w-[600px] rounded-full bg-blue-700 opacity-30 blur-[100px]'></div>
          </div>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='mb-6 text-3xl font-bold text-gray-100 md:text-4xl'>
              Pronto para transformar seu negócio?
            </h2>
            <p className='mx-auto mb-8 max-w-2xl text-lg text-blue-100'>
              Comece gratuitamente e aproveite 7 dias de teste em qualquer
              plano.
            </p>
            <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/auth/register'
                className='group flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50'
              >
                <Zap className='h-5 w-5 transition-transform group-hover:scale-110' />
                Criar Conta Grátis
              </Link>
            </div>
          </div>
        </section>

        <footer className='bg-gray-900 py-12 text-gray-400 dark:bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <div>
                <h3 className='mb-4 text-lg font-bold text-gray-100'>StoQ</h3>
                <p className='mb-4 text-gray-300'>
                  Transformando a gestão do seu negócio com soluções
                  inteligentes.
                </p>
              </div>

              <div>
                <h3 className='mb-4 text-lg font-bold text-gray-100'>
                  Contato
                </h3>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-blue-400' />
                    <a
                      href='tel:+5516997384732'
                      className='hover:text-blue-400'
                    >
                      (16) 99738-4732
                    </a>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-blue-400' />
                    <a
                      href='mailto:stoq@gmail.com'
                      className='hover:text-blue-400'
                    >
                      stoq@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
              <p className='text-gray-300'>
                &copy; {new Date().getFullYear()} StoQ. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
