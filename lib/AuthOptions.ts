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

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                identifier: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials?: Credentials): Promise<any> {
                if (!credentials) {
                    throw new Error("No credentials provided")
                }
                await dbConnect()
                try {
                    const user = await UserSchema.findOne({ email: credentials.identifier })
                    console.log("authorize() called with:", credentials);

                    if (!user) {
                        throw new Error("User not found")
                    }

                    const passwordMatch = await bcrypt.compare(credentials.password, user.password)

                    if (passwordMatch) {
                        return {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        };
                    } else {
                        throw new Error("Invalid credentials")
                    }

                } catch (error) {
                    if (error instanceof Error) {
                        throw new Error(error.message)
                    }
                    throw new Error("An unknown error occurred during login")
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            if (trigger === "update" && session.name) {
                token.name = session.name
            }


            return token
        },
        async session({ session, token }) {
            if (session?.user && token) {
                //session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
            }
            return session
        }
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt" as const
    },
    secret: process.env.NEXTAUTH_SECRET

}

