document.addEventListener('DOMComponentsLoaded', function(){
	var settingsButton = document.getElementById("button12");
	var slideBox = document.getElementById("slidebox");
	var retourButton = document.getElementById("button21");
	var retourButtonCredits = document.getElementById("button31");
	var creditsButton = document.getElementById("credits");
	var joueur1 = document.getElementById("joueur1");
	var joueur2 = document.getElementById("joueur2");
	var wn1 = document.getElementsByClassName("wn1");
	var wn2 = document.getElementsByClassName("wn2");
	var toMove;
	var fonds = ["ajani", "liliana", "jace", "garruk", "chandra"];
	var fondsButton = document.getElementById("fonds");
	var basePV = 20;
	var pvsButton = document.getElementById("pvs");
	var resetButton = document.getElementById("button11");
	
	var j1c1 = document.getElementById("j1nb0"),
		j1e1 = document.getElementById("j1nb0"), 
		j1c2 = document.getElementById("j1nb6"),
		j1e2 = document.getElementById("j1nb6"), 
		j2c1 = document.getElementById("j2nb0"),
		j2e1 = document.getElementById("j2nb0"), 
		j2c2 = document.getElementById("j2nb6"),
		j2e2 = document.getElementById("j2nb6");

		console.log("Truc : "+j1c2.id);
		
	settingsButton.addEventListener("click", function(){
		slidebox.slideNext();
	});
	retourButton.addEventListener("click", function(){
		slidebox.slidePrevious();
	});
	retourButtonCredits.addEventListener("click", function(){
		slidebox.slidePrevious();
	});
	creditsButton.addEventListener("click", function(){
		slidebox.slideNext();
	});
	pvsButton.addEventListener("click", function(){
		if(basePV == 20){
			basePV = 30;
			document.getElementById("changePv").innerHTML = 20;
		} else {
			basePV = 20;
			document.getElementById("changePv").innerHTML = 30;
		}
		
		reset();
	});
	
	lockedAllowed = window.screen.mozLockOrientation("portrait-primary");
	
	resetButton.addEventListener("click", reset);
	fondsButton.addEventListener("click", loadFond);
	
	joueur1.addEventListener("touchstart", startJ1, false);
	joueur1.addEventListener("touchmove", moveJ1, false);
	joueur1.addEventListener("touchend", endJ1, false);
	
	joueur2.addEventListener("touchstart", startJ2, false);
	joueur2.addEventListener("touchmove", moveJ2, false);
	joueur2.addEventListener("touchend", endJ2, false);
	
	joueur1.style.height = (window.innerHeight-50)/2 + "px";
	joueur2.style.height = (window.innerHeight-50)/2 + "px";
	
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
	
	reset();
	
	var pos;
	function startJ1(evt){
		evt.preventDefault();
		toMove = wn1;
		for(var i = 0;i<toMove.length;i++){
			toMove[i].style.display = "block";
		}
		pos = evt.touches[0].pageX;
	}
	
	function moveJ1(evt){
		evt.preventDefault();
		posX = evt.touches[0].pageX;
		
		for(var i = 0;i<toMove.length;i++){
			toMove[i].style.left = parseFloat(toMove[i].style.left) + (-1*(pos-posX)/4) + "%";
		}
		pos = posX;
		if(parseFloat(j1c1.style.left) < -30){
			var oldJ1c2;
			if(j1c1 != j1e2){
				var id = parseInt(j1c1.dataset.id) + 1;
				oldJ1c2 = j1c2;
				j1c2 = document.getElementById(j1c1.id);
				j1c1 = document.getElementById("j1nb"+id);
			} else {
				oldJ1c2 = document.getElementById("j1nb5");
				j1c1 = j1e1;
				j1c2 = j1e2;
			}
			j1c2.style.left = parseFloat(oldJ1c2.style.left)+20+"%";
			j1c2.innerHTML = parseInt(j1c2.innerHTML) + 7;
		} else if(parseFloat(j1c2.style.left) > 110){
			var oldJ1c1;
			if(j1c2 != j1e1){
				var id = parseInt(j1c2.dataset.id) - 1;
				oldJ1c1 = j1c1;
				j1c1 = document.getElementById(j1c2.id);
				j1c2 = document.getElementById("j1nb"+id);
			} else {
				oldJ1c1 = document.getElementById("j1nb1");
				j1c1 = j1e1;
				j1c2 = j1e2;
			}
			j1c1.style.left = parseFloat(oldJ1c1.style.left)-20+"%";
			j1c1.innerHTML = parseInt(j1c1.innerHTML) - 7;
		}
	}
	
	function startJ2(evt){
		evt.preventDefault();
		toMove = wn2;
		for(var i = 0;i<toMove.length;i++){
			toMove[i].style.display = "block";
		}
		pos = evt.touches[0].pageX;
	}
	
	function moveJ2(evt){
		evt.preventDefault();
		posX = evt.touches[0].pageX;
		
		for(var i = 0;i<toMove.length;i++){
			toMove[i].style.left = parseFloat(toMove[i].style.left) + ((pos-posX)/4) + "%";
		}
		pos = posX;
		console.log("C1 : "+j2c1.style.left+" - "+j2c1.innerHTML+", C2 : "+j2c2.style.left+" - "+j2c2.innerHTML);
		if(parseFloat(j2c1.style.left) < -30){
			var oldJ2c2;
			if(j2c1 != j2e2){
				var id = parseInt(j2c1.dataset.id) + 1;
				oldJ2c2 = j2c2;
				j2c2 = document.getElementById(j2c1.id);
				j2c1 = document.getElementById("j2nb"+id);
			} else {
				oldJ2c2 = document.getElementById("j2nb5");
				j2c1 = j2e1;
				j2c2 = j2e2;
			}
			j2c2.style.left = parseFloat(oldJ2c2.style.left)+20+"%";
			j2c2.innerHTML = parseInt(j2c2.innerHTML) + 7;
		} else if(parseFloat(j2c2.style.left) > 110){
			var oldJ2c1;
			if(j2c2 != j2e1){
				var id = parseInt(j2c2.dataset.id) - 1;
				oldJ2c1 = j2c1;
				j2c1 = document.getElementById(j2c2.id);
				j2c2 = document.getElementById("j2nb"+id);
			} else {
				oldJ2c1 = document.getElementById("j2nb1");
				j2c1 = j2e1;
				j2c2 = j2e2;
			}
			j2c1.style.left = parseFloat(oldJ2c1.style.left)-20+"%";
			j2c1.innerHTML = parseInt(j2c1.innerHTML) - 7;
		}
	}
	
	function endJ1(evt){
		evt.preventDefault();
		j1c1.style.display = "none";
		j1c2.style.display = "none";
	}
	
	function endJ2(evt){
		evt.preventDefault();
		j2c1.style.display = "none";
		j2c2.style.display = "none";
	}
	
	function reset(){
		for(var i = 1; i<3; i++){
			for(var j = 0; j<7; j++){
				document.getElementById("j"+i+"nb"+j).style.left = (20*j)-20+"%";
				document.getElementById("j"+i+"nb"+j).innerHTML = basePV - 3 + j;
			}
			document.getElementById("j"+i+"nb0").style.display = "none";
			document.getElementById("j"+i+"nb6").style.display = "none";
		}
		j1c1 = document.getElementById("j1nb0");
		j1e1 = document.getElementById("j1nb0"); 
		j1c2 = document.getElementById("j1nb6");
		j1e2 = document.getElementById("j1nb6"); 
		j2c1 = document.getElementById("j2nb0");
		j2e1 = document.getElementById("j2nb0"); 
		j2c2 = document.getElementById("j2nb6");
		j2e2 = document.getElementById("j2nb6");
	}
});