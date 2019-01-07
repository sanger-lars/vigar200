<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_FILES['files'])) {
        $errors = [];
        $path = '../';
		$extensions = ['jpg', 'png', 'gif'];
		$nr = $_POST['nr'];
		$tekst = $_POST['tekst'];
		$file_name = $_FILES['files']['name'];
		$file_tmp = $_FILES['files']['tmp_name'];
		$file_type = $_FILES['files']['type'];
		$file_size = $_FILES['files']['size'];

		$test = explode('.', $file_name);
		
		$file_ext = strtolower($test[1]);
		
		if (!in_array($file_ext, $extensions)) {
			$errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
		}

		if ( $_POST['poss'] == "0" ) {
			$errors[] = 'ingen position på billedet';
		}

		if (empty($errors)) {
			$nyt_filnavn = $_POST['enhed'] . $_POST['poss'] . "." . $file_ext;
			$file = $path . $nyt_filnavn; 
			
			$ok = move_uploaded_file($file_tmp, $file);
			sleep(1);
			if ($ok) {
				$jsondata = @file_get_contents("../upload2.json", true);
				$data = json_decode($jsondata);
				$data[$nr] = $tekst;
				$gammelt_filnavn = $data[$nr+$_POST['poss']];
				if ($gammelt_filnavn !== $nyt_filnavn) {
					$ok = unlink($path . $gammelt_filnavn);
				}
				
			
				$ht_txt = "<h3 align='center'>" . $tekst . "</h3><div class='flex3'>";
				for ($i=1; $i < 4 ; $i++) {
					$gemt_bld = $data[$nr+$i];
					if ($_POST['poss'] == $i) {
						$data[$nr+$i] = $_POST['enhed'] . $i . "." . $file_ext;
					}
					if ($gemt_bld !== "" || $_POST['poss'] == $i) {
						$ht_txt = $ht_txt . "<img src='assets/upload/" . $data[$nr+$i] . "' alt='' style = 'width: auto;height: 300px;' id = 'uploadet_bild'>";

					}
				}
				$ht_txt = $ht_txt . "<br></div>";
				$data[$nr+4] = $ht_txt;

				$jsondata = json_encode($data);

				file_put_contents("../upload2.json", $jsondata);
				sleep(1);
				header( 'Location: ../../../upload.php?'.$_POST['enhed'] ) ;
				exit();
			} else {
				echo $file;
				exit();
			}		
		} else {
				$jsondata = @file_get_contents("../upload2.json", true);
				$data = json_decode($jsondata);
				$data[$nr] = $tekst;
				$ht_txt = "<h3 align='center'>" . $tekst . "</h3><div class='flex3'>";
				for ($i=1; $i < 4 ; $i++) {
					$gemt_bld = $data[$nr+$i];
					if ($gemt_bld !== "" ){
						$ht_txt = $ht_txt . "<img src='assets/upload/" . $gemt_bld . "' alt='' style = 'width: auto;height: 300px;' id = 'uploadet_bild'>";
					}
				}
				$ht_txt = $ht_txt . "<br></div>";
				$data[$nr+4] = $ht_txt;

				$jsondata = json_encode($data);

				file_put_contents("../upload2.json", $jsondata);
				sleep(1);
				header( 'Location: ../../../upload.php?'.$_POST['enhed'] ) ;
				exit();			
		}

		if ($errors) {
			print_r($errors);
			echo $errors;
		}
    }

    
}


?>
