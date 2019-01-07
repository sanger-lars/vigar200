let log = console.log;

 function preview_image(ev) 
  {
   var reader = new FileReader();
   reader.onload = function()
   {
	    var output = document.getElementById('output_image');
    	output.src = reader.result;
    	debugger;
    	output.style.height = "200px";
   }	
   reader.readAsDataURL(ev.target.files[0]);
   
   lav_html(false);
  }

function lav_html(slet) {
	var banner = document.getElementById('upload_ban').value
		.substr(12).toLowerCase();
	var dokument = document.getElementById('upload_link').value
		.substr(12).toLowerCase();
	var baeverstop = document.getElementById('baeverstop').value;

	if (slet) {alle_data[2] = "";}
	if (dokument != "") { 
		var html_banner =  `<P align=center><A href='assets/dokumenter/${dokument}'><IMG style="width: 95%" src='assets/images/bannere/${banner}'></A></P>`;
	} else if (banner != "") {
		var html_banner =  `<P align=center><IMG style="width: 95%" src='assets/images/bannere/${banner}'></P>`;
	} else {
		html_banner = alle_data[2];
	}

	if (baeverstop == "1") {
		 var html_stopbanner = `<P align=center><IMG style='width: 95%' src='assets/images/bannere/for_mange_baevere2.png'></A></P>`;
	} else if (baeverstop == "2") {
		var html_stopbanner = "";
	} else var html_stopbanner = alle_data[3];

	var tekst = html_stopbanner;
    var her = document.getElementById("banner");
    her.innerHTML = "";
    her.insertAdjacentHTML('beforeend', tekst);

	var data = [banner, dokument, html_banner, html_stopbanner];
	var jsondata = JSON.stringify(data);

	document.getElementById('jsondata').value = jsondata;


	$("#send").toggleClass("skjul",false);

}
var inp;

document.addEventListener("DOMContentLoaded", function() {
	inp = document.getElementById("upload_ban");
	inp.addEventListener("change" ,ev => preview_image(ev));
});
 
