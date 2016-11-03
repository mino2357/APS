var result = average(1,2,3,4,5,6,7,8,9,6,54);
document.write(result);

function average(){
	var total = 0;
	for(var item in arguments){
		total += arguments[item];
	}
	document.write(total+"<br>");
	document.write(arguments.length+"<br>");
	return total/arguments.length;
}

