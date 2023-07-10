import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

import { NextAuthOptions } from "next-auth";

console.log("hey i am here!")

export const authOptions = {
    providers: [{
        id: "Lichess",
        name: "Lichess",
        type: "oauth",
        authorization: "https://lichess.org/oauth",
        token: "https://lichess.org/api/token",
        clientId: "chess-album",
        clientSecret: process.env.LICHESS_TOKEN,
        profile(profile) {
            console.log("profile", profile)
            return {
                id: profile.id,
                username: profile?.username
            }
        }
    }],
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('user', user, account, profile)
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token
        },
    }

}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}