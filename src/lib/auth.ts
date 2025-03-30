import prisma from '@/db'
import { betterAuth } from 'better-auth'
import { organization } from 'better-auth/plugins'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import db from '@/db'

export const auth = betterAuth({
  appName: 'better_auth_nextjs',
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    maxPasswordLength: 20
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
})
