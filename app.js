var hero = document.getElementById("hero");
var block = document.getElementById("block");
document.body.addEventListener("keydown",jump)
function jump(){
    if(hero.classList != "animate"){
        hero.classList.add("animate");
        }
    setTimeout(function(){
        hero.classList.remove("animate");
        },500);
}

var dead = setInterval(function(){
	var heroTop =
	parseInt(window.getComputedStyle(hero).
	getPropertyValue("top"));
	var blockLeft =
	parseInt(window.getComputedStyle(block).
	getPropertyValue("left"));
	if(blockLeft<35 && blockLeft>5 &&
	heroTop>=0){
	    block.style.animation = "none";
		block.style.display = "none";
		alert ("Amanyż mientka faja");
}
},10);
	
	
	