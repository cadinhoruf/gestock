'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { FormField, FormItem, FormLabel } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginSchema } from '@/helpers/zod/login-schema'
import { signIn } from '@/lib/auth-client'
import { useAuthState } from '@/hooks/use-auth-state'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export const LoginForm = () => {
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
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleLogin = async (data: LoginSchema) => {
    await signIn.email(
      {
        email: data.email,
        password: data.password
      },
      {
        onResponse: () => {
          setLoading(false)
        },
        onRequest: () => {
          resetState()
          setLoading(true)
        },
        onSuccess: ctx => {
          setSuccess('Login realizado com sucesso')
          toast.success('Login realizado com sucesso')
          router.replace('/dashboard')
        },
        onError: ctx => {
          setError(ctx.error.message)
          toast.error(ctx.error.message)
        }
      }
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-4'>
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
          {loading ? <Loader2 className='animate-spin' size={14} /> : 'Login'}
        </Button>
      </form>
    </Form>
  )
}
