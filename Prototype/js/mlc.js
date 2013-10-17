touch1.addEventListener("touchstart", handleStart, false);
touch1.addEventListener("touchmove", handleMove, false);

touch2.addEventListener("touchstart", handleStart, false);
touch2.addEventListener("touchmove", handleMove, false);

btnMenu.addEventListener("click", handleMenu, false);
btnReset.addEventListener("click", handleReset, false);
btnQuit.addEventListener("click", handleQuit, false);

btnMenuRetour.addEventListener("click", handleMenuRetour, false);
btnCreditsRetour.addEventListener("click", handleMenu, false);

btnChangeFond.addEventListener("click", handleChangeFond, false);
btnEdh.addEventListener("click", handleEdh, false);
btnCredits.addEventListener("click", handleBtnCredits, false);

touch1.pv = 20;
touch2.pv = 20;

function handleStart(evt){
	evt.preventDefault();
	console.log(evt.touches[0].pageX+" : "+evt.touches[0].pageY);
	pos = evt.touches[0].pageX;
	touchEnCours = this;
	if(touchEnCours.id == "touch1") multiplier = -1;
	else multiplier = 1;
}

function handleMove(evt){
	evt.preventDefault();
	if(evt.touches[0].pageX > pos+decal){
		touchEnCours.getElementsByClassName("joueur")[0].innerHTML = this.pv + 1*multiplier;
		this.pv = this.pv+1*multiplier;
		pos = evt.touches[0].pageX;
	} else if(evt.touches[0].pageX < pos-decal){
		touchEnCours.getElementsByClassName("joueur")[0].innerHTML = this.pv - 1*multiplier;
		this.pv = this.pv-1*multiplier;
		pos = evt.touches[0].pageX;
	}
}

function handleReset(evt){
	evt.preventDefault();
	touch1.pv = pvBase;
	touch2.pv = pvBase;
	
	document.getElementsByClassName("joueur")[0].innerHTML = pvBase+"";
	document.getElementsByClassName("joueur")[1].innerHTML = pvBase+"";
}

function handleQuit(evt){
	evt.preventDefault();
	window.close();
}

function handleMenu(evt){
	evt.preventDefault();
	
	menu.style.left = "0%";
	index.style.left = "-100%";
	credits.style.left = "100%";
}

function handleMenuRetour(evt){
	evt.preventDefault();
	
	menu.style.left = "100%";
	index.style.left = "0%";
	credits.style.left = "200%";
}

function handleChangeFond(evt){
	evt.preventDefault();
	
	loadFond();
}

function handleEdh(evt){
	evt.preventDefault();
	
	if(pvBase == 20){
		pvBase = 30;
		this.innerHTML = "20 PVs";
	} else {
		pvBase = 20;
		this.innerHTML = "30 PVs";
	}
	handleReset(evt);
}

function handleBtnCredits(evt){
	evt.preventDefault();
	
	menu.style.left = "-100%";
	index.style.left = "-200%";
	credits.style.left = "0%";
}