let alle_data;

function hent_html(callback) {
	var posting = $.post("assets/upload/scripts/hent.php", {
    bannere: "alle"
  }).done(function (data) {
    alle_data = JSON.parse(data);
    callback(alle_data);
  });
}

hent_html(udfyld_html);

function udfyld_html(data) {
	var tekst = data[2];
    if (data[6] != "") {
        document.getElementById('tekstfeldt').innerHTML = alle_data[6];
        $("#tekstfeldt").toggleClass("skjul",false);  
    } 
    

    var her = document.getElementById("banner");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    if (data[3] != null) {
    	var tekst = data[3];
	    var her = document.getElementById("banner");
	    her.insertAdjacentHTML('beforeend', tekst);
    }

    // gør billederne unikke
    var tal = Math.floor(Math.random()* 9999 + 11111);
    var x = document.getElementsByTagName("img");
    for (var i = 1; i < x.length; i++) {
        x[i].src = x[i].src+"?"+tal;
    }

        
}
