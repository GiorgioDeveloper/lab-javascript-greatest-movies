/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function rateAvg (array) {
  var totalRate = array.reduce( function ( sum, movie ){
    return sum + Number(movie.rate);
 }, 0);
    return (totalRate / movies.length).toFixed(1);
}
console.log(rateAvg(movies));


// Iteration 2: Drama movies - Get the average of Drama Movies

function rateAvgDrama (array, name){

 const filterOut = array.filter( movie => movie.genre.includes (name));

 return rateAvg(filterOut);
}
console.log(rateAvgDrama(movies, "Drama"));



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


  // here we convert the timing from hmin in min

function timeConv (array){

    const newArray = array.map (function(movie){
    var hours = parseFloat(movie.duration.split(' ')[0]) * 60;
    var min = 0;
    if(movie.duration.split(' ').length === 2) {
      min = parseFloat(movie.duration.split(' ')[1])
    }
     movie.duration = hours + min
    return movie
    });
return newArray
}
   // here we create a new array with all movies with new timing

var movies2 = timeConv(movies);

   //here we sort using the compare function

function compare( movieA, movieB ) {
    if ( movieA.duration < movieB.duration ){
      return -1;
    }
    if ( movieA.duration > movieB.duration ){
      return 1;
    }
    return 0;
  }
  
  movies2.sort( compare );

  console.log(movies2);


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (array, name){

    const filterOut = array.filter( movie => movie.director == name);
   
    return filterOut.length;
   }
   console.log(howManyMovies(movies, "Steven Spielberg"));
   
// Iteration 4 with REDUCE

var howManyMovies2 = movies.reduce(function(countSteven, movie){
    //if movie is directed by Steven Spielberg then add 1 to countSteven.
    //else add 0;

    if (movie.director == "Steven Spielberg") {
       return countSteven += 1;
    }
    else {
        return countSteven;
    }
  // the 0 is the starting point of the storage (countSteven)
}, 0);

console.log(howManyMovies2);


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function compare ( movieA, movieB ) {
    if ( movieA.title < movieB.title ){
      return -1;
    }
    if ( movieA.title > movieB.title ){
      return 1;
    }
    return 0;
  }
  
  movies.sort(compare);

  
let movies3 = movies.map(titles => {
    return titles.title
});

console.log(movies3);

function titleA (array) {
    var top = [];
    for (let i=0; i < 20; i++){
top.push(array[i]);
    }
    return top;
}
console.log(titleA(movies3)); 
  


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// check again this. (example below)

const obj = {
    name: "Giorgio",
    status: "Commendatori",
    method: function() {
        console.log(`${this.name} is a ${this.status}`)
    }
}
