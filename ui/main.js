var timer = null;
var countdownNumber = 10
var changeState = function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;

	if (state == 2) {
		timer = setInterval(function (){
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber <= 0) {
				clearInterval(timer);
				changeState(3);
			};
		}, 100);
		
	} else if (state == 3) {
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber:',randomNumber)

			if (randomNumber >= 3){
				changeState(4);
			} else {
				changeState(5);
			}
	}, 2000);
};
}