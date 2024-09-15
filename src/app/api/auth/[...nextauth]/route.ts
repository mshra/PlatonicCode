import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }

      // handle user in database
      return true;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },

  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
