import prisma from '@/db'
import { betterAuth, BetterAuthOptions } from 'better-auth'
import { organization } from 'better-auth/plugins'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import db from '@/db'

export const auth = betterAuth({
  appName: 'gestock',
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    maxPasswordLength: 20
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      const url = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`
      const email = user.email
      const subject = 'Verifique seu email'
      const html = `
      <p>Olá ${user.name},</p>
      <p>Por favor, verifique seu email clicando no link abaixo:</p>
      <a href="${url}">Verificar email</a>
      <p>Se você não criou uma conta com este email, pode ignorar este email.</p>
      `
    }
  },
  rateLimit: {
    window: 10,
    max: 100
  },
  advanced: {
    cookiePrefix: 'gestock_auth'
  },
  plugins: [
    organization({
      allowUserToCreateOrganization: async user => {
        // TODO: Implement subscription check
        const subscription = await db.user.findUnique({
          where: {
            id: user.id
          }
        })
        return !!subscription
      }
    })
  ]
} satisfies BetterAuthOptions)

export type Session = typeof auth.$Infer.Session
