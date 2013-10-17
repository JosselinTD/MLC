touch1.style.height = (window.innerHeight-(window.innerHeight/10))/2+"px";
touch2.style.height = (window.innerHeight-(window.innerHeight/10))/2+"px";

menu.style.height = window.innerHeight+"px";
index.style.height = window.innerHeight+"px";
credits.style.height = window.innerHeight+"px";

barreCentrale.style.height = (window.innerHeight/10)+"px";

btnMenuRetour.style.top = (window.innerHeight-45)/2+"px";
btnCreditsRetour.style.top = (window.innerHeight-45)/2+"px";

loadFond();



function loadFond(){
	var random1 = Math.floor(Math.random()*5);
	var random2 = Math.floor(Math.random()*5);
	while(random2 == random1){
		random2 = Math.floor(Math.random()*5);
	}

	document.getElementById("img1").src = "img/"+fonds[random1]+".jpg";
	document.getElementById("img2").src = "img/"+fonds[random2]+".jpg";
}