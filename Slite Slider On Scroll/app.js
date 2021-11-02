var side = document.getElementById("side1");
window.addEventListener("scroll",function(){
	side1.style.left = -window.pageYOffset + 'px';
});

var side2 = document.getElementById("side2");
window.addEventListener("scroll",function(){
	side2.style.left = window.pageYOffset + 'px';
});