import clientPromise from "@/app/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import User from '@/models/User'
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email:{ label:'email',type:'text'},
        password:{label:'password',type:'password'} 
      },
      async authorize(credentials, req) {
        
      //Check to make sure all login fields are filled  
              if(!credentials?.email||!credentials?.password){
                throw new Error('Please Fill Credentials');
            }
            // Mongoose call to MongoDB to find user by Email  
            const user=await User.findUnique(
                {where:{
                    email:credentials.email
                }}
            )
            //if user or user password doesnt exist throw invalid user error         
            if(!user || !user?.hashedPassword){
                throw new Error('Invalid Details')
            }
            //Check if hashed password is same as entered password    
            const isCorrect=await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            ) 

            if(!isCorrect){
                throw new Error('Invalid Credentials')
            }
            return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Set it as jwt instead of database
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };