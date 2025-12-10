const {
  getBlockbusters,
  getMovieTitles,
  getTotalBoxOffice,
  getRecentMovieTitles,
} = require('../src/3-movie-analysis');

const movies = [
  { title: 'Black Panther', year: 2018, rating: 7.3, genre: 'Action', boxOffice: 1347 },
  { title: 'Get Out', year: 2017, rating: 7.7, genre: 'Horror', boxOffice: 255 },
  { title: 'Spider-Man: Into the Spider-Verse', year: 2018, rating: 8.4, genre: 'Animation', boxOffice: 384 },
  { title: 'Moonlight', year: 2016, rating: 7.4, genre: 'Drama', boxOffice: 65 },
  { title: 'Us', year: 2019, rating: 6.8, genre: 'Horror', boxOffice: 255 },
  { title: 'Creed', year: 2015, rating: 7.6, genre: 'Drama', boxOffice: 173 },
];

describe('getBlockbusters', () => {
  it('returns only movies with box office over $300 million', () => {
    const result = getBlockbusters(movies);
    expect(result).toHaveLength(2);
  });

  it('includes Black Panther (1347M)', () => {
    const result = getBlockbusters(movies);
    const titles = result.map((m) => m.title);
    expect(titles).toContain('Black Panther');
  });

  it('includes Spider-Man: Into the Spider-Verse (384M)', () => {
    const result = getBlockbusters(movies);
    const titles = result.map((m) => m.title);
    expect(titles).toContain('Spider-Man: Into the Spider-Verse');
  });

  it('does not include movies with exactly $300 million', () => {
    const testMovies = [{ title: 'Test', year: 2020, rating: 7.0, genre: 'Drama', boxOffice: 300 }];
    const result = getBlockbusters(testMovies);
    expect(result).toHaveLength(0);
  });

  it('returns an empty array if no movies qualify', () => {
    const lowEarners = [
      { title: 'Indie Film', year: 2020, rating: 8.0, genre: 'Drama', boxOffice: 50 },
    ];
    const result = getBlockbusters(lowEarners);
    expect(result).toEqual([]);
  });
});

describe('getMovieTitles', () => {
  it('returns an array of all movie titles', () => {
    const result = getMovieTitles(movies);
    expect(result).toHaveLength(6);
  });

  it('returns titles in the correct order', () => {
    const result = getMovieTitles(movies);
    expect(result[0]).toBe('Black Panther');
    expect(result[1]).toBe('Get Out');
    expect(result[5]).toBe('Creed');
  });

  it('returns only strings', () => {
    const result = getMovieTitles(movies);
    result.forEach((title) => {
      expect(typeof title).toBe('string');
    });
  });
});

describe('getTotalBoxOffice', () => {
  it('returns the sum of all box office earnings', () => {
    const result = getTotalBoxOffice(movies);
    // 1347 + 255 + 384 + 65 + 255 + 173 = 2479
    expect(result).toBe(2479);
  });

  it('returns 0 for an empty array', () => {
    const result = getTotalBoxOffice([]);
    expect(result).toBe(0);
  });

  it('works with a single movie', () => {
    const singleMovie = [{ title: 'Test', year: 2020, rating: 7.0, genre: 'Drama', boxOffice: 500 }];
    const result = getTotalBoxOffice(singleMovie);
    expect(result).toBe(500);
  });
});

describe('getRecentMovieTitles', () => {
  it('returns titles of movies from 2018 or later', () => {
    const result = getRecentMovieTitles(movies);
    expect(result).toHaveLength(3);
  });

  it('includes Black Panther (2018)', () => {
    const result = getRecentMovieTitles(movies);
    expect(result).toContain('Black Panther');
  });

  it('includes Spider-Man: Into the Spider-Verse (2018)', () => {
    const result = getRecentMovieTitles(movies);
    expect(result).toContain('Spider-Man: Into the Spider-Verse');
  });

  it('includes Us (2019)', () => {
    const result = getRecentMovieTitles(movies);
    expect(result).toContain('Us');
  });

  it('does not include movies before 2018', () => {
    const result = getRecentMovieTitles(movies);
    expect(result).not.toContain('Get Out');
    expect(result).not.toContain('Moonlight');
    expect(result).not.toContain('Creed');
  });

  it('returns only title strings, not movie objects', () => {
    const result = getRecentMovieTitles(movies);
    result.forEach((item) => {
      expect(typeof item).toBe('string');
    });
  });
});
