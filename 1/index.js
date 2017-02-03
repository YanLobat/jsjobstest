function calculate(a, b) {
	let aa = ~~a.split('').reduceRight((previousValue, currentValue, index, array) => {
	  	return ~~previousValue + Math.pow(2, array.length - index - 1)*currentValue;
	});
	let bb = ~~b.split('').reduceRight((previousValue, currentValue, index, array) => {
	  return ~~previousValue + Math.pow(2, array.length - index - 1)*currentValue;
	});
	console.log(aa+bb);
	return aa+bb;
}

console.assert(calculate('10', '10') === 4);
console.assert(calculate('10', '0') === 2);
console.assert(calculate('101', '10') === 7);