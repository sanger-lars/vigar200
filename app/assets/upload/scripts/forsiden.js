let log = console.log;

const tekstFelt = 4;
const tekstFelt_link = 5;
const tekstFelt_html = 6;


function vis_tekstfelt() {
  alle_data[tekstFelt] = document.getElementById('tekst').value;
 	if (alle_data[tekstFelt] != "") {
	  // lav preview
	  document.getElementById('tekstfeldt').innerHTML = alle_data[tekstFelt];
	  $("#tekstfeldt").toggleClass("skjul",false);
	  //lav HTML felt
	  alle_data[tekstFelt_html] = alle_data[tekstFelt];

	  // vis gem knap
	  $("#send").toggleClass("skjul",false);
	  $("#send")[0].innerHTML = "Gem";
	  lav_html();
	}
}

function slet_tekst() {
	var slet = "nej";
	if (alle_data[tekstFelt_html].indexOf('</A>') > 0) {
		if (confirm('Vil du slette det, som teksten linker til, på serveren ?')) {
			console.log('ja slet det');
			slet = "ja";
		}		
	}
	alle_data[tekstFelt] = "";
	alle_data[tekstFelt_html] = "";
	var fil = alle_data[tekstFelt_link];
	alle_data[tekstFelt_link] = "";
	gem_data(alle_data, slet, fil);
}

function gem_data(data, sletBool, filnavn) {
	var posting = $.post("assets/upload/scripts/gem_banner.php", {
    data: JSON.stringify(data),
    slet: sletBool,
    filnavn: filnavn
  }).done(function (data) {
   	location.reload();
  });
}

function lav_html(slet) {
	event.preventDefault;
	var tekst = document.getElementById('tekst').value;
	var banner = document.getElementById('upload_ban').value
		.substr(12).toLowerCase();
	var dokument = document.getElementById('upload_link').value
		.substr(12).toLowerCase();
	var baeverstop = document.getElementById('baeverstop').value;

	if (slet) {
		alle_data[2] = "";
// TODO  spørg om du vil slette banner på serveren
	}

	debugger;
	
	if (dokument != "" && banner != "") { 
		var html_banner =  `<P align=center><A href='assets/dokumenter/${dokument}'><IMG style="width: 95%" src='assets/images/bannere/${banner}'></A></P>`;
	} else if (banner != "") {
		var html_banner =  `<P align=center><IMG style="width: 95%" src='assets/images/bannere/${banner}'></P>`;
	} else {
		html_banner = alle_data[2];
	}

	if (dokument != "" && tekst != "") {
		alle_data[tekstFelt_html] = '<A href="assets/dokumenter/' + dokument + '">' + alle_data[4] + '</A>';
		document.getElementById('jsondata-link').value = JSON.stringify(alle_data[tekstFelt_html]);
		alle_data[tekstFelt_link] = dokument;
		dokument = "";
	}


	if (baeverstop == "1") {
		 var html_stopbanner = `<P align=center><IMG style='width: 95%' src='assets/images/bannere/for_mange_baevere2.png'></A></P>`;
	} else if (baeverstop == "2") {
		var html_stopbanner = "";
	} else var html_stopbanner = alle_data[3];

	var txt = html_stopbanner;
    var her = document.getElementById("banner");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', txt);

	var data = [banner, dokument, html_banner, html_stopbanner, alle_data[4], alle_data[5], alle_data[6]];
	var jsondata = JSON.stringify(data);

	document.getElementById('jsondata').value = jsondata;


	$("#send").toggleClass("skjul",false);
	$("#send")[0].innerHTML = "Opload & Gem";
	if (slet) $("#send")[0].innerHTML = "Bekræft sletning af banner";

}
var inp;

document.addEventListener("DOMContentLoaded", function() {
	inp = document.getElementById("upload_ban");
	$("#tekstfeldt").toggleClass("skjul",true);
	inp.addEventListener("change" ,ev => preview_image(ev));
});
 
