var result = isOdd();
document.write(result);

function isOdd(n){
	if(n == null || (typeof n) != "number") return undefined;
	return n%2 == 0 ? false : true;
}
