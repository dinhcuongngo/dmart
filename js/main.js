function showSearch(){
	var search = document.getElementsByClassName("search");
	search[0].classList.toggle("search-show");
}

function showMenu(x){
	x.classList.toggle("change");
	console.log(x);
	var menuMain = document.getElementById("menuMain");
	menuMain.classList.toggle("show");
}