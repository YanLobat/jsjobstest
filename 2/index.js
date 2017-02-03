function numberok(obj, num) {
	switch(obj.oper) {
		case 'times':
			return num*obj.number;
		case 'plus':
			return num+obj.number;
		case 'minus':
			return num-obj.number;
		case 'dividedBy':
			return num/obj.number;
	}
}
function zero(obj){
	if (obj) {
		return numberok(obj, 0);
	}
	else {
		return 0;
	}
}
function one(obj) {
	if (obj) {
		return numberok(obj, 1);
	}
	else {
		return 1;
	}
}
function two(obj) {
	if (obj) {
		return numberok(obj, 2);
	}
	else {
		return 2;
	}
}
function three(obj) {
	if (obj) {
		return numberok(obj, 3);
	}
	else {
		return 3;
	}
}
function four(obj) {
	if (obj) {
		return numberok(obj, 4);
	}
	else {
		return 4;
	}
}
function five(obj) {
	if (obj) {
		return numberok(obj, 5);
	}
	else {
		return 5;
	}
}
function six(obj) {
	if (obj) {
		return numberok(obj, 6);
	}
	else {
		return 6;
	}
}
function seven(obj) {
	if (obj) {
		return numberok(obj, 7);
	}
	else {
		return 7;
	}
}
function eight(obj) {
	if (obj) {
		return numberok(obj, 8);
	}
	else {
		return 8;
	}
}
function nine(obj) {
	if (obj) {
		return numberok(obj, 9);
	}
	else {
		return 9;
	}
}
function times(number) {
	return {
		oper: 'times',
		number
	}
}
function plus(number) {
	return {
		oper: 'plus',
		number
	}
}
function minus(number) {
	return {
		oper: 'minus',
		number
	}
}
function dividedBy(number) {
	return {
		oper: 'dividedBy',
		number
	}
}

console.assert(seven(times(five())) === 35);
console.assert(four(plus(nine())) === 13);
console.assert(eight(minus(three())) === 5);
console.assert(six(dividedBy(two())) === 3);