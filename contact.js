

var x = document.getElementById("form");

var createform = document.createElement('form'); 
	createform.setAttribute("action", "");        
	createform.setAttribute("method", "post");  
	x.appendChild(createform);
	
var heading = document.createElement('h2'); 
	heading.innerHTML = "Contact Form ";  
	createform.appendChild(heading);

var line = document.createElement('hr');  
	createform.appendChild(line);

var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Your Name : ";            
	createform.appendChild(namelabel);

var inputelement = document.createElement('input'); 
	inputelement.setAttribute("type", "text");  
	inputelement.setAttribute("name", "dname");
	createform.appendChild(inputelement);

var emaillabel = document.createElement('label'); 
	emaillabel.innerHTML = "Your Email : ";
	createform.appendChild(emaillabel);

var emailelement = document.createElement('input');
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
	createform.appendChild(emailelement);

var messagelabel = document.createElement('label'); 
	messagelabel.innerHTML = "Your Message : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea'); 
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

var checkboxlabel = document.createElement('label');
	checkboxlabel.innerHTML = "Check the box if you had fun!";
	createform.appendChild(checkboxlabel);

var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    createform.appendChild(checkbox);

var submitelement = document.createElement('input'); 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
	createform.appendChild(submitelement);
