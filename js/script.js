
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}


//----------------------------------------
var close = document.getElementsByClassName("remove");
var edit = document.getElementsByClassName("Edit");
var save = document.getElementsByClassName("Save");

//----------------------------------------
 var k =0;

function createListElement() {
	
	var li = document.createElement("li");
	li.className = "li_1";
	//-----------------------------------

	var button_1 = document.createElement("button");
	var txt_1 = document.createTextNode("\u00D7");
	button_1.className = "remove";
	//-----------------------------------

	var button_2 = document.createElement("button");
	var txt_2 = document.createTextNode("Edit");
	button_2.className = "Edit";
	//-----------------------------------

	var button_3 = document.createElement("button");
	var txt_3 = document.createTextNode("Save");
	button_3.className = "Save";
	//-----------------------------------

	var input_1 = document.createElement("p");
	input_1.setAttribute("id",`key_${k}`);
	k++;
	input_1.setAttribute("contenteditable","false");
	

	//-----------------------------------

	input_1.appendChild(document.createTextNode(input.value));
	li.appendChild(input_1);

	//------------------------
	ul.appendChild(li);
	button_1.appendChild(txt_1);
	li.appendChild(button_1);
	button_2.appendChild(txt_2);
	li.appendChild(button_2);
	button_3.appendChild(txt_3);
	li.appendChild(button_3);
	//------------------------------

	input.value = "";
	
	
	//-----------------------------------
  	for (i = 0; i < close.length; i++) {
	    close[i].onclick = function() {
	        this.parentElement.remove();
	          
	    }
  	}

  	
  	//-----------------------------------
  	for (i = 0; i < edit.length; i++) {
	    edit[i].onclick = function()  {
	       this.parentNode.childNodes[0].setAttribute("contenteditable","true");
	       this.parentNode.childNodes[0].style.border = "inset";
	    }
  	}
  	

  	//-----------------------------------
  	for (i = 0; i < save.length; i++) {
	    save[i].onclick = function()  {
	       this.parentNode.childNodes[0].setAttribute("contenteditable","false");
	       this.parentNode.childNodes[0].style.border = "none";
	    }
  	}
}

var lst = document.getElementsByClassName("li_1"); 
function submitAll(){
	
	for(var i=0;i<lst.length;i++){
		console.log(lst[i].childNodes[0].textContent);
	
	}
}




