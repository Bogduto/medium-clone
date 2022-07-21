import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import OsuProvider from "next-auth/providers/osu";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    OsuProvider({
        clientId: process.env.OSU_CLIENT_ID,
        clientSecret: process.env.OSU_CLIENT_SECRET
      })
    // ...add more providers here
  ],
})