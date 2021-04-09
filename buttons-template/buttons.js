function buttonClicked(button){
	var get = document.getElementById(button);
	if(button == 'button1'){
		buttonCounter('images/1.jpg', 'url(images/bg1.jpg)', 'p1', 'button1');
	}else if(button == 'button2'){
		buttonCounter('images/2.jpg', 'url(images/bg2.jpg)', 'p2', 'button2');
	}else{
		buttonCounter('images/3.jpg', 'url(images/bg3.jpg)', 'p3', 'button3');
	}
}
function buttonCounter(imgS, imgL, pId, buttonId){
	document.getElementById("image").src = imgS;
	document.getElementById("container").style.backgroundImage = imgL;
	if(pId == 'p1'){
		document.getElementById(pId).innerHTML = number1++
	}else if(pId == 'p2'){
		document.getElementById(pId).innerHTML = number2++
	}else{
		document.getElementById(pId).innerHTML = number3++
	}
}
var number1 = 1
var number2 = 1
var number3 = 1