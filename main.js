
//Getting select fiekd
var select = document.querySelector('.select');

//Getting where answer will be displayed
var answer = document.querySelector('.answer');
var answerBelow = document.querySelector('.answer2');

//Getting clear button
var clear = document.querySelector('.clear');

//Getting input fields
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');

//Getting submit button
var submit = document.querySelector('.on-submit');

//Getting simplify button
var simplify = document.querySelector('.simplify');

//Getting toMixed button
var toMixed = document.querySelector('.to-mixed');

//Getting mixedNumber display
var mixedNumber = document.querySelector('.mixed-number');

//Adding eventlistner for the clear button
clear.addEventListener('click', onClear);

//Check function recives 
function check(aV, bV, cV, dV, selectValue){

	//declaring needed variables
	var ad;
	var bc;
	var bd;
	var ac;

	//answerC = numerator
	var answerC;

	//answerBelowC = denominator
	var answerBelowC;

	var remainder;
	var mixed;
	var mixedNumberC;

	//for semantics
	var wholes;

	//sets the mixedNumber textContent to nothing
	mixedNumber.textContent = "";

//If adding fractions...
	if(selectValue == "+"){

		//sets the variables needed to the letter times the other letter
		ad = (aV * dV);
		bc = (bV * cV);
		bd = (bV * dV);

		//sets the answerContent and answerBelowContent
		answerC = (ad + bc);
		answerBelowC = (bd);

		//sets the answer textContent to answerContent
		//sets the answerBelow textContent to answerBelowContent
			answer.textContent = answerC;
			answerBelow.textContent = answerBelowC;


		//simplify function invoked when simplify button is clicked
		simplify.onclick = function(){

		//checks whether both the numerator and the denominator will be
		//integers when divided by these numbers. If so divides them
			if(Number.isInteger(answerC / 10) && Number.isInteger(answerBelowC / 10)){
				answerC = answerC / 10;
				answerBelowC = answerBelowC / 10;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 2) && Number.isInteger(answerBelowC / 2)){
				answerC = answerC / 2;
				answerBelowC = answerBelowC / 2;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 5) && Number.isInteger(answerBelowC / 5)){
				answerC = answerC / 5;
				answerBelowC = answerBelowC / 5;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 3) && Number.isInteger(answerBelowC / 3)){
				answerC = answerC / 3;
				answerBelowC = answerBelowC / 3;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}
		}

		//toMixed function invoked when toMixed button is clicked
		toMixed.onclick = function(){

			//checks if numerator is greater than denominator then
			//sets the numerator divided by the denominator to a variable
			if(answerC >= answerBelowC){
				mixed = (answerC / answerBelowC);

				//checks if there is any remainder when the numerator is 
				//divided by the denominator
				//if so sets the remainder to a variable
				if(answerC % answerBelowC != 0){
					remainder = answerC % answerBelowC;
				}else{
					remainder = 0;
				}

				//sets the answerContent to an integer
				answerC = parseInt(remainder);

				//then makes it into a string
				toString(answerC);

				//makes the answerBelowContent to a string
				//it is already an integer
				toString(answerBelowC)

				//sets the mixedNumberContent to an integer of the variable
				//that holds the mixed number
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

				//makes the mixedNumberContent into a string
				toString(mixedNumberC)


				//checks if there is any remainder
				//if there is only display the mixed number 
				//+ wholes(line 138)

				if(remainder == 0){
					mixedNumber.textContent = mixedNumberC + ' ' + wholes;
					answer.textContent = "";
					answerBelow.textContent = "";
					toMixed.disabled = true;
				}else{
					mixedNumber.textContent = mixedNumberC;
					answer.textContent = answerC;
					answerBelow.textContent = answerBelowC;
					toMixed.disabled = true;
				}
				
			}
		}

	}

	//If subtracting fractions...
	if(selectValue == "-"){

		//Refer to the adding fractions conditional (line 59 - 165)

		ad = (aV * dV);
		bc = (bV * cV);
		bd = (bV * dV);

		answerC = (ad - bc);
		answerBelowC = (bd);


		answer.textContent = answerC;
		answerBelow.textContent = answerBelowC;

		simplify.onclick = function(){
			console.log('hi');
			if(Number.isInteger(answerC / 10) && Number.isInteger(answerBelowC / 10)){
				answerC = answerC / 10;
				answerBelowC = answerBelowC / 10;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 2) && Number.isInteger(answerBelowC / 2)){
				answerC = answerC / 2;
				answerBelowC = answerBelowC / 2;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 5) && Number.isInteger(answerBelowC / 5)){
				answerC = answerC / 5;
				answerBelowC = answerBelowC / 5;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 3) && Number.isInteger(answerBelowC / 3)){
				answerC = answerC / 3;
				answerBelowC = answerBelowC / 3;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}
		}

		toMixed.onclick = function(){
			if(answerC >= answerBelowC){
				mixed = (answerC / answerBelowC);
				if(answerC % answerBelowC != 0){
					remainder = answerC % answerBelowC;
				}else{
					remainder = 0;
				}

				answerC = parseInt(remainder);
				toString(answerC);

				toString(answerBelowC)

				mixedNumberC = parseInt(mixed);
				toString(mixedNumberC)


				if(remainder == 0){
					mixedNumber.textContent = mixedNumberC + " wholes. ";
					answer.textContent = "";
					answerBelow.textContent = "";
					toMixed.disabled = true;
				}else{
					mixedNumber.textContent = mixedNumberC;
					answer.textContent = answerC;
					answerBelow.textContent = answerBelowC;
					toMixed.disabled = true;
				}
				
			}
		}

	}

	//If multiplying fractions...
	if(selectValue == "x"){

		//Refer to the adding fractions conditional (line 59 - 165)
		ac = (aV * cV);
		bd = (bV * dV);

		answerC = (ac);
		answerBelowC = (bd);
		answer.textContent = answerC;
		answerBelow.textContent = answerBelowC;

		simplify.onclick = function(){
			console.log('hi');
			if(Number.isInteger(answerC / 10) && Number.isInteger(answerBelowC / 10)){
				answerC = answerC / 10;
				answerBelowC = answerBelowC / 10;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 2) && Number.isInteger(answerBelowC / 2)){
				answerC = answerC / 2;
				answerBelowC = answerBelowC / 2;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 5) && Number.isInteger(answerBelowC / 5)){
				answerC = answerC / 5;
				answerBelowC = answerBelowC / 5;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 3) && Number.isInteger(answerBelowC / 3)){
				answerC = answerC / 3;
				answerBelowC = answerBelowC / 3;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}
		}

		toMixed.onclick = function(){
			if(answerC >= answerBelowC){
				mixed = (answerC / answerBelowC);
				if(answerC % answerBelowC != 0){
					remainder = answerC % answerBelowC;
				}else{
					remainder = 0;
				}

				answerC = parseInt(remainder);
				toString(answerC);

				toString(answerBelowC)

				mixedNumberC = parseInt(mixed);
				toString(mixedNumberC)


				if(remainder == 0){
					mixedNumber.textContent = mixedNumberC + " wholes. ";
					answer.textContent = "";
					answerBelow.textContent = "";
					toMixed.disabled = true;
				}else{
					mixedNumber.textContent = mixedNumberC;
					answer.textContent = answerC;
					answerBelow.textContent = answerBelowC;
					toMixed.disabled = true;
				}
				
			}
		}

	}

	//If dividing fractions...
	if(selectValue == "/"){

		//Refer to the adding fractions conditional (line 59 - 165)

		ad = (aV * dV);
		bc = (bV * cV);

		answerC = (ad);
		answerBelowC = (bc);
		answer.textContent = answerC;
		answerBelow.textContent = answerBelowC;

		simplify.onclick = function(){
			console.log('hi');
			if(Number.isInteger(answerC / 10) && Number.isInteger(answerBelowC / 10)){
				answerC = answerC / 10;
				answerBelowC = answerBelowC / 10;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 2) && Number.isInteger(answerBelowC / 2)){
				answerC = answerC / 2;
				answerBelowC = answerBelowC / 2;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 5) && Number.isInteger(answerBelowC / 5)){
				answerC = answerC / 5;
				answerBelowC = answerBelowC / 5;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}else if(Number.isInteger(answerC / 3) && Number.isInteger(answerBelowC / 3)){
				answerC = answerC / 3;
				answerBelowC = answerBelowC / 3;
				answer.textContent = answerC;
				answerBelow.textContent = answerBelowC;
			}
		}

		toMixed.onclick = function(){
			if(answerC >= answerBelowC){
				mixed = (answerC / answerBelowC);
				if(answerC % answerBelowC != 0){
					remainder = answerC % answerBelowC;
				}else{
					remainder = 0;
				}

				answerC = parseInt(remainder);
				toString(answerC);

				toString(answerBelowC)

				mixedNumberC = parseInt(mixed);
				toString(mixedNumberC)


				if(remainder == 0){
					mixedNumber.textContent = mixedNumberC + " wholes. ";
					answer.textContent = "";
					answerBelow.textContent = "";
					toMixed.disabled = true;
				}else{
					mixedNumber.textContent = mixedNumberC;
					answer.textContent = answerC;
					answerBelow.textContent = answerBelowC;
					toMixed.disabled = true;
				}
				
			}
		}
		
	}
}

//Submit function
function hasSubmitted(){

	//Gets select value
	selectValue = select.value;

	//Get input field values and turns them into ints
	aValue = parseInt(a.value);
	bValue = parseInt(b.value);
	cValue = parseInt(c.value);
	dValue = parseInt(d.value);

	//undisabled thte toMixed button
	toMixed.disabled = false;

	//calls the check function, passing in the input field values
	//and the select value
	check(aValue, bValue, cValue, dValue, selectValue);
}

//Clear function
function onClear(){

	//Clears all the input fields
	a.value = "";
	b.value = "";
	c.value = "";
	d.value = "";	

	//Focuses on the first input field
	a.focus();
}

//Adding eventlistner for submit button
submit.addEventListener('click', hasSubmitted);

