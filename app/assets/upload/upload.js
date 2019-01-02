let log = console.log;

function hent_gemte_data(callback) {
	var posting = $.post("assets/upload/hent.php", {
    alle: "alle"
  }).done(function (data) {
    var alle_data = JSON.parse(data);
    callback(alle_data);
  });
}

function bild() {
	
	console.log(this.src.split('/')[5]);
	//this.remove(0);
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
	var nr = e.selectedIndex*2-1;
	document.getElementById('nr').value = nr;
	var html_tekst = data[nr];
	
	// ryd tekst felt og preview
	document.getElementById("preview").innerHTML = "";
	document.getElementById('tekst').value = "";

	if (html_tekst == "<div class='filler'></div>") {
		html_tekst = "<h3 align='center'></h3>"+html_tekst;

	}
	// vis preview
    document.getElementById("preview").insertAdjacentHTML('beforeend', html_tekst);
    
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
	inp = document.getElementById("upload_bild");
	inp.addEventListener("change" ,ev => preview_image(ev));
});

