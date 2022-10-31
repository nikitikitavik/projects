'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log('Too few movies have been viewed');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You're a classical watcher");
        } else if (personalMovieDB > 30) {
            console.log(`You're a movie fan`);
        } else {
            console.log('An error has occurred');
        }
    },
    showMyDB: function(hidden) {
        if (hidden !== true) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        let answer;
        for (let i = 1; i <= 3; i++) {
            answer = prompt(`What's is your favorite genre №${i}?`, '');
            while(answer == null || answer == '') {
                answer = prompt(`What's is your favorite genre №${i}?`, '');
            }
            personalMovieDB.genres.push(answer);
        }
        personalMovieDB.genres.forEach((el, i) => console.log(`The favorite genre${i+1} is ${el}`));
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
    start: function () {
        personalMovieDB.count = prompt('How many films do you watch?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How many films do you watch?', '');
        }
    },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

