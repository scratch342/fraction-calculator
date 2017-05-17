var a = document.querySelector('.a');
var b = document.querySelector('.b');
var submit = document.querySelector('.onsubmit');
var clear = document.querySelector('.clear');
var answer1 = document.querySelector('.answer1');
var answer2 = document.querySelector('.answer2');

submit.addEventListener('click', onSubmit);
clear.addEventListener('click', onClear);
var simplifyAgain = document.querySelector('.simplify-again');

function onClear(){
	a.value = "";
	b.value = "";
	a.focus();
}

function check(aV, bV){
	console.log('hi');
	var answer1C;
	var answer2C;

	answer1C = aV;
	answer2C = bV;
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
		answer2C.textContent = answer2C;
	}

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
}

function onSubmit(){
	aV = parseInt(a.value);
	bV = parseInt(b.value);
	check(aV, bV);
}
