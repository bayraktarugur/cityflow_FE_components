import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, type User } from "./data";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Google,
    GitHub,
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        try {
          const user = getUserByEmail(credentials.email);
          if (user) {
            const isMatch = user?.password === credentials.password;
            if (isMatch) {
              return user;
            }
          }
          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
});
