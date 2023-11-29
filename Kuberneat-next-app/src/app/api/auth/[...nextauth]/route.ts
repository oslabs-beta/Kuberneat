/**
 * Next-Auth.js version of the google Oauth
  params object of authorization which will force the Refresh Token to always be
  provided on sign in, however this will ask all users to confirm if they wish
  to grant your application access every time they sign in. This is required as
  we are not using Zeus database to persist user data for google accounts
 * @param {GoogleProvider} provider
 * 
 */
//@ts-nocheck
import NextAuth, { Account, NextAuthOptions, Profile } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import dotenv from 'dotenv';
dotenv.config();

const GOOGLE_CLIENT_ID  = process.env.GOOGLE_CLIENT_ID ?? "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? "";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({account, profile}) {
      if (account?.accessToken) {
        console.log("signIn", account, profile);
        return true;
      }
      if (!profile?.email) {
        throw new Error("No account found");
      }
      return true;
    },
    async redirect({url, baseUrl}) {
      console.log(` ⛳  redirect ⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵⤵ \n URL:${url} \n baseURL ${url}`);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async sessionsession({ session, user}) {
      // Add user information to session
      console.log('Sessionsession', session, user);
      session.user.email = user.email;
      session.user.name = user.name;
    
      return session;
    },
    // async jwt(token, user, account, profile, isNewUser) {
    //   console.log("jwt", token, user, account, profile, isNewUser);
    //   return token;
    // },
  },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};