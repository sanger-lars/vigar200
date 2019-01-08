<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_FILES['files']) && $_FILES['files']['name'] != "") {
    	
	        $errors = [];
	        $path = '../../images/bannere/';
			$extensions = ['jpg', 'jpeg', 'png', 'gif'];
			
	          
			$file_name = $_FILES['files']['name'];
			$file_tmp = $_FILES['files']['tmp_name'];
			$file_type = $_FILES['files']['type'];
			$file_size = $_FILES['files']['size'];
			$file_name = strtolower($_FILES['files']['name']);
			$test = explode('.', $file_name);
			
			$file_ext = strtolower($test[1]);

			if (!in_array($file_ext, $extensions)) {
				$errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
			}

			if (empty($errors)) {
				$file = $path . $file_name;
				$ok = move_uploaded_file($file_tmp, $file);
				sleep(1);
				if ($ok) {

				} else {
					echo $file;
					exit();
				}		
			}
			

			if ($errors) {
				print_r($errors);
				echo $errors;
			}
    }

    if (isset($_FILES['dokument']) && $_FILES['dokument']['name'] != "") {
    	
        $errors = [];
        $path = '../../dokumenter/';
		$extensions = ['jpg', 'jpeg', 'png', 'gif', 'doc', 'docx','pdf'];
		

		$file_name = $_FILES['dokument']['name'];
		$file_tmp = $_FILES['dokument']['tmp_name'];
		$file_type = $_FILES['dokument']['type'];
		$file_size = $_FILES['dokument']['size'];
		$file_name = strtolower($_FILES['dokument']['name']);
		$test = explode('.', $file_name);
		
		$file_ext = strtolower($test[1]);
		if (!in_array($file_ext, $extensions)) {
			$errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
		}

		if (empty($errors)) {
			$file = $path . $file_name;
			$ok = move_uploaded_file($file_tmp, $file);
			sleep(1);
			if ($ok) {

			} else {
				echo $file;
				exit();
			}		
		}
		

		if ($errors) {
			print_r($errors);
			echo $errors;
		}
    }


    if (isset($_POST['jsondata'])) {
    	$filename = "../banner.json";
    	$jsondata = $_POST['jsondata'];
    	file_put_contents($filename, $jsondata);
		sleep(1);

		header( 'Location: ../../../forsiden.php');

    }

    
}


?>
