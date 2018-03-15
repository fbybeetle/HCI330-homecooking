// var selected = []; 


function Clicked(element){
	var frame = document.getElementById('ifr1'); 
	// if (selected.indexOf(element.value) == -1){
	// 	selected.push(element.value);		
	// }
	console.log(element.value);
	frame.contentWindow.postMessage(element.value, '*'); 
}

function Search(){
	var frame = document.getElementById('ifr1'); 
	frame.contentWindow.postMessage('submitted', '*'); 
}

