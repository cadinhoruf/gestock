import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(8, { message: 'Senha deve conter pelo menos 8 caracteres' })
})

export type LoginSchema = z.infer<typeof loginSchema>
