import { createUser } from "@/db/queries/insert";
import { getUserByEmail } from "@/db/queries/select";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

const handler = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      try {
        if (account?.provider === "google") {
          const user = await getUserByEmail(profile?.email as string);

          if (user.length === 0) {
            await createUser({
              name: profile?.name as string,
              email: profile?.email as string,
            });
          }
        }
        return true;
      } catch (error) {
        console.error("Error creating user:", error);
        return false;
      }
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

export { handler as GET, handler as POST };
