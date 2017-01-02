window.onload = function() {
	hourToHex();
};

function hourToHex() {
	// gets current time form Date() and splitting the string
	var time = new Date().toString().split(' ')[4].split(':');
	var hexString = '#';

	for(var index in time) {
		var hex = parseInt(time[index]).toString('16');
		if(hex.length == 1) {
			hex = '0' + hex;
		}
		hexString += hex;
	}
	
	var hourDiv = document.getElementsByClassName('time')[0];
	hourDiv.innerHTML = time.join(':');

	var hexDiv = document.getElementsByClassName('hex')[0];
	hexDiv.innerHTML = hexString;

	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = hexString;

	setTimeout(hourToHex, 1000);
}