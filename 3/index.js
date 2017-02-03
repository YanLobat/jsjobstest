function defaultArguments(fn, obj) {
	let fName = fn.name;
	let fStr = fn.toString();
	let fArgs = fStr.split(fName);
	fArgs = fArgs[1].split('{');
	fArgs = fArgs[0].replace('\t','').replace(' ', '').replace('(','').replace(')','').split(',');
	console.log(fArgs);
	return fn.bind(null, 1, 2);
}

function add(a,	b) {
	console.log(a, b);
	return	a	+	b;
};
var	add_	= defaultArguments(add, {	b: 9 });
add_(10); //	returns	19
// add_(10, 7); //	returns	17
// add_(); //	returns	NaN
// add_	= defaultArguments(add_, {	b: 3,	a: 2 });
// add_(10); //	returns	13	now
// add_(); //	returns	5
// add_	= defaultArguments(add_, {	c: 3 }); //	doesn't	do	anything,	since	c	isn't	an	argument
// add_(10); //	returns	NaN
// add_(10, 10); //	returns	20