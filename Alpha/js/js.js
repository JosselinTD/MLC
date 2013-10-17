document.addEventListener('DOMComponentsLoaded', function(){
	var settingsButton = document.getElementById("button12");
	var slideBox = document.getElementById("slidebox");
	var retourButton = document.getElementById("button21");
	var retourButtonCredits = document.getElementById("button31");
	var creditsButton = document.getElementById("credits");
	var joueur1 = document.getElementById("joueur1");
	var joueur2 = document.getElementById("joueur2");
	var wn1 = document.getElementsByClassName("wn1");
	var toMove;

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
	joueur1.addEventListener("touchstart", start, false);
	joueur1.addEventListener("touchmove", move, false);
	
	
	joueur1.style.height = (window.innerHeight-50)/2 + "px";
	joueur2.style.height = (window.innerHeight-50)/2 + "px";
	
	for(var i = 1; i<3; i++){
		for(var j = 0; j<7; j++){
			document.getElementById("j"+i+"nb"+j).style.left = (20*j)-20+"%";
		}
		document.getElementById("j"+i+"nb0").style.display = "none";
		document.getElementById("j"+i+"nb6").style.display = "none";
	}
	
	function start(evt){
		evt.preventDefault();
		toMove = this;
		for(var i = 0;i<toMove.length;i++){
			toMove[i].style.display = "block";
		}
	}
	
	function move(evt){
		evt.preventDefault();
		posX = evt.touches[0].pageX;
		
		for(var i = 0;i<toMove.length;i++){
			alert(toMove[i].style.left);
			toMove[i].style.left = toMove[i].style.left + 1 + "px";
		}
	}
});