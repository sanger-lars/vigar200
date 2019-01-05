
	var zzz = "";
	zzz = window.location.search;

	function check_para() {
	  if (zzz > "") {
	    var posting = $.post("assets/includes/_log.php", {
	      check: "true",
	      test: zzz.substring(1).toString()
	    }).done(function (data) {
	       var tekst = JSON.parse(data);
	      var der = document.getElementById("led");
	      der.insertAdjacentHTML('beforeend', tekst);
	    }).fail(function (data) {
	      alert("fejl");
	    });
	  }
	} // check_para

	check_para();

