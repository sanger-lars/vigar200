let log = console.log;
let nr;

function hent_gemte_data(callback) {
	log('henter data');
	var posting = $.post("assets/upload/hent.php", {
    alle: "alle"
  }).done(function (data) {
    var alle_data = JSON.parse(data);
    callback(alle_data);
  });
}

function bild() {
	let fnavn;
	console.log(this.src.split('/')[5]);
	if (confirm('vil du slette billedet ?')) {
		debugger;
		var fnavn1 = this.src.split('/')[6];
		fnavn = fnavn1.split('?')[0];
		i = 0;
		while (alle_data[i] !== fnavn) {
			i++;
		}
		debugger;
		alle_data[i] = "";
		var txt = alle_data[nr+4];
		var n = txt.indexOf(fnavn);
		
		txt = txt.substr(0, n-24) + txt.substr(n+75);
		document.getElementById('preview').innerHTML = txt;

		alle_data[nr+4] = txt;
		var posting = $.post("assets/upload/gem.php", {
	    	data: JSON.stringify(alle_data)
	    }).done(function (data){
	    	//this.remove(0);
			window.location.reload();
		})
		
	}
}

function upload_billed() {

	var posting = $.post("assets/upload/test.php", {
    formData: new FormData($("#larsform"))
  }).done(function (data) {
  	debugger;
  	log(formData, 'hej');
    var alle_data = JSON.parse(data);
  }).fail(function(data) {
    alert( "error" );
    debugger;
  });
} 

function vis_data(data) {


	// bestem hvilken enhed
	var e = document.getElementById("enhed");
	nr = e.selectedIndex*6-5;
	document.getElementById('nr').value = nr;
	var html_tekst = data[nr+4];
	alle_data = data;
	
	// ryd tekst felt og preview
	document.getElementById("preview").innerHTML = "";
	document.getElementById('tekst').value = "";

	if (html_tekst == "<div class='filler'></div>") {
		html_tekst = "<h3 align='center'></h3>"+html_tekst;

	}
	// vis preview
    document.getElementById("preview").insertAdjacentHTML('beforeend', html_tekst);
    
    // gør billederne unikke
    var tal = Math.floor(Math.random()* 9999 + 11111);
    var x = document.getElementsByTagName("img");
    for (var i = 1; i < x.length; i++) {
    	x[i].src = x[i].src+"?"+tal;
    }
    

    // fyld tekst felt
    var x = document.getElementsByTagName("h3");
    document.getElementById('tekst').value = x[1].innerHTML;
	
	// find filnavnene på billederne
	var filnavn = [];
    var im = document.getElementsByTagName("img");
    for (var i = 0; i < im.length; i++) {
    	filnavn[i] = im[i].src.split('/')[5];
    }

    // check for billede click
    $("img").each(function (index) {
      $(this).on("click", bild);
    });

    // ændre teksten når den bliver tastet ind
	var txt = document.getElementById("tekst");
    txt.addEventListener("input", ev => x[1].innerHTML = txt.value);

    
}

  function preview_image(ev) 
  {
   var reader = new FileReader();
   reader.onload = function()
   {
    var output = document.getElementById('output_image');
    output.src = reader.result;
    output.style.height = "300px";
   }
   reader.readAsDataURL(ev.target.files[0]);
   
  }

var inp;

document.addEventListener("DOMContentLoaded", function() {

	console.log('programmet er startet');
	
	var xxx = window.location.search;
	if (xxx > "") {
		xxx = xxx.substring(1);
		document.getElementById('enhed').value = xxx;
		hent_gemte_data(vis_data);
	}
	inp = document.getElementById("upload_bild");
	inp.addEventListener("change" ,ev => preview_image(ev));
});

