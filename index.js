const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open")
    }).catch(err => {
        console.log("Oh No Error")
        console.log(err)
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Here we are creating a class called Movie that will be used to create new objects
// The first argument is the singular name of the collection that will be created for your model
// Mongoose will create a collection called 'movies' for this model since the argument is 'Movie'
const Movie = mongoose.model('Movie', movieSchema);

const amadaeus = new Movie({ title: 'Amadaeus', year: 1986, score: 9.2, rating: 'R' });

// We can use insertOne to add a single movie to the database. The save method will save the movie to the database
amadaeus.save();

// We can use insertMany to add multiple movies to the database, but this is uncommon because it is slow and inefficient. Usually we will use insertOne or create to add a single movie to the database.
Movie.insertMany([
    { title: 'Stand by Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'Dumb and Dumber', year: 1994, score: 7.3, rating: 'PG-13' },
    { title: 'Lord of the Rings', year: 2001, score: 8.8, rating: 'PG-13' },
    { title: 'Step Brothers', year: 2008, score: 6.9, rating: 'R' },
    { title: 'Braveheart', year: 1995, score: 8.3, rating: 'R' },
    { title: 'Monty Python and the Holy Grail', year: 1975, score: 8.2, rating: 'PG' },
    { title: 'Snatch', year: 2000, score: 8.3, rating: 'R' },
    { title: 'Pirates of the Caribbean', year: 2003, score: 8.0, rating: 'PG-13' },
    { title: 'Harry Potter and the Goblet of Fire', year: 2005, score: 7.7, rating: 'PG-13' },
    { title: 'The Goonies', year: 1985, score: 7.8, rating: 'PG' },
    { title: 'Back to the Future', year: 1985, score: 8.5, rating: 'PG' },
    { title: 'The Shining', year: 1980, score: 8.4, rating: 'R' },
    { title: 'The Matrix', year: 1999, score: 8.7, rating: 'R' },
    { title: 'V for Vendetta', year: 2005, score: 8.2, rating: 'R' },
    { title: 'The Lion King', year: 1994, score: 8.5, rating: 'G' },
    { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
    { title: 'The Godfather', year: 1972, score: 9.2, rating: 'R' },
    { title: 'The Godfather: Part II', year: 1974, score: 9.0, rating: 'R' },
    { title: 'The Godfather: Part III', year: 1990, score: 7.6, rating: 'R' },
    { title: 'The Shawshank Redemption', year: 1994, score: 9.3, rating: 'R' },
    { title: 'Schindler\'s List', year: 1993, score: 8.9, rating: 'R' },
    { title: 'Forrest Gump', year: 1994, score: 8.8, rating: 'PG-13' },
    { title: 'Fight Club', year: 1999, score: 8.8, rating: 'R' },
    { title: 'Inception', year: 2010, score: 8.8, rating: 'PG-13' },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, score: 8.8, rating: 'PG-13' },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002, score: 8.7, rating: 'PG-13' },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003, score: 8.9, rating: 'PG-13' },
    { title: 'The Hobbit: An Unexpected Journey', year: 2012, score: 7.8, rating: 'PG-13' },
    { title: 'The Hobbit: The Desolation of Smaug', year: 2013, score: 7.8, rating: 'PG-13' },
    { title: 'The Hobbit: The Battle of the Five Armies', year: 2014, score: 7.4, rating: 'PG-13' },
    { title: 'The Dark Knight Rises', year: 2012, score: 8.4, rating: 'PG-13' },
    { title: 'The Matrix Reloaded', year: 2003, score: 7.2, rating: 'R' },
    { title: 'The Matrix Revolutions', year: 2003, score: 6.8, rating: 'R' },
    { title: 'The Silence of the Lambs', year: 1991, score: 8.6, rating: 'R' },
    { title: 'The Green Mile', year: 1999, score: 8.6, rating: 'R' },
    { title: 'Se7en', year: 1995, score: 8.6, rating: 'R' },
    { title: 'Gladiator', year: 2000, score: 8.5, rating: 'R' },
    { title: 'The Departed', year: 2006, score: 8.5, rating: 'R' },
    { title: 'Saving Private Ryan', year: 1998, score: 8.6, rating: 'R' },
    { title: 'American History X', year: 1998, score: 8.5, rating: 'R' },
    { title: 'Interstellar', year: 2014, score: 8.6, rating: 'PG-13' },
    { title: 'Psycho', year: 1960, score: 8.5, rating: 'R' },
    { title: 'The Prestige', year: 2006, score: 8.5, rating: 'PG-13' },
    { title: 'The Usual Suspects', year: 1995, score: 8.5, rating: 'R' },
    { title: 'Léon: The Professional', year: 1994, score: 8.5, rating: 'R' },
])
    .then(data => {
        console.log("It worked!")
        console.log(data)
    });