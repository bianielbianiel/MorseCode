


//to retive message from textarea
function getMessage(){


	var msg = document.getElementById('message').value;


	if(msg===('')){
		alert('Please enter the message');
	}
	else {
		return msg;
		
	}
	
}//end getMessage()

function check(){

	var decode = document.getElementById('decode');
	var encode = document.getElementById('encode');

	if(encode.checked){
		console.log('encoding >>>'+getMessage()+'<<<');//print mesage
		console.log('Morse Code >>>'+getMorse(getMessage())+'<<<');//print result
		var msgReady = document.getElementById('res');//
		msgReady.innerHTML = getMorse(getMessage());
	}else if(decode.checked){
		console.log('decoding >>>'+getMessage()+'<<<');//print mesage
		console.log('Message >>>'+getText(getMessage())+'<<<');//print result
		var msgReady = document.getElementById('res');//
		msgReady.innerHTML = getText(getMessage());
	}
}


function getMorse(text) {
		var ms="";
		var msg = text.toUpperCase().trim().split("");
					
		for(var i=0; i<msg.length; i++){
			if(msg[i].length!=0){
											
				switch(msg[i]){
				case "0" :{ms+="-----";}break;
				case "1" :{ms+=".----";}break;
				case "2" :{ms+="..---";}break;
				case "3" :{ms+="...--";}break;
				case "4" :{ms+="....-";}break;
				case "5" :{ms+=".....";}break;
				case "6" :{ms+="-....";}break;
				case "7" :{ms+="--...";}break;
				case "8" :{ms+="---..";}break;
				case "9" :{ms+="----.";}break;
				case " " :{ms+="&#160;";}break;
				
				case "A" :{ms+=".-";}break;
				case "B" :{ms+="-...";}break;
				case "C" :{ms+="-.-.";}break;
				case "D" :{ms+="-..";}break;
				case "E" :{ms+=".";}break;
				case "F" :{ms+="..-.";}break;
				case "G" :{ms+="--.";}break;
				case "H" :{ms+="....";}break;
				case "I" :{ms+="..";}break;
				case "J" :{ms+=".---";}break;
				
				case "K" :{ms+="-.-";}break;
				case "L" :{ms+=".-..";}break;
				case "M" :{ms+="--";}break;
				case "N" :{ms+="-.";}break;
				case "O" :{ms+="---";}break;
				case "P" :{ms+=".--.";}break;
				case "Q" :{ms+="--.-";}break;
				case "R" :{ms+=".-.";}break;
				case "S" :{ms+="...";}break;
				case "T" :{ms+="-";}break;
				
				case "U" :{ms+="..-";}break;
				case "V" :{ms+="...-";}break;
				case "W" :{ms+=".--";}break;
				case "X" :{ms+="-..-";}break;
				case "Y" :{ms+="-.--";}break;
				case "Z" :{ms+="--..";}break;
				
				case "," :{ms+="--..--";}break;
				case "." :{ms+=".-.-.-";}break;
				case "!" :{ms+="..--.";}break;
				case "?" :{ms+="..--..";}break;
				case ":" :{ms+="---...";}break;
				case "=" :{ms+="-...-";}break;
					
				case "...---..." :{ms+="SOS";}break;
								
				}
				
				if(i!=msg.length){
					ms+="&#160;";
				}
			}
		}
		return ms.trim();
}
	

function getText(text) {
		var ms="";
		var msg = text.toUpperCase().trim().split("   ");
					console.log(msg);
		for(var i=0; i<msg.length; i++){//add one more loop
			
				if(i>0){
					ms+=" ";
				}

			var letters = msg[i].trim().split(" ");
			console.log(letters);

			for(var ii=0; ii<=letters.length-1; ii++){

											
				switch(letters[ii]){
					case "-----" 	:{ms+="0";}break;
					case ".----" 	:{ms+="1";}break;
					case "..---" 	:{ms+="2";}break;
					case "...--" 	:{ms+="3";}break;
					case "....-" 	:{ms+="4";}break;
					case "....." 	:{ms+="5";}break;
					case "-...."	:{ms+="6";}break;
					case "--..."	:{ms+="7";}break;
					case "---.." 	:{ms+="8";}break;
					case "----." 	:{ms+="9";}break;
					
					
					case ".-" 		:{ms+="A";}break;
					case "-..." 	:{ms+="B";}break;
					case "-.-." 	:{ms+="C";}break;
					case "-.." 		:{ms+="D";}break;
					case "." 		:{ms+="E";}break;
					case "..-." 	:{ms+="F";}break;
					case "--." 		:{ms+="G";}break;
					case "...." 	:{ms+="H";}break;
					case ".." 		:{ms+="I";}break;
					case ".---" 	:{ms+="J";}break;
					
					case "-.-" 		:{ms+="K";}break;
					case ".-.." 	:{ms+="L";}break;
					case "--" 		:{ms+="M";}break;
					case "-." 		:{ms+="N";}break;
					case "---" 		:{ms+="O";}break;
					case ".--." 	:{ms+="P";}break;
					case "--.-" 	:{ms+="Q";}break;
					case ".-." 		:{ms+="R";}break;
					case "..."		:{ms+="S";}break;
					case "-" 		:{ms+="T";}break;
					
					case "..-" 		:{ms+="U";}break;
					case "...-" 	:{ms+="V";}break;
					case ".--" 		:{ms+="W";}break;
					case "-..-" 	:{ms+="X";}break;
					case "-.--" 	:{ms+="Y";}break;
					case "--.." 	:{ms+="Z";}break;
					
					case "--..--" 	:{ms+=",";}break;
					case ".-.-.-" 	:{ms+=".";}break;
					case "..--." 	:{ms+="!";}break;
					case "..--.." 	:{ms+="?";}break;
					case "---..." 	:{ms+=":";}break;
					case "-...-" 	:{ms+="=";}break;
									
					case "...---..." :{ms+="SOS";}break;
					case "   " :{ms+=" ";}break;
					
				}
				}
					if(i!=msg.length){
					ms+="";
				}
			
		}
		console.log('result '+ms);
		return ms.trim();
}
	
	
	