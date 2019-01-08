<?php 
	$filename = "../banner.json";

	if(isset($_POST['data'])){
		$jsondata = $_POST['data'];
		file_put_contents($filename, $jsondata);
		sleep(1);
		echo $jsondata;
		

		if($_POST['slet'] == "ja") {
			$file = "../../dokumenter/" . $_POST['filnavn'];
			$ok = unlink($file);
			echo $jsondata;
		}
	

	
	}

 ?>