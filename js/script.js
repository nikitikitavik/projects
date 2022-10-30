'use strict';

let numberOfFilms = prompt('How many films do you watch?', '');

if (numberOfFilms === null) {
    numberOfFilms = prompt('How many films do you watch?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('What is your last watched film?', '');
    console.log(lastFilm);    
    while (lastFilm == '' || lastFilm == null) {
        lastFilm = prompt('What is your last watched film?', '');
    }

    if (lastFilm.length > 50) {
        lastFilm = prompt('What is your last watched film?', '');
    }

    let ratingLastFilm = prompt('What is the rating of the last film?', '');

    personalMovieDB.movies[lastFilm] = ratingLastFilm;
}

if (personalMovieDB.count < 10) {
    console.log('Too few movies have been viewed');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You're a classical watcher");
} else if (personalMovieDB > 30) {
    console.log(`You're a movie fan`);
} else {
    console.log('An error has occurred');
}
