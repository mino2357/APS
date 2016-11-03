document.write(getAllPrime(100));

function getAllPrime(max){
	var result = "prime:";
	for(var i = 2; i <= max; i++){
		if(IsPrime(i)){
			result += " " + i;
		}
	}
	return result;

	function IsPrime(n){
		for(var i= 2; i<n ; i++){
			if(n%i == 0){
				return false;
			}
		}
		return true;
	}

}

