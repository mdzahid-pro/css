let countDate = new Date('sep 26 ,2020,00:00:00').getTime();

function newYear(){
	let now = new Date().getTime();
	gap = countDate - now;
	
	var second = 1000;
	var minite = second * 60;
	var hour = minite * 60;
	var day = hour * 24;
	
	var d = Math.floor(gap / (day));
	var h = Math.floor((gap % (day)) / (hour));
	var m = Math.floor((gap % (hour)) / (minite));
	var s = Math.floor((gap % (minite)) / (second));
	
	document.getElementById("day").innerText=d;
	document.getElementById("hour").innerText=h;
	document.getElementById("minite").innerText=m;
	document.getElementById("second").innerText=s;
	
}
setInterval(function(){
	newYear();
},1000);

