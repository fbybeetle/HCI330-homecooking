// var selected = []; 


function Clicked(element){
	var frame = document.getElementById('ifr1'); 
	// if (selected.indexOf(element.value) == -1){
	// 	selected.push(element.value);		
	// }
	console.log(element.value);
	frame.contentWindow.postMessage(element.value, '*'); 
}

function push_comment(){
	var myDate = new Date();
	myDate.toLocaleTimeString();
	var name = document.getElementById("you_name").value;
	var content = document.getElementById("you_comment").value;
	var block = document.getElementById("comment_block");
	var newcomment = document.createElement("div");
	var new_user = document.createElement("div");
	var new_content = document.createElement("div");
	var new_time = document.createElement("label");
	new_time.innerHTML = myDate;
	new_user.setAttribute("class", "comment_name");
	new_content.setAttribute("class","comment_content") ;
	new_time.setAttribute("class","comment_time") ;
	new_content.innerHTML = content;
	name += ":";
	new_user.innerHTML = name;
	window.alert("submit successfully");
	document.getElementById("you_name").value = "";
	document.getElementById("you_comment").value = "";
	newcomment.appendChild(new_user);
	newcomment.appendChild(new_time);
	newcomment.appendChild(new_content);
	block.appendChild(newcomment);
}

