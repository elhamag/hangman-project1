
// //console.log("working!");
// function startGame(event){
// const button = document.querySelector(".button");
// console.log(button);
// event.addEventListener('onclick', button);
// }


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

    //create span
    let span = document.createElement("span");

    //crate letters text Node 
    let theLetter = document.createTextNode(letter);

    //apend the letter to span 
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