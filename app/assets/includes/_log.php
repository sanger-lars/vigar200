<?php 

	if(isset($_POST['check'])) {
		$id = $_POST['test'];
		if ($id !== "######") {
			echo $id; // fejl
		} else {
			//Log in user here
			session_start();
			$_SESSION['u_id'] = "started";

			if (isset($_POST['kunCheck'])) {
				echo "ok";
			} else {
				$html = '<a href="upload.php"><button class="sort_knap" >Leder-intra</button></a>';
			}

		echo json_encode($html);
		}
	}

	
 ?>