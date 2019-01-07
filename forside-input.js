// forside-input.js


	var html_banner, html_stopbanner;
	var banner = "banner_15_sep.png";
	var dokument = "SPEJDER-SOMMER-AFSLUTNING-2018.doc";
	var baeverstop = "1";

	
	if (dokument != "") { 
		html_banner =  `<P align=center><A href='assets/dokumenter/${dokument}'>`
					+`<IMG src='assets/images/bannere/${banner}'></A></P>`;

	} else {
		html_banner =  `<P align=center><IMG src='assets/images/bannere/${banner}'></P>`;
	}
	
	html_stopbanner = "";
	if (baeverstop == "1") {
		html_stopbanner = "<P align=center><IMG style='width: 95%'"
				+" src='assets/images/bannere/for_mange_baevere2.png'></A></P>";
	}

	var data = [banner, dokument, html_banner, html_stopbanner];

	console.log(JSON.stringify(data));