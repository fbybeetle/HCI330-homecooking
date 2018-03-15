var selected = [],
	unselected = ["milk", "egg", "cheese"],
	recipes = [{id: "Scrambled Egg", ingredient: ["Egg", "Butter"]}, {id: "Salt Grilled Chicken", ingredient: ["Salt","Chicken","Pepper"]}, {id: "Tomato Concasse", ingredient: ["Tomato"]},{id:"Baked Grilled Potato",ingredient:["Potato","Butter"]},{id:"Piggy Wiggys",ingredient:["Sausage","Flour"]},{id:"Beef Steak",ingredient:["Beef","Salt","Onion"]}],
	newRecipe;

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

window.addEventListener("load", function(event) {
	var newRecipeInList = JSON.parse(localStorage.getItem("new_recipe"));

	var uploaded_recipe = document.createElement("li");
	var recipe_name = document.createElement("a");
	recipe_name.href = "new-recipe-detail.html";
	recipe_name.innerHTML = newRecipeInList.name;
    recipe_name.setAttribute("target","_blank");
    uploaded_recipe.appendChild(recipe_name);

	var newRecipeElement = document.createElement('div');
	newRecipeElement.className += "col-2";
	var img = document.createElement('img');
	img.src = newRecipeInList.imageUrl;
	img.className += 'recipe_img'; 

	var recipeTitleElement = document.createElement('div');
	var recipeTitleLink = document.createElement('a');
	recipeTitleLink.href = 'new-recipe-detail.html';
	recipeTitleLink.innerHTML = newRecipeInList.name;
    recipeTitleLink.setAttribute("target","_blank");
	recipeTitleElement.className += 'recipe_name';
	recipeTitleElement.appendChild(recipeTitleLink);

	newRecipeElement.appendChild(img);
	newRecipeElement.appendChild(recipeTitleElement);

	if(document.getElementById('recipe_pos')) {
        document.getElementById('recipe_pos').append(newRecipeElement);
    }
    if(document.getElementById('uploaded_recipe')){
        document.getElementById('uploaded_recipe').append(uploaded_recipe);
	}
});


function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  var name = document.getElementById('upload-name').value,
  		ingredients = document.getElementById('upload-ingredients').value,
  		instructions = document.getElementById('upload-instructions').value,
  		imageUrl = document.getElementById('upload-image-url').value,
  		estimatedCost = document.getElementById('upload-estimated-cost').value,
  		estimatedTime = document.getElementById('upload-estimated-time').value;
		
  newRecipe = {
  	name: name,
  	'ingredients': ingredients,
  	'instructions': instructions, 
  	'imageUrl': imageUrl,
  	'estimatedCost': estimatedCost, 
  	'estimatedTime': estimatedTime
  }
  if (imageUrl == "")
  {
	  window.alert("You need fill all blank")
	  return false;
  }
    if (ingredients == "")
    {
        window.alert("You need fill all blank")
        return false;
    }
    if (instructions == "")
    {
        window.alert("You need fill all blank")
        return false;
    }
    if (estimatedCost == "")
    {
        window.alert("You need fill all blank")
        return false;
    }
    if (estimatedTime == "")
    {
        window.alert("You need fill all blank")
        return false;
    }




  localStorage.setItem('new_recipe', JSON.stringify(newRecipe));

  window.location.replace('index.html');
  return false;
}


var form = document.getElementById('upload-form');

if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}




