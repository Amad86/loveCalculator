var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var input2 = document.getElementById("userinput2");
var n = Math.random();
var nm = Math.floor(n * 100)


function inputLength(){
	return input.value.length;	
}

function inputLength2(){
	return input2.value.length
}

button.addEventListener("click", function(){
	if (inputLength() > 0) {
		document.getElementById("myP").innerHTML = input.value;
		document.getElementById("res").innerHTML = nm + "%";
		input.value = "";
	}
})

button.addEventListener("click", function(){
	if (inputLength2() > 0) {
		document.getElementById("myP2").innerHTML = input2.value;
		input2.value = "";
	}
})



