document.getElementById('button1').addEventListener("click", function(){
	buttonClicked(button1);
});
document.getElementById('button2').addEventListener("click", function(){
	buttonClicked(button2);
});
document.getElementById('button3').addEventListener("click", function(){
	buttonClicked(button3);
});

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
// function buttonCounter(imgS, imgL, pId, buttonId){
// 	document.getElementById("image").src = imgS;
// 	document.getElementById("container").style.backgroundImage = imgL;
// 	if(pId == 'p1'){
// 		document.getElementById(pId).innerHTML = number1++
// 		document.getElementById(buttonId).style = 'background-color: red';
// 		document.getElementById('button1').onclick = '';
// 		document.getElementById('button2').onclick = "buttonClicked('button2')";
// 		document.getElementById('button3').onclick = "buttonClicked('button3')";
// 		document.getElementById('button2').style = 'background-color: #4caf50';
// 		document.getElementById('button3').style = 'background-color: #4caf50';
// 	}else if(pId == 'p2'){
// 		document.getElementById(pId).innerHTML = number2++
// 		document.getElementById(buttonId).style = 'background-color: red';
// 		document.getElementById('button2').onclick = '';
// 		document.getElementById('button1').onclick = "buttonClicked('button1')";
// 		document.getElementById('button3').onclick = "buttonClicked('button3')";
// 		document.getElementById('button1').style = 'background-color: #4caf50';
// 		document.getElementById('button3').style = 'background-color: #4caf50';
// 	}else{
// 		document.getElementById(pId).innerHTML = number3++
// 		document.getElementById('button3').onclick = '';
// 		document.getElementById('button1').onclick = "buttonClicked('button1')";
// 		document.getElementById('button2').onclick = "buttonClicked('button2')";
// 		document.getElementById(buttonId).style = 'background-color: red';
// 		document.getElementById('button1').style = 'background-color: #4caf50';
// 		document.getElementById('button2').style = 'background-color: #4caf50';
// 	}
// }
var number1 = 1
var number2 = 1
var number3 = 1