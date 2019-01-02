
<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_FILES['files'])) {
        $errors = [];
        $path = '';
		$extensions = ['jpg', 'jpeg', 'png', 'gif'];

		$file_name = $_FILES['files']['name'];
		$file_tmp = $_FILES['files']['tmp_name'];
		$file_type = $_FILES['files']['type'];
		$file_size = $_FILES['files']['size'];

		$test = explode('.', $file_name);
		
		$file_ext = strtolower($test[1]);
		
		if (!in_array($file_ext, $extensions)) {
			$errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
		}

		if (empty($errors)) {
			$file = $path . $_POST['enhed'] . $_POST['poss'] . "." . $file_ext;
			$ok = move_uploaded_file($file_tmp, $file);
			sleep(2);
			if ($ok) {
				echo("enhed=" . $_POST['enhed']);

				$jsondata = @file_get_contents("upload.json", true);


				exit();
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

    
}


?>
