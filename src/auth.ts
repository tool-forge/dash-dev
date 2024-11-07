import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  session: { strategy: 'jwt' },
  callbacks: {
    authorized({ auth }) {
      if (auth) {
        
      }
      return !!auth;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === 'update') token.name = session.user.name;
      if (account?.provider === 'keycloak') {
        return { ...token, accessToken: account.access_token };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
});
