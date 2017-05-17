var select = document.querySelector('.select');
var answer = document.querySelector('.answer');
var answerBelow = document.querySelector('.answer2');
var clear = document.querySelector('.clear')
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');

var submit = document.querySelector('.on-submit');
var simplify = document.querySelector('.simplify')
clear.addEventListener('click', onClear);

function check(aV, bV, cV, dV){
	var ad;
	var bc;
	var bd;
	var ac;
	var answerC;
	var answerBelowC;
	if(selectValue == "+"){
		ad = (aV * dV);
		bc = (bV * cV);
		bd = (bV * dV);

		answerC = (ad + bc);
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


	}
	if(selectValue == "-"){
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

	}
	if(selectValue == "x"){
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

	}
	if(selectValue == "/"){
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
		
	}
}

function hasSubmitted(){
	selectValue = select.value;
	aValue = parseInt(a.value);
	bValue = parseInt(b.value);
	cValue = parseInt(c.value);
	dValue = parseInt(d.value);
	check(aValue, bValue, cValue, dValue, selectValue);
}

function onClear(){
	a.value = "";
	b.value = "";
	c.value = "";
	d.value = "";
	a.focus();
}
submit.addEventListener('click', hasSubmitted);

