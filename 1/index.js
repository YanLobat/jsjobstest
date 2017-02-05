function calculate() {
	return Object.values(arguments).reduce((previousValue, currentValue, index, array) => {
		return previousValue + currentValue.split('').reverse().reduce(function(x, y, i){
	      return (y === '1') ? x + Math.pow(2, i) : x;
	    },0);
	},0);;
}

console.assert(calculate('10', '10') === 4);
console.assert(calculate('10', '0') === 2);
console.assert(calculate('101', '10') === 7);