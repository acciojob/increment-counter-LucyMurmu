//your JS code here. If required.
let count=0;
document.getElementById("increment-counter").addEventListener("click",function(){
	alert(count);
	count++;
	document.getElementById("counter").textContent="count";
});
