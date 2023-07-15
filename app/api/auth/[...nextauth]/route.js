import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers here as needed
  ],
  // Add any additional options here
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
