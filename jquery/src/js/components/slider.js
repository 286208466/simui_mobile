
var utils = require("./utils.js");

var handler = document.querySelectorAll(".sim-slider_handler");

window.slider_startLeft = 0;
window.slider_startX = 0;
for(var i = 0; i < handler.length; i++){
	
	if(utils.isPc()){
		
		utils.bind(handler[i], "mousedown", function(e){
			var e = e || window.event;
			console.log(e)
			var totalLen = e.target.parentNode.clientWidth;
			slider_startLeft = parseInt(e.target.style.left) * totalLen / 100;
			slider_startX = e.clientX - e.parentNode.clientX;
		});
		
		utils.bind(handler[i], "mousemove", function(e){
			var e = e || window.event;
			console.log(e)
			var totalLen = e.target.parentNode.clientWidth;
			var dist = slider_startLeft + e.clientX - slider_startX;
			dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
			var percent =  parseInt(dist / totalLen * 100);
			var track = e.target.previousElementSibling;
			track.style.width = percent + '%';
	    	e.target.style.left = percent + '%';
	    	e.target.parentNode.parentNode.setAttribute("data-value", percent);
	    	
	    	var percentEl = e.target.parentNode.parentNode.nextElementSibling;
	    	if(utils.hasClass(percentEl, "sim-slider_value")){
	    		percentEl.innerText = percent;
	    	}
	    	
	    
		});
		
		utils.bind(handler[i], "mouseup", function(e){
			endCallback(e);
		});
		
	}else{
		
		utils.bind(handler[i], "touchstart", function(e){
			var e = e || window.event;
			
			var totalLen = e.target.parentNode.clientWidth;
			slider_startLeft = parseInt(e.target.style.left) * totalLen / 100;
			slider_startX = e.changedTouches[0].clientX;
		});
		
		utils.bind(handler[i], "touchmove", function(e){
			var e = e || window.event;
			
			var totalLen = e.target.parentNode.clientWidth;
			var dist = slider_startLeft + e.changedTouches[0].clientX - slider_startX;
			dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
			var percent =  parseInt(dist / totalLen * 100);
			var track = e.target.previousElementSibling;
			track.style.width = percent + '%';
	    	e.target.style.left = percent + '%';
	    	e.target.parentNode.parentNode.setAttribute("data-value", percent);
	    	
	    	var percentEl = e.target.parentNode.parentNode.nextElementSibling;
	    	if(utils.hasClass(percentEl, "sim-slider_value")){
	    		percentEl.innerText = percent;
	    	}
	    	
	    
		});
		
		utils.bind(handler[i], "touchend", function(e){
			endCallback(e);
		});
		
	}
	
	
}

var endCallback = function(e){
	slider_startLeft = 0;
	slider_startX = 0;
}