//工具类-公共方法类
;(function(){
	
    var Utils = function(){
    	
    };
    
    //iframe下载文件
    Utils.prototype.download = function(filepath){
		let iframe = document.getElementById("downloadframe");
		if (iframe) {
			iframe.src = filepath;
		} else {
			iframe = document.createElement("iframe");
			iframe.src = filepath;
			iframe.style.display = "none";
			iframe.id = "downloadframe";
			document.body.appendChild(iframe);
		}
	}
    
    //获取IE版本
    Utils.prototype.getIEVersion = function(){
		let ua = navigator.userAgent, matches, tridentMap = {'4': 8, '5': 9, '6': 10, '7': 11};
		matches = ua.match(/MSIE (\d+)/i);
		if (matches && matches[1]) {
			return +matches[1];
		}
		matches = ua.match(/Trident\/(\d+)/i);
		if (matches && matches[1]) {
			return tridentMap[matches[1]] || null;
		}
		return null;
	}
    
    //是否是PC端
    Utils.prototype.isPc = function(){  
        var userAgentInfo = navigator.userAgent;  
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
        }  
        return flag;  
    }
    
    //是否是微信客户端
    Utils.prototype.isWx = function(){
    	var ua = navigator.userAgent.toLowerCase(); 
        if(ua.match(/MicroMessenger/i) == "micromessenger") { 
            return true; 
         } else { 
            return false; 
        }
    }
    
    //去掉2边空格
    Utils.prototype.trim = function(str){
		str = typeof str === 'string' ? str : '';
		return str.trim
			? str.trim()
			: str.replace(/^\s|\s$/g, '');
	}
    
    //原生js仿jquery的一些方法
    //hide(dom); 
    Utils.prototype.hide = function(el){
    	el.style.display = "none";
    }
    //show(dom) 
    Utils.prototype.show = function(el){
    	el.style.display = "block"; 
    }
    //attr()
    Utils.prototype.attr = function(el){
    	if(arguments.length == 2){ 
			return el.getAttribute(arguments[1]); 
		}else if(arguments.length == 3){ 
			el.setAttribute(arguments[1], arguments[2]);
		}
    }
    //val() 
    Utils.prototype.val = function(el){ 
    	if(arguments.length == 1){ 
    		return el.value; 
    	}else if(arguments.length == 2){ 
    		el.value = arguments[1]; 
    	} 
    } 
    //html() 
    Utils.prototype.html = function(el){ 
    	if(arguments.length == 1){ 
    		return el.innerHTML; 
    	}else if(arguments.length == 2){ 
    		el.innerHTML = arguments[1]; 
    	} 
    }
    //append() 
    Utils.prototype.append = function(el, newEl){ 
    	el.innerHTML += newEl; 
    } 
    //prepend() 
    Utils.prototype.prepend = function(el, newEl){ 
    	el.innerHTML = newEl + el.innerHTML; 
    } 
    //after() 
    Utils.prototype.after = function(el, newEl){ 
    	el.outerHTML += newEl; 
    } 
    //before() 
    Utils.prototype.before = function(el, newEl){ 
    	el.outerHTML = newEl + el.outerHTML; 
    }
    //replaceWith() 
    Utils.prototype.replaceWith = function(el, newEl){ 
    	el.outerHTML = newEl; 
    }
    //hasClass() 
    Utils.prototype.hasClass = function(el, cName){ 
    	return !!el.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
    } 
    //addClass() 
    Utils.prototype.addClass = function(el, cName){ 
    	if( !this.hasClass(el, cName) ){ 
    		el.className += " " + cName; 
    	} 
    } 
    //removeClass() 
    Utils.prototype.removeClass = function(el, cName){ 
    	if( this.hasClass(el, cName) ){ 
    		el.className = el.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); 
    	} 
    }
    /*
      	id或class选择器$("elem") 
     	返回的结果或结果集包含的是htmlDOM，并非jquery的对象
     	for(var i = 0; i < utils.$(".cls").length; i++){
     		var el = utils.$(".cls")[i];
     	}
    */
    
    Utils.prototype.$ = function(strExpr){ 
		var idExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; 
		var classExpr = /^(?:\s*(<[\w\W]+>)[^>]*|.([\w-]*))$/; 
		if(idExpr.test(strExpr)){ 
			var idMatch = idExpr.exec(strExpr); 
			return document.getElementById(idMatch[2]); 
		}else if(classExpr.test(strExpr)){ 
			var classMatch = classExpr.exec(strExpr); 
			var allElement = document.getElementsByTagName("*"); 
			var ClassMatch = []; 
			for(var i=0,l=allElement.length; i<l; i++){ 
				if(allElement[i].className.match( new RegExp( "(\\s|^)" + classMatch[2] + "(\\s|$)") )){ 
					ClassMatch.push(allElement[i]); 
				} 
			} 
			return ClassMatch; 
		} 
	}
    
    //原生绑定事件
    Utils.prototype.bind = function(el, eventName, fn){
    	if(window.attachEvent){ 
    		el.attachEvent("on" + eventName, fn); 
    	}else{  
    		el.addEventListener(eventName, fn, false); 
    	}
    }
    
    //对象OBJECT操作
    Utils.prototype.extend = function(obj){
    	var length = arguments.length;
    	if (length < 2 || obj == null) return obj;
    	for (var index = 1; index < length; index++) {
    		var source = arguments[index],
    		keys = this.allKeys(source),
    		l = keys.length;
    		for (var i = 0; i < l; i++) {
    			var key = keys[i];
    			//if (!1 || obj[key] === void 0) obj[key] = source[key];
    			if (!0 || obj[key] === void 0) obj[key] = source[key];
    		}
    	}
  	    return obj;
    }
    
    Utils.prototype.isObject = function(obj){
    	var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    
    Utils.prototype.allKeys = function(obj){
    	if (!this.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        // Ahem, IE < 9.
        //if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    }
    
    
	module.exports = new Utils();
	
	
}());