<?php 

	$filename = "upload2.json";

	if(isset($_POST['data'])){
		file_put_contents("upload2.json", $_POST['data']);
	}



 ?>