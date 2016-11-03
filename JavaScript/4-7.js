var personal = {};
personal.myname = "mino";
personal.mail = "test@gmail.com";
personal.tel = "000-111-2222";

personal.getData = function(){
	return "name:" + this.myname + " mail:" + this.mail + " tel:" + this.tel;
}

personal.print = function(){
	document.write(this.getData());
}

personal.print();
