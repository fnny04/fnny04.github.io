import { TUser } from "@/entities";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const email = process.env.EMAIL_ADMIN;
const password = process.env.PASSWORD_ADMIN;
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }
        const user = {
          email: email,
          password: password,
        };
        if (credentials?.email !== user.email) {
          throw new Error("Invalid email or password ");
        }
        if (credentials?.password !== user.password) {
          throw new Error("Invalid email or password ");
        }
        console.log({ email: email, password: password });
        return {
          id: "1",
          email: email,
          name: "Admin",
        };

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials?.email,
        //   },
        // });

        // if (!user) {
        //   throw new Error("Invalid Email or Password");
        // }

        // const verify = await compare(credentials.password, user.password);

        // if (!verify) {
        //   throw new Error("Invalid Email or Password");
        // }

        // return {
        //   id: String(user.id),
        //   email: user.email,
        //   fullname: user.fullname,
        // };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          email: token.email,
          fullname: token.fullname,
          id: token.id,
        },
      };
    },

    jwt: ({ token, user }) => {
      if (user) {
        const u = user as TUser;
        return {
          ...token,
          email: u.email,
          fullname: u.fullname,
          id: u.id,
        };
      }
      return token;
    },
  },
};
