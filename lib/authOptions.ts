import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, Account, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import axios from "axios";
import jwt from "jsonwebtoken";
import { GoogleIdToken, JWTToken } from "@/app/types/pcd";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
        },
      },
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

    async jwt({
      token,
      account,
    }: {
      token: JWT;
      account?: Account | null;
    }): Promise<JWTToken> {
      const now = Math.floor(Date.now() / 1000);

      if (account) {
        token.accessToken = account.access_token!;
        token.refreshToken = account.refresh_token;
        token.expiresAt = now + Number(account.expires_in ?? 3600);
        return token as JWTToken;
      }

      if (typeof token.expiresAt === "number" && token.expiresAt < now) {
        return await refreshAccessToken(token as JWTToken);
      }

      return token as JWTToken;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      session.accessToken = (token as JWTToken).accessToken ?? "";
      session.user.id = token.sub ?? "";
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 30,
    updateAge: 5 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
};

async function refreshAccessToken(token: JWTToken): Promise<JWTToken> {
  try {
    const res = await axios.post("https://oauth2.googleapis.com/token", null, {
      params: {
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken!,
      },
    });

    const refreshed = res.data;

    return {
      ...token,
      accessToken: refreshed.access_token,
      expiresAt: Math.floor(Date.now() / 1000) + Number(refreshed.expires_in),
      refreshToken: refreshed.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
