import axios from 'axios';
const BASE_URL = 'https://yts.am/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

//limit,rating 기준으로 걸러진 영화를 const {data} 요건 객체를 data로 분해해서 넣는거고 const {data1:{data2}} data1 객체안 가장 안쪽 data2객체를 꺼내온다.
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

//위와 같은 내용인데 id 기준으로 한다.->id가 PK이므로 한개만 걸러짐. MOVIE_DETAILS_URL 로 인한 기능차이
export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

//위와 같은 내용인데 MOVIE_SUGGESTIONS_URL으로 인한 여러 객체가 나온다.
export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
