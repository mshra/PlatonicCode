import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ], 
  callbacks:{
    async redirect({url, baseUrl}){
      return "/"
    }
  }, 

  pages:{
    signIn:"/signin", 
    
  }
})

export { handler as GET, handler as POST }
