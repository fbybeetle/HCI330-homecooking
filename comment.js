// var selected = []; 
var range = ["-webkit-clip-path: inset(0px 300px 0px 0px); ", "-webkit-clip-path: inset(0px 266.4px 0px 0px); ", "-webkit-clip-path: inset(0px 233.1px 0px 0px); ", "-webkit-clip-path: inset(0px 199.8px 0px 0px); ", "-webkit-clip-path: inset(0px 166.5px 0px 0px); ", "-webkit-clip-path: inset(0px 133.2px 0px 0px); ", "-webkit-clip-path: inset(0px 99.9px 0px 0px); ", "-webkit-clip-path: inset(0px 66.6px 0px 0px); ", "-webkit-clip-path: inset(0px 33.3px 0px 0px); ", "-webkit-clip-path: inset(0px 0px 0px 0px); "];

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
	var star_number = document.getElementById("input_star").value;
	console.log(star_number);
	var newcomment = document.createElement("div");
	var new_user = document.createElement("div");
	var new_content = document.createElement("div");
	var new_time = document.createElement("label");
	var new_star = document.createElement("img");
	var range_pos = 0;
	new_star.setAttribute("src","star.png");
	range_pos = star_number * 2 - 1;
	new_star.setAttribute("style",range[range_pos]);

	
	// new_star.setAttribute("type","number");
	// new_star.setAttribute("class","rating");
	// new_star.setAttribute("id","input-21b");
	// new_star.setAttribute("min","0");
	// new_star.setAttribute("max","5");
	// new_star.setAttribute("step","0.5");
	// new_star.setAttribute("data-size","lg");
	// new_star.setAttribute("disabled","disabled")
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
	console.log(document.getElementById("image"));
	// document.getElementById("image").style.clip = range[range_pos];
	newcomment.appendChild(new_user);
	newcomment.appendChild(new_star);
	newcomment.appendChild(new_time);
	newcomment.appendChild(new_content);
	block.appendChild(newcomment);
	// cur_id = String(int(cur_id) + 1);
}


function goToOverview() {$("html,body").animate({scrollTop: $("#Overview").offset().top}, 500);//relocate to Overview
}
function goToTimeConsuming() {$("html,body").animate({scrollTop: $("#TimeConsuming").offset().top}, 500);//relocate to TimeConsuming
}
function goToTotalCost() {$("html,body").animate({scrollTop: $("#TotalCost").offset().top}, 500);//relocate to TotalCost
}
function goToIngredients() {$("html,body").animate({scrollTop: $("#Ingredients").offset().top}, 500);//relocate to Ingredients
}
function goToInstructions() {$("html,body").animate({scrollTop: $("#Instructions").offset().top}, 500);//relocate to Instructions
}
function goToReviews() {$("html,body").animate({scrollTop: $("#Reviews").offset().top}, 500);//relocate to Reviews
}



