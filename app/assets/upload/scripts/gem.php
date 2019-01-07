<?php 
	$filename = "../upload2.json";

	if(isset($_POST['data'])){
		$jsondata = $_POST['data'];
		file_put_contents($filename, $jsondata);
		sleep(1);
		if($_POST['filnavn'] !== "") {
			$file = "../" . $_POST['filnavn'];
			$ok = unlink($file);
			
		}
	

	
	}

 ?>