

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
	var tekst = data[1];
    var her = document.getElementById("fam");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    tekst = data[3];
    her = document.getElementById("baev");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

	tekst = data[5];
    her = document.getElementById("ulv");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

	tekst = data[7];
    her = document.getElementById("spe");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

    tekst = data[9];
    her = document.getElementById("rov");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);
}
