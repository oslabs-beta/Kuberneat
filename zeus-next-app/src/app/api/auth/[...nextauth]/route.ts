/**
 * Next-Auth.js version of the google Oauth
  params object of authorization which will force the Refresh Token to always be
  provided on sign in, however this will ask all users to confirm if they wish
  to grant your application access every time they sign in. This is required as
  we are not using Zeus database to persist user data for google accounts
 * @param {GoogleProvider} provider
 * 
 */
import NextAuth, { Account, NextAuthOptions, Profile } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import dotenv from 'dotenv';
dotenv.config();


const handler = NextAuth(
  {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        //If access is needed to the RefreshToken or AccessToken for a Google account and you are not using a database to persist user accounts, this may be something you need to do.
        // authorization: {
        //   params: {
        //     prompt: "consent",
        //     access_type: "offline",
        //     response_type: "code"
        //   }
        // }, 

      }),
    ],
    callbacks: {
      async signIn({ account, profile }: any) {
        if (account?.provider === "google" && profile.email_verified) {
          // Do something if the user is signing in with a verified Google
          // account
          return true
        }
        return profile.email?.endsWith("@example.com")
      }
    },
        // Do different verification for other providers that don't have `email_verified`
    pages: {
      signIn: '/auth/signin',  // Displays signin buttons
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: null ?? undefined// If set, new users will be directed here on first sign in
    }, 
  }
);

export { handler as GET , handler as POST};