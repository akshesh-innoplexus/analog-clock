
var size_second = 0.85,
	size_minute = 0.75,
	size_hour = 0.55;

function needles(hand, size, angle, cx, cy){
	x2 = cx + size*Math.cos((angle*Math.PI/180) - Math.PI/2);
	y2 = cy + size*Math.sin((angle*Math.PI/180) - Math.PI/2);

	hand.setAttribute('x2', x2);
	hand.setAttribute('y2', y2);
}

start_clock();
setInterval(start_clock, 1000);
function start_clock(){

	var cx=200, cy=200, r=150;
	var time = new Date();

	needles(document.getElementById("second"), size_second*r, 6*time.getSeconds(), cx, cy);
	needles(document.getElementById("minute"), size_minute*r, 6*time.getMinutes(), cx, cy);
	needles(document.getElementById("hour"), size_hour*r, 30*time.getHours(), cx, cy);
}
