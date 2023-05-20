function movies(input) {

    let addMovieInformation = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name,
                this.director = director,
                this.date = date
        }
    }

    for (let i = 0; i < input.length; i++) {
        let movieData = input[i].split(' ')

        if (movieData.includes('addMovie')) {
            let movieName = movieData.splice(1, movieData.length).join(' ');
            let addMovie = new Movie(movieName, null, null);
            addMovieInformation.push(addMovie)
        }

        if (movieData.includes('directedBy')) {
            let movieName = movieData.splice(0, movieData.indexOf('directedBy')).join(' ');
            let movieExists = addMovieInformation.some(m => m.name === movieName);
            let directorName = movieData.splice(1, movieData.length).join(' ');
            let movieToUpdate = addMovieInformation.find(m => m.name === movieName);
            if (movieExists) {
                movieToUpdate.director = directorName
            }
        }

        if (movieData.includes('onDate')) {
            let movieName = movieData.splice(0, movieData.indexOf('onDate')).join(' ');
            let movieExists = addMovieInformation.some(m => m.name === movieName);
            let addDate = movieData.splice(movieData.indexOf('onDate') + 1).join(' ');
            let movieToUpdate = addMovieInformation.find(m => m.name === movieName);
            if (movieExists) {
                movieToUpdate.date = addDate;
            }
        }

    }
    addMovieInformation.forEach(m => m.director != null && m.name != null && m.date != null ? console.log(JSON.stringify(m)) : null);
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);