/***
getById(id) : returns the element.
***/
var getById = function(id){
	return document.getElementById(id);
}

/***
hideById(id) : hides the element.
***/
var hideById = function(id){
	let node = getById(id);
	if(node){
		node.style.display='none';
	}
}

/***
showById(id,[optional]displayValue) : shows the element.
***/
var showById = function(id,displayValue){
	let node = getById(id);
	if(node){
		node.style.display=displayValue?displayValue:'';
	}
}

/***
textBoxValById(id,[optional]val) : gets the input text box value. Sets the value if given.
***/
var textBoxValById = function(id,val){
	let node = getById(id);
	if(node){
		if(val){
			node.value=val;
		}
		else{
			return node.value;
		}
	}
}