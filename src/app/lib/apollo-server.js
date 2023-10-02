const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const mongoURI=process.env.MONGODB_URI;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

//Mongoose DB connection
let globalWithMongoose = globalThis & {
    mongoose,
  };

  let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(mongoURI, opts).then((mongoose) => {
      return server.listen({port: 4000});
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;



