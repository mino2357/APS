var arr = {};

arr.data = [1,2,3,4,5,6,7,8,9];

arr.total = function(){
	var total = 0;
	for(var item in arr.data){
		total += arr.data[item];
	}
	return total;
}

document.write(arr.total());

