function generate() {
	var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
	function populate(a) {
		for ( var i = 0; i < 6; i++ ) {
			var x = Math.round( Math.random() * 14 );
			var y = hexValues[x];
			a += y;
		}
	return a;
	}
  
	var newColor1 = populate('#');
	var newColor2 = populate('#');
	var newColor3 = populate('#');
	var angle = Math.round( Math.random() * 360 );
	var blend = "to right";

	var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ", " + newColor3 + ")";
	var hrGradient = "linear-gradient(" + blend + ", " + newColor1 + ", " + newColor2 + ", " + newColor3 + ")";
  
	document.body.style.background = gradient + "fixed";

	var y = document.getElementsByClassName('linehr');
	for (var z = 0; z < y.length; z++) {
		y[z].style.background = hrGradient;
	}
}