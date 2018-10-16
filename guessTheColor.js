var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var difficultyBtns = document.querySelectorAll(".difficulty");


init();

function init(){

	setupDifficultyButtons();
	setupSquares();
	reset();
}

function setupDifficultyButtons(){
	for(var i = 0; i < difficultyBtns.length; i++){
		difficultyBtns[i].addEventListener("click",function(){
			difficultyBtns[0].classList.remove("selected");
			difficultyBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			}
			else{
				numOfSquares =6;
			}
			reset();
		});
	}
}

function setupSquares(){
	//event listener for squares
	for(var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click",function(){
		//grab the color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare grabed color to the pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			message.style.color = "Green";
			//change all square's color
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?";
		}
		else{
			message.textContent = "Try again";
			message.style.color = "red";
			this.style.backgroundColor = "#0f3e3e";
		}
	});
	};
}

function reset(){
	resetButton.textContent = "New colors";
	message.textContent = "";
	h1.style.backgroundColor = "#800040";
	//generate new colors based on difficluty
	colors = randomColor(numOfSquares);
	//pick one color from new colors
	pickedColor = pickColor();
	//change colorDisplay to new pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++ ){
		//change their color to the clickedColor
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function randomColor(num){
	//make an array
	var colors = [];

	for(var i = 0; i < num; i++){
		//push random rgb to the array
		colors.push(randomRgbValues());
	}
	
	//return the array 
	return colors;
}

function randomRgbValues(){
	//make a number from 0-255 for r g and b
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	//shrink them together and make a string
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

	return rgb;
}