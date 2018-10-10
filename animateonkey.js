var pos = 0;
function animateRight(){
	
	document.getElementById("spr").style.backgroundPosition = (pos+= 97) +"px 0px";
}

function animateLeft(){
	document.getElementById("spr").style.backgroundPosition = (pos-= 97) +"px 0px";
}
	
window.onkeydown = function(evt) {
        console.log(evt);
        var key = evt.which ? evt.which : evt.keyCode;
        var c = String.fromCharCode(key);
        switch (c) {
        case ('I'):
            animateRight();
            break;
        case ('R'):
            animateLeft();
            break;
 
        }
    }; 
