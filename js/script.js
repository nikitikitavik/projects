'use strict';

let numberOfFilms;

function start() {

    numberOfFilms = prompt('How many films do you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many films do you watch?', '');   
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    
        const lastFilm = prompt('What is your last watched film?', ''),
              ratingLastFilm = prompt('What is the rating of the last film?', '');
        
        if (lastFilm != null && ratingLastFilm != null && lastFilm != '' && ratingLastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = ratingLastFilm;
        } else {
            console.log('Error');
            i--;
        }
    
    }
}

rememberMyFilms();

console.log(personalMovieDB);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Too few movies have been viewed');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You're a classical watcher");
    } else if (personalMovieDB > 30) {
        console.log(`You're a movie fan`);
    } else {
        console.log('An error has occurred');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (hidden !== true) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

const genres = [];

function writeYourGenres() {
    let answer;
    for (let i = 1; i <= 3; i++) {
        answer = prompt(`What's is your favorite genre №${i}?`, '');
        if (answer !== null && answer !== '') {
            genres.push(answer);           
        } else {
            answer = prompt(`What's is your favorite genre №${i}?`, '');
        }
    }
}

writeYourGenres();