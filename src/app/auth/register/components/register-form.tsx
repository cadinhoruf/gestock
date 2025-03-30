'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, registerSchema } from '@/helpers/zod/signup-schema'
import { Button } from '@/components/ui/button'
import { signUp, authClient } from '@/lib/auth-client'
import { useAuthState } from '@/hooks/use-auth-state'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export const RegisterForm = () => {
  const router = useRouter()
  const {
    error,
    success,
    loading,
    setLoading,
    setError,
    setSuccess,
    resetState
  } = useAuthState()
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  const handleRegister = async (data: RegisterSchema) => {
    try {
      await signUp.email(
        {
          email: data.email,
          password: data.password,
          name: data.name
        },
        {
          onResponse: async () => {
            await authClient.organization.create({
              name: data.name,
              slug: data.name
            })
            setLoading(false)
          },
          onRequest: () => {
            resetState()
            setLoading(true)
          },
          onSuccess: ctx => {
            setSuccess('Cadastro realizado com sucesso')
            router.replace('/')
          },
          onError: ctx => {
            setError(ctx.error.message)
          }
        }
      )
    } catch (error) {
      setError('Erro ao cadastrar')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Nome' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Senha' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={loading}>
          {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Cadastrar'}
        </Button>
      </form>
    </Form>
  )
}
