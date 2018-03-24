function obja(_e,listener){
	this.who="objA";
	this.val=1;
	this.customevent=_e;
	this.el=listener;

	this.addEvents();
}

obja.prototype.addEvents=function(){
	this.el.dispatchEvent(this.customevent.get('hello'));
	this.el.addEventListener('hello',this.helloEve)
	this.customevent.setupEvents(this.el,"hello");
}

obja.prototype.helloEve=function(e){
	console.log(e.detail.val,"<<objA got value in helloEve");
}

obja.prototype.says=function(){
	console.log("obj A says hello")
}

obja.prototype.export=function(){
	console.log("Obj A sending it's value")
}