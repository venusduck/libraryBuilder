class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = true;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(newRating) {
        this.ratings.push(newRating);
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating)
        return ratingsSum / this.ratings.length;
    }
};
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
};
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
};
class Cd extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs
    }
    get artist() {
        return this._artist
    }
    get songs() {
        return this._songs
    }
}
const mobyDick = new Book('Moby Dick', 'Herman Melville', 378)
mobyDick.addRating(12)
mobyDick.addRating(11)
mobyDick.getAverageRating();