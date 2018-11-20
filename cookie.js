function NoviProzor()
{ var slika = document.getElementById("slika_coin").src;
	console.log(slika);
	
	
    if (slika != "") {
		var url_slike=window.location.href;
		
		url_slike = url_slike.substring(0, url_slike.length - 13);
		console.log(url_slike);
		var slika = getCookie("slika");
		url_slike = url_slike + "slike/" + slika;
		console.log(url_slike);
		var prozor = window.open(url_slike);
    } else {
		 console.log("nema odabrane slike");
    }
	
}
function PrikaziLogo()
{
	var IzabranCoin = document.forma.coin.value;
	
	switch(IzabranCoin)
	{
		case "bitcoin":
			slika = "bitcoin.jpg";
		break;
		case "litecoin":
			slika = "litecoin.png";
		break;
		case "bitconnect":
			slika = "bitconnect.jpg";
		break;
		case "tomocoin":
			slika = "tomocoin.png";
		break;
		case "mithril":
			slika = "mithril.png";
		break;
		case "ethereum":
			slika = "ethereum.jpg";
		break;
		case "wepower":
			slika = "wepower.png";
		break;
		case "cindicator":
			slika = "cindicator.jpg";
		break;
	}
	setCookie("slika", slika, 30);
	var elem =  document.getElementById("slika_coin");
	var source_slike = "slike/" + slika;
	console.log(source_slike);
	elem.src = source_slike;
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
	 console.log(document.cookie);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var slika = getCookie("slika");
    if (slika != "") {
		var elem =  document.getElementById("slika_coin");
		var source_slike = "slike/" + slika;
		console.log(source_slike);
		elem.src = source_slike;
    } else {
		 console.log("no cookie");
    }
}