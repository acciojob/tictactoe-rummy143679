//your JS code here. If required.
function onClickStart(e){
	alert("click")
	e.preventDefault();
	const ip1 = document.getElementById("player-1");
	const ip2 = document.getElementById("player-2");
	const player1 = "";
	const player2 = "";
	if(ip1.value != "" || ip2.value != ""){
		player1 = ip1.value;
		player2 = ip2.value;
		
	}else{
		alert("one player name is missing");
	}
	
	
}