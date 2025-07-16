import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, Account } from "next-auth";
import jwt from "jsonwebtoken";
import { GoogleIdToken } from "@/app/types/pcd";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/auth",
  },

  callbacks: {
    async signIn({ account }: { account: Account | null }): Promise<boolean> {
      const allowedDomain = "platform9.com";
      if (account?.id_token) {
        const decoded = jwt.decode(account.id_token) as GoogleIdToken;
        const userEmail = decoded?.email;
        if (userEmail && userEmail.endsWith(`@${allowedDomain}`)) {
          return true;
        }
      }
      return false;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 30,
    updateAge: 5 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
};
