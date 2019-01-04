

function hent_html(callback) {
	var posting = $.post("assets/upload/hent.php", {
    alle: "alle"
  }).done(function (data) {
    var alle_data = JSON.parse(data);
    callback(alle_data);
  });
}

hent_html(udfyld_html);

function udfyld_html(data) {
	var tekst = data[1*6-1];
    var her = document.getElementById("fam");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    tekst = data[2*6-1];
    her = document.getElementById("baev");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

	tekst = data[3*6-1];
    her = document.getElementById("ulv");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

	tekst = data[4*6-1];
    her = document.getElementById("spe");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    tekst = data[5*6-1];
    her = document.getElementById("rov");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    // gør billederne unikke
    var tal = Math.floor(Math.random()* 9999 + 11111);
    var x = document.getElementsByTagName("img");
    for (var i = 1; i < x.length; i++) {
        x[i].src = x[i].src+"?"+tal;
    }
}
