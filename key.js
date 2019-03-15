var keys = {
	'a':65,
	'b':66,
	'c':67,
	'd':68,

	'e':69,
	'f':70,
	'g':71,
	'h':72,

	'i':73,
	'j':74,
	'k':75,
	'l':76,

	'm':77,
	'n':78,
	'o':79,
	'p':80,

	'q':81,
	'r':82,
	's':83,
	't':84,

	'u':85,
	'v':86,
	'w':87,
	'x':88,

	'y':89,
	'z':90,



	';':186,
	',':188,

	'.':190,
	'/':191,
	
	' ':32
};
// var keyDown = 0;
var keyDown = {};
var setKey = function (keyCode){

	// keyDown = keyCode;
	keyDown[keyCode] =  true;

};

var clearKey = function(keyCode){
	// keyDown[keyCode] =  false;
	keyDown =  {};
};

var isKeyDown = function(keyName){
	// return keyDown == keys[keyName]
	return keyDown[keys[keyName]] ==true;
};
window.onload = function (){


	window.onkeydown = function(e){
		setKey(e.keyCode);
		if(isKeyDown(game_str[0])){
					// document.getElementById('key').innerHTML = game_str[0]+' pressed. Wright!';
					game_str = game_str.substring(1);
					ch_char();
					game_str=game_str+current_char;
					Move();
					newLevel();
					document.getElementById('level').innerHTML = 'Level: '+level;
				}
				
		else{
			// document.getElementById('key').innerHTML = 'Wrong!';
			x+=error_speed;
		}
	};


	window.onkeyup = function(e){
		// document.getElementById('key').innerHTML = '';
		clearKey(e.keyCode);
	};

}


