var newRecipeInList = JSON.parse(localStorage.getItem("new_recipe"));

document.getElementById('recipe_name').innerHTML = newRecipeInList.name;
document.getElementById('ingredients').innerHTML = newRecipeInList.ingredients;
document.getElementById('time').innerHTML = newRecipeInList.estimatedTime + " min";
document.getElementById('cost').innerHTML = "$" + newRecipeInList.estimatedCost;
document.getElementById('instructions').innerHTML = newRecipeInList.instructions;
document.getElementById('new_recipe_image').src = newRecipeInList.imageUrl;



