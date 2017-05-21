
//gets the input fields
var a = document.querySelector('.a');
var b = document.querySelector('.b');

//gets the submit button
var submit = document.querySelector('.onsubmit');

//gets the clear button
var clear = document.querySelector('.clear');

//gets the area to display the answers
var answer1 = document.querySelector('.answer1');
var answer2 = document.querySelector('.answer2');

//gets the toMixed button
var toMixed = document.querySelector('.to-mixed');

//gets where to display the mixedNumber
var mixedNumber = document.querySelector('.mixed-number');

//adds eventlisetner to the submit button
submit.addEventListener('click', onSubmit);

//adds eventlistener to the clear button
clear.addEventListener('click', onClear);

//gets the simplifyAgain button
var simplifyAgain = document.querySelector('.simplify-again');


//onClear function invoked by clicking the clear button
function onClear(){

	//sets the input fields value to nothing
	a.value = "";
	b.value = "";

	//focuses on the first input field
	a.focus();
}

//check function invoked by onSubmit function
function check(aV, bV){

	//undisables the toMixed button
	toMixed.disabled = false;

	//declares needed variables
	var answer1C;
	var answer2C;
	var mixed;
	var mixedNumberC;
	var wholes;
	var remainder;
	mixedNumber.textContent = "";

	//sets answer1Content to the value of the first input field
	answer1C = aV;

	//sets answer2Content to the value of the second input field
	answer2C = bV;

	//checks whether both the numerator and the denominator will be
	//integers when divided by these numbers. If so divides them
	if(Number.isInteger(answer1C / 10) && Number.isInteger(answer2C / 10)){
		answer1C = answer1C / 10;
		answer2C = answer2C / 10;
		answer1.textContent = answer1C;
		answer2.textContent = answer2C;
	}else if(Number.isInteger(answer1C / 2) && Number.isInteger(answer2C / 2)){
		answer1C = answer1C / 2;
		answer2C = answer2C / 2;
		answer1.textContent = answer1C;
		answer2.textContent = answer2C;
	}else if(Number.isInteger(answer1C / 5) && Number.isInteger(answer2C / 5)){
		answer1C = answer1C / 5;
		answer2C = answer2C / 5;
		answer1.textContent = answer1C;
		answer2.textContent = answer2C;
	}else if(Number.isInteger(answer1C / 3) && Number.isInteger(answer2C / 3)){
		answer1C = answer1C / 3;
		answer2C = answer2C / 3;
		answer1.textContent = answer1C;
		answer2.textContent = answer2C;
	}else{
		answer1.textContent = answer1C;
		answer2.textContent = answer2C;
	}

//simplifyAgain function invoked by clicking the simplifyAgain button
//allows to simplify multiples times
	simplifyAgain.onclick = function(){
		if(Number.isInteger(answer1C / 10) && Number.isInteger(answer2C / 10)){
			answer1C = answer1C / 10;
			answer2C = answer2C / 10;
			answer1.textContent = answer1C;
			answer2.textContent = answer2C;
		}else if(Number.isInteger(answer1C / 2) && Number.isInteger(answer2C / 2)){
			answer1C = answer1C / 2;
			answer2C = answer2C / 2;
			answer1.textContent = answer1C;
			answer2.textContent = answer2C;
		}else if(Number.isInteger(answer1C / 5) && Number.isInteger(answer2C / 5)){
			answer1C = answer1C / 5;
			answer2C = answer2C / 5;
			answer1.textContent = answer1C;
			answer2.textContent = answer2C;
		}else if(Number.isInteger(answer1C / 3) && Number.isInteger(answer2C / 3)){
			answer1C = answer1C / 3;
			answer2C = answer2C / 3;
			answer1.textContent = answer1C;
			answer2.textContent = answer2C;
		}else{
			answer1.textContent = answer1C;
			answer2.textContent = answer2C;
		}
	}

	//toMixed function invoked by clicking the toMixed button
	toMixed.onclick = function(){

		//checks if numerator is greater than denominator then
		//sets the numerator divided by the denominator to a variable
			if(answer1C >= answer2C){
				mixed = (answer1C / answer2C);

				//checks if there is any remainder when the numerator is 
				//divided by the denominator
				//if so sets the remainder to a variable
				if(answer1C % answer2C != 0){
					remainder = answer1C % answer2C;
				}else{
					remainder = 0;
				}


				//sets remainder to an int and stores it in answer1Content
				answer1C = parseInt(remainder);

				//sets answer1Content to a string
				toString(answer1C);

				//because answer2Content content is already an integer,
				//sets it a string
				toString(answer2C)

				//sets mixedNumberContent to the mixed variable as an 
				//integer
				mixedNumberC = parseInt(mixed);

				//checks to see if the mixed number is greater than 1
				//before the variable is turned to a string
				//if it is, makes the variable wholes equal to
				//wholes. Else sets it to whole.

				if(mixedNumberC > 1){
					wholes = "wholes";
				}else{
					wholes = "whole";
				}

				//sets mixedNumberContent to a string
				toString(mixedNumberC)

				//checks if there is any remainder
				//if there is only display the mixed number 
				//+ wholes(line 138) & disable the toMixed button
				//else display both the mixed number and the answers
				//& disable the toMixed button

				if(remainder == 0){
					mixedNumber.textContent = mixedNumberC + ' ' + wholes;
					answer1.textContent = "";
					answer2.textContent = "";
					toMixed.disabled = true;
				}else{
					mixedNumber.textContent = mixedNumberC;
					answer1.textContent = answer1C;
					answer2.textContent = answer2C;
					toMixed.disabled = true;
				}
				
			}
		}

}

//onSubmit function invoked by clicking submit button
function onSubmit(){

	//gets value of the input fields as ints
	aV = parseInt(a.value);
	bV = parseInt(b.value);

	//invokes check function, passing in the input field values
	check(aV, bV);
}
