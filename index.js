import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

// Graphql 서버는 graphql resolvers를 요청함, (graphql 서버가 Query나 Mutation의 정의를 발견시 resolvers를 찾을 것이고 해당 함수(코드)를 실행함
const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers
});

server.start(() => console.log('Graphql Server Running'));
