;(function(){
	
	require("./webpack_ie.js");
	
	//开始使用
	let install = require("./install.art");
	let intro = require("./intro.art");
	let standard = require("./standard.art");
	
	//基础组件
	let button = require("./button.art");

	let template = {
		"install": install({})	
		,"intro": intro({})	
		,"standard": standard({})	
		,"button": button({})
			
	};
	
	window.template = template;

}());