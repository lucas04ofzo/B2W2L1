function buttonCounter(imgS,imgL,pId,buttonId){
	document.getElementById("image").src = imgS;
	document.getElementById("container").style.backgroundImage = imgL;
	var remove = document.getElementById(pId);
	remove.remove();
	var count = document.createElement("p");
	count.innerHTML = 1;
	document.getElementById(buttonId).appendChild(count);
}
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