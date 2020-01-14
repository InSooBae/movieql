import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
  Query: {
    //_ 는 안쓸 변수 명시적으로 표시
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
