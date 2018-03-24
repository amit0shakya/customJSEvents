function objc(_e,listener){
	this.who="objC";
	this.val=100;
	this.customevent=_e;
	this.el=listener;
}

objc.prototype.says=function(){
	this.customevent.tick(
		'hey',{ data:'objC sending data', val:this.val, who:this.who})
}

objc.prototype.export=function(){
	console.log("Obj C sending it's value")
}