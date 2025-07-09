import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/unauthorized",
  },
});

export const config = {
  matcher: ["/api/:path*"],
};
