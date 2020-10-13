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
lettersArray.forEach(letter => {
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
		people: ["abraham lincoln", "barak obama", "donald trump", "kim kardashian", "beyonce"],
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
let randomProperNumber = Math.floor(Math.random() * allKeys.length);
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
let randomValueNumber = Math.floor(Math.random() * randomProperValue.length);
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
// console.log(lettersGuessContainer); it shows how many spans has been created based on the picked word.
//convert chosen word to Array like ["k", "i", "m", " ", "k", "a", "r", "d", "a", "s", "h", "i", "a", "n"]
let lettersAndSpace = Array.from(randomValueValue);
//console.log(lettersAndSpace);
//console.log(lettersAndSpace);
// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {
	let emptySpan = document.createElement("span");
	// If Letter Is Space
	if(letter === " ") {
		//console.log(" ")
		// Add Class To The Span
		emptySpan.className = 'with-space';
	}
	//   Append Span To The Letters Guess Container
	lettersGuessContainer.appendChild(emptySpan);
});
//select guess spans
let guessSpans = document.querySelectorAll(".letter-guess span");
//set wrong attempts
let wrongAttempts = 0;
//select the draw elements.
let theDraw = document.querySelector(".hangman-draw");
let userWord = "";
//add clicking letter 
document.addEventListener("click", (e) => {
	//set the chose status
	let theStatus = false;
	if(e.target.className === 'letter-box') {
		e.target.classList.add("clicked");
		//console.group(e);
		//get clicked letter 
		let theClickLetter = e.target.innerHTML.toLowerCase();
		//console.log(theClickLetter);
		//the chosen word ----> it will show all the letters and spaces
		let theChosenWord = Array.from(randomValueValue.toLowerCase());
		//console.log(theChosenWord);
		lettersAndSpace.forEach((wordLtter, wordIndex) => {
			// if the click letter equal to one the chosen word letter 
			if(theClickLetter == wordLtter) {
				//console.log(`found at indext number ${wordIndex}`); //it shows the index numbers inside the box
				//set status to correct 
				theStatus = true;
				// loop on all guess spans
				guessSpans.forEach((span, spanIndex) => {
					// it prints out the letter on the box
					if(wordIndex === spanIndex) {
						span.innerHTML = theClickLetter;
						userWord = userWord + theClickLetter;
						console.log(userWord);
					}
				});
			}
		})
		if(userWord.length === lettersAndSpace.length) winGame();
	

        function WinGame() {
            let div = document.createElement("div");
            let divText = document.createTextNode(`YOU WIN`);
            div.appendChild(divText);
            div.className = 'popup';
            document.body.appendChild(div);
        }
        // outside of loop
        //console.log(theStatus);
        //if the letter is wrong
        if(theStatus !== true) {
            //increase the wrong attempts 
            wrongAttempts++;
            //add class wrong the draw elements
            theDraw.classList.add(`wrong-${wrongAttempts}`);
        }

        let attempts = gId("attempts")

        let left = 8-wrongAttempts;
        console.log(left);
        let text = document.createTextNode(`You have ${left} attempts left`);

        attempts.appendChild(text);
        attempts.innerText = `You have ${left} attempts left`;
        console.log(attempts);
        if(wrongAttempts === 8) {
            endGame();
            lettersContainer.classList.add("finished");
            //document.getElementById("game").style.backgroundColor = "white";
        }
    }
});
//endgame function
function endGame() {
	// Create Popup Div
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    
	// Create Text
	//let divText = document.createTextNode(`GAME OVER the key word is "${randomValueValue}"`);
	////console.log(divText);
    // Append Text To Div
    let p1text = document.createTextNode(`GAMEOVER`);
    let p2text = document.createTextNode(`the key word is "${randomValueValue}"`);

    p1.appendChild(p1text);
    p2.appendChild(p2text);
	div.appendChild(p1);
    div.appendChild(p2);
    // Add Class On Div
    div.className = 'popup';
    
	// Append To The Body
	document.body.appendChild(div);
}
document.getElementById("restart").addEventListener('click', reset)

function reset() {
	location.reload();
}
/* reset letter to guess on click */
//guessInput.onclick = function () {
//this.value = '';
//};