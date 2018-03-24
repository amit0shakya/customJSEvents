function objb(_e,listener){
	this.who="objB";
	this.val=10;
	this.customevent=_e;
	this.el=listener;

	this.addEvents()
}

objb.prototype.addEvents=function(){
	this.el.dispatchEvent(this.customevent.get('hey'));
	this.el.addEventListener('hey',this.heyEve);
	this.customevent.setupEvents(this.el,'hey')
}

objb.prototype.heyEve=function(e){
	console.log(e.detail.val,"<<objB got value in heyEve");
}

objb.prototype.says=function(){
	this.customevent.tick('hello','data from B');
}

objb.prototype.export=function(){
	
}