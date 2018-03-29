;(function(){
	
	require("./webpack_ie.js");
	
	//开始使用
	let install = require("./install.art");
	let intro = require("./intro.art");
	
	//基础组件
	let button = require("./button.art");
	let input = require("./input.art");
	let list = require("./list.art");
	let slider = require("./slider.art");
	let uploader = require("./uploader.art");
	let badge = require("./badge.art");
	let flex = require("./flex.art");
	let gallery = require("./gallery.art");
	let grid = require("./grid.art");
	let icon = require("./icon.art");
	let loadmore = require("./loadmore.art");
	let progress = require("./progress.art");
	
	
	let actionsheet = require("./actionsheet.art");
	let dialog = require("./dialog.art");
	let msg = require("./msg.art");
	let picker = require("./picker.art");
	let toast = require("./toast.art");
	let navbar = require("./navbar.art");
	let tabbar = require("./tabbar.art");
	let searchbar = require("./searchbar.art");
	
	let template = {
		"install": install({})	
		,"intro": intro({})	
		,"button": button({})
		,"input": input({})
		,"list": list({})
		,"slider": slider({})
		,"uploader": uploader({})
		,"badge": badge({})
		,"flex": flex({})
		,"gallery": gallery({})
		,"grid": grid({})
		,"icon": icon({})
		,"loadmore": loadmore({})
		,"progress": progress({})
		
		,"actionsheet": actionsheet({})
		,"dialog": dialog({})
		,"msg": msg({})
		,"picker": picker({})
		,"toast": toast({})
		,"navbar": navbar({})
		,"tabbar": tabbar({})
		,"searchbar": searchbar({})
	};
	
	window.template = template;

}());