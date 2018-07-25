window.setTimeout(shake(),1500)


function shake() {
	var l1 = document.getElementById('l1');
	console.log(l1.classList);
	l1.classList.add("shake");
}