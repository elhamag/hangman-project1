
// //console.log("working!");
// function startGame(event){
// const button = document.querySelector(".button");
// console.log(button);
// event.addEventListener('onclick', button);
// }


function startGame() {
    gId("home").className = "hidden"
    // gId("result").className = "hidden"
    newGame()
}
function gId(a) {
    return document.getElementById(a)
}

function newGame() {
    gId("keyboard").className = "container";
}
// gId find the div
// function mean replacing a block of code.
// documnet is the HTML page. getElement means (body,div,a, anything inside an HTML)


//Letter
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters (counts all letter from 0 - 26 and shows all the letters in array)
let lettersArray = Array.from(letters);
//console.log(lettersArray);


//select letters container
let lettersContainer = document.querySelector(".letters");
//console.log(lettersContainer);

//generate letters
lettersArray.forEach(letter =>{

    //create an element and call it span
    let span = document.createElement("span");

    //add text to element.
    let theLetter = document.createTextNode(letter);

    //theLetter is an element. adding text to the span. 
    span.appendChild(theLetter);

    //add class to span
    span.className = "letter-box";


    //append span to the letter container
    lettersContainer.appendChild(span);
});

// object of words + categories 
const words = {
    programming: ["javascript", "python", "java", "fortan", "go", "php"],
    movies: ["incedious", "coco", "extraction", "onward", "underwater", "emma", "intuition"],
    people: ["abraham lincoln", "barak obama", "donald trump","kim kardashian", "beyonce"],
    countries: ["united states", "iran", "japan", "egypt", "germany", "qatar", "yemen"]
}

//get random property: keys are programming, movies, people and countries.use object for key function. allKeys is collection of all keys and words that is programinf, movies and countries. 
let allKeys = Object.keys(words);
//console.log(allKeys);


// //random number depend on keys length
// /ath.floor = integer values from double and fl/length is the size of the class.
// //Moat 
// // Math.random = float value betwee 0 and 1
// //how many categories we have. allKeys.length
let randomProperNumber = Math.floor(Math.random()*allKeys.length);
console.log(randomProperNumber);

// //category
let randomProperKey = allKeys[randomProperNumber];
// hashmap allKeys[randomProperNumber], getting index from that for example 3 which is countries 
//console.log(randomProperKey);

// //console.log(words["people"]);


// //category words
let randomProperValue = words[randomProperKey];
//console.log(randomProperValue[1]);


// //randome number depends on words
let randomValueNumber = Math.floor(Math.random()*randomProperValue.length);
// //floate(0.3)*countries length which is "united states", "iran", "japan", "egypt", "germany", "qatar", "yemen" (7), 0.3*7 = 2.1 that convert it to 2
//console.log(randomValueNumber);


// //randome chosen word
let randomValueValue = randomProperValue[randomValueNumber];
// //japan
//console.log(randomValueValue);


// //set categoty information 
document.querySelector(".game-info .category span").innerHTML = randomProperKey // by adding this part, value of choosen word will be shown on the browser (+ ' ' + randomValueValue;)


//select letters guess element\
let lettersGuessContainer = document.querySelector(".letter-guess");
//console.log(lettersGuessContainer);
//convert chosen word to Array like ["k", "i", "m", " ", "k", "a", "r", "d", "a", "s", "h", "i", "a", "n"]
let lettersAndSpace = Array.from(randomValueValue);
//console.log(lettersAndSpace);



//console.log(lettersAndSpace);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

    let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === " ") {
      //console.log("found ")


    //let current = document.createTextNode(letter);
    //   currentDiv.appendChild(current);


    // Add Class To The Span
    emptySpan.className = 'with-space';

  }
//   Append Span To The Letters Guess Container
lettersGuessContainer.appendChild(emptySpan);
 });

//select guess spans
let guessSpans =document.querySelectorAll(".letter-guess span");

//set 


 //add clicking letter 
document.addEventListener("click", (e) => {

    if (e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        //console.group(e);

        //get clicked letter 
        let theClickLetter = e.target.innerHTML. toLowerCase();

        // console.log(theClickLetter);

        //the chosen word 
lettheChosenWord = Array.from(randomValueValue.toLowerCase());

        
        
lettersAndSpace.forEach((wordLtter, wordIndex) => {

    // if the click letter equal to one the chosen word letter 
    if (theClickLetter == wordLtter){
        console.log(`found at indext number ${wordIndex}`);

        // loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {

            // it prints out the letter on the box
            if (wordIndex === spanIndex){
                span.innerHTML = theClickLetter;

            }
        });

    }
})

    }
});

 
