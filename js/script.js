'use strict';

const numberOfFilms = prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const movies = {};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What is your last watched film?', '');
    let ratingLastFilm = prompt('What is the rating of the last film?', '');
    movies[lastFilm] = ratingLastFilm;
}

console.log(movies, personalMovieDB);