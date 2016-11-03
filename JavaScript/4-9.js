var p1 = new personal("mino","test@gmail.com","000-1111-2222");
var p2 = new personal("M","M@gmail.com","000-1111-3333");

p1.print();
p2.print();
console.log(p1);

/* constructor function */
function personal(name, mail, tel){
	this.myname = name;
	this.mail = mail;
	this.tel = tel;

	this.getData = function(){
		return "name:" + this.myname + " mail:" + this.mail + " tel:" + this.tel + "<br>";
	}

	this.print = function(){
		document.write(this.getData());
	}
}
