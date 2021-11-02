function clock(){
	let hour = document.getElementById("hour");
	let menute = document.getElementById("menute");
	let second = document.getElementById("second");
	
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	
	hour.innerHTML = h;
	menute.innerHTML = m;
	second.innerHTML = s;
}

setInterval(clock,1000);