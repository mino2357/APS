document.write("<p>begin script</p>")


var num = 1000;
for(var i=2; i<=num; i++){
	if(c_p(i)){
		document.write(i+"<br>");
	}
}


function c_p(n){
	var flag = true;
	for(var j=2; j<n ; j++){
		if(n%j == 0){
			flag = false;
			break;
		}
	}
	return flag;
}

document.write("<p>end script</p>")
