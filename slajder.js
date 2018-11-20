
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function resetvrednost(){
	slider.value=40;
	output.innerHTML = 40;
	document.getElementById("donatedugme").style.backgroundColor="green";
	document.getElementById("donatedugme").innerHTML="Thanks For Donating!";
}

function TrajKec()
{
	var fullname = document.getElementById("imeK").value;
	var fullpassword = document.getElementById("passK").value;
	var fullporuka = document.getElementById("msgK").value;
	
	try{
		if(fullname == "")
		{
			throw "Molimo Vas unesite Vase ime";
		}
		
		if(fullpassword == "1234") 
		{
			throw "Uspesno ste se ulogovali";
		}
		else 
			throw "Pogresan password";		
				
	}
	catch(err)
	{
		alert(err);
	}	
	
}
