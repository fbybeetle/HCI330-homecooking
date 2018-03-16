function addToMyFavorites(){
	var el = document.getElementById("add_to_favorite");
	if (el.innerHTML.indexOf("Favorites") != -1){
		el.innerHTML = "Successfully Added";
	} else {
		el.innerHTML = "Add to My Favorites";
	}
}