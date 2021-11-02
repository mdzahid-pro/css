function toggle(){
	let sec = document.getElementById("sec");
	let nav = document.getElementById("navigation");
	sec.classList.toggle("active");
	nav.classList.toggle("active");
}

function showinf(){
	let sec = document.getElementById("sec");
	let pop = document.getElementById("popup");
	sec.classList.toggle("popup");
	pop.classList.toggle("active");
}