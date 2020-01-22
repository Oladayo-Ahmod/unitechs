function show(){
	var y = document.getElementById("inputing");
	var x = document.getElementById('result');

	if ( y !== "") {
		 alert( "You are born in "+"19"+(79-y.value + 40));
	}
	else{
		alert("Enter your year!");
	}
}