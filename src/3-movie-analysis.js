const movies = [
  { title: 'Black Panther', year: 2018, rating: 7.3, genre: 'Action', boxOffice: 1347 },
  { title: 'Get Out', year: 2017, rating: 7.7, genre: 'Horror', boxOffice: 255 },
  { title: 'Spider-Man: Into the Spider-Verse', year: 2018, rating: 8.4, genre: 'Animation', boxOffice: 384 },
  { title: 'Moonlight', year: 2016, rating: 7.4, genre: 'Drama', boxOffice: 65 },
  { title: 'Us', year: 2019, rating: 6.8, genre: 'Horror', boxOffice: 255 },
  { title: 'Creed', year: 2015, rating: 7.6, genre: 'Drama', boxOffice: 173 },
];

// Return an array of only movies with box office earnings over $300 million.
const getBlockbusters = (movies) => {
const earningOverBox = movies.filter((movie) => movie.boxOffice > 300 )
return earningOverBox
};

// Return an array of the titles of all movies.
const getMovieTitles = (movies) => {
  const titlesonly = movies.map((movie) => movie.title)
  return titlesonly
};

// Return the total box office earnings across all movies.
const getTotalBoxOffice = (movies) => {
  const totalBoxEarnings = movies.reduce((acc,currMovie) => {
     return acc += currMovie.boxOffice

     if (movies = []) {
      return 0
     }

  },0);
    return totalBoxEarnings

};


// Return an array of the titles of all movies made in 2018 or later.
const getRecentMovieTitles = (movies) => {
  const recentMovies = movies.filter((movie) => movie.year >= 2018)
  .map((movie => movie.title))
  return recentMovies
};

module.exports = {
  getBlockbusters,
  getMovieTitles,
  getTotalBoxOffice,
  getRecentMovieTitles,
};
