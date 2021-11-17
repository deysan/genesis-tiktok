import axios from 'axios';

const options = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  }
});

export const getTrendingFeed = async () => {
  try {
      const response = await options.get('/trending/feed');

      return [null, response.data];
  } catch (err) {
      console.log('error', err);
      return [
        {
            type: 'FAILED_FEED_FETCH',
            message: err.response?.data.error,
        },
        null,
      ];
  }
};

export const getUserInfo = async () => {
  try {
      const response = await options.get('/user/info/dave.xp');

      return [null, response.data];
  } catch (err) {
      console.log('error', err);
      return [
        {
            type: 'FAILED_FEED_FETCH',
            message: err.response?.data.error,
        },
        null,
      ];
  }
};
