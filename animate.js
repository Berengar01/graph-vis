var tID; 
function animateScript() {
	var    count = 1;
	const  interval = 60;
	tID = setInterval ( () => {
		var imageObj = new Image();
	    imageObj.onload = function() {
	        var img = document.getElementById('x');
	        img.setAttribute('src', this.src);
	        if(count<12)count++;
	        else count = 1;
	    };
	    imageObj.src = "sprites/turn"+count+".jpg";
	}, interval ); // end of setInterval
	}
    
