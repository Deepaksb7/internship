import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/db/dbConnect"
import UserSchema from "@/models/User"
import bcrypt from "bcrypt"

interface Credentials {
  identifier: string;
  password: string;
}

export const authOptions:NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        identifier: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials?: Credentials): Promise<any> {
        if (!credentials) {
          throw new Error("No credentials provided")
        }
        await dbConnect()
        try {
          const user = await UserSchema.findOne({ email:credentials.identifier })
          console.log("authorize() called with:", credentials);

          if (!user) {
            throw new Error("User not found")
          }

          const passwordMatch = await bcrypt.compare(credentials.password, user.password)

          if (!passwordMatch) {
            throw new Error("Invalid password")
          }

          return user

        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message)
          }
          throw new Error("An unknown error occurred during login")
        }
      }
    })
  ],
  // callbacks: {
  //   async jwt({ token, user, session }) {
  //     if (user) {
  //       token.user = user
  //     }


  //     return token
  //   },
  //   async session({ session, token, user }) {
  //     return session
  //   },
  // },
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt" as const
  },
  secret: process.env.NEXTAUTH_SECRET

}

