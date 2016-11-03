var val = 1234567890;

document.write(val+":");

switch(typeof val){
	case "string":
		document.write("text");
		break;
	case "number":
		document.write("number");
		break;
	case "boolean":
		document.write("boolean");
		break;
	default:
		document.write("another");
		break;
}


