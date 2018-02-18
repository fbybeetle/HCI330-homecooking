var selected = [],
	unselected = ["milk", "egg", "cheese"],
	recipes = [{id: "Scrambled Egg", ingredient: ["Egg", "Butter"]}, {id: "Salt Grilled Chicken", ingredient: ["Salt","Chicken","Pepper"]}, {id: "Tomato Concasse", ingredient: ["Tomato"]},{id:"Baked Grilled Potato",ingredient:["Potato","Butter"]},{id:"Piggy Wiggys",ingredient:["Sausage","Flour"]},{id:"Beef Steak",ingredient:["Beef","Salt","Onion"]}];


window.addEventListener('message', function(event) { 

    // IMPORTANT: Check the origin of the data!
    if (event.data != "submitted"){
    	var index1 = selected.indexOf(event.data),
    		index2 = unselected.indexOf(event.data);
    	if (index1 == -1){
			selected.push(event.data);	
			unselected.splice(index2, 1)
		}
		else{
			selected.splice(index1, 1);
			unselected.push(event.data);
		}
	}
	else{
		
		// var all = document.getElementsByClassName("result");
		// [].forEach.call(all, function(element) {
		// 	console.log(element.tagName);
 	// 		if (selected.indexOf() != -1){
 	// 			console.log(1);
 	// 			element.style.display = "block";
 	// 		} 
 	// 		else{
 	// 			element.style.display = "none"
 	// 		}  
		// });

		recipes.forEach(function(entry){
				for(var i = 0; i < entry.ingredient.length; i++){
					console.log(document.getElementById(entry.id));
					if (selected.indexOf(entry.ingredient[i]) != -1){
						document.getElementById(entry.id).style.display = "block";
						break;
					} 
					else{
						document.getElementById(entry.id).style.display = "none";
					}
				}
			})

	}
        // console.log(event.data);  
        console.log(selected);
});

