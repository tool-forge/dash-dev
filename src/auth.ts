import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { getUserByEmail } from '@/server/users';
import { UserRoleEnum } from './models/enums';

declare module 'next-auth' {
  interface Session {
    token?: string;
    user?: {
      role?: UserRoleEnum;
      org?: string;
      image: string;
      name: string;
      email: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            'repo repo:status read:repo_hook read:discussion security_events read:user workflow',
        },
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    authorized({ auth }) {
      return !!auth;
    },
    jwt({ token, account }) {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.accessToken as string;
      const user = await getUserByEmail(session.user?.email);

      if (user) {
        session.user.role = user.role;
        session.user.org = user.org;
      }

      return session;
    },
  },
});
