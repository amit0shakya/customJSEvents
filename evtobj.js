function customeve(){
	this.hello;
	this.hey;

	this.setup('');
}

customeve.prototype.setup=function(val){
	
	this.hello = new CustomEvent('hello',{
		detail:{val:val,element:null}
	})	

	this.hey = new CustomEvent('hey',{
		detail:{val:val,element:null}
	})

}

customeve.prototype.get=function(eve){
	return this[eve];
}

customeve.prototype.setupEvents=function(ele,evt){
	this[evt].detail.element=ele;
}

customeve.prototype.tick=function(evt,data){
	var element = this[evt].detail.element;
	this[evt].detail.val=data;
	element.dispatchEvent(this[evt]);
}