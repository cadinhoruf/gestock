import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(8, { message: 'Senha deve conter pelo menos 8 caracteres' }),
  organization: z.object({
    name: z.string().min(1, { message: 'Nome da organização é obrigatório' }),
    slug: z.string().min(1, { message: 'Slug da organização é obrigatório' })
  })
})

export type RegisterSchema = z.infer<typeof registerSchema>
