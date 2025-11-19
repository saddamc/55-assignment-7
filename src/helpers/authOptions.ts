import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// ✔ 54-09
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
  }
}


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // for login edit ✔ 54-06
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      
      if (!credentials?.email || !credentials?.password) {
        console.log("Email or password is missing");
        return null;
      }

      try {
        const res = await fetch
          (`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
        });
        console.log("Response From Backend:", res);
        if (!res?.ok) {
          console.error("Login Failed", await res.text());
          return null;
        }

        // user found data user 
        const user = await res.json();
        if (user.id) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            image: user?.picture,
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        
      } catch (err) {
        console.error(err);
        return null;
      }


      
    }
  })
  
  ],
  // ✔ 54-08 for user id
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token?.id as string;
      }
      return session;
    },
    // async signIn({ user, account }) {
    //   if (user) {
    //     user
    //   }
    // }
  },

  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

