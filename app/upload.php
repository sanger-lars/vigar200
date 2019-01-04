<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'>
  <title>Vigar Stamme - upload</title>
  <meta name="keywords" content="Spejder,KFUM Spejderne, Vigar, Spejder i Hvidovre">
  <meta name="description" content="Hjemmeside for KFUM Spejderne Vigar Stamme.">
  <META content=da http-equiv=Content-Language>
  <META content="text/html"; charset="utf-8"; http-equiv="Content-Type">
  <!-- build:css assets/styles/styles.css -->
  <link rel="stylesheet" type="text/css" href="temp/styles/styles.css">
  <!-- endbuild -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="assets/upload/upload.js"></script>  
  
  <style>
    h3 {
      color: yellow;
    }
    @media (min-width: 1000px) {
    {
  </style>

</head>
<body>
          <?php 
          if (isset($_SESSION['u_id'])) {
            echo '<form action="assets/includes/logout.inc.php" method="POST" style="position: absolute; right: 20px;">
              <button class="sort_knap" type="submit" name="logout-submit">Log ud</button>
            </form>';
          }
        ?>
  <script src="menu.html"></script>    
  <br>
  <div class= "linje_green"></div>
 
   <div class="overskriften">
    <h1>upload</h1>
  </div>
  <div align="center">
    
    <form method="POST" action="assets/upload/test.php" id="larsform" enctype="multipart/form-data" >
      <p style="color: yellow"> 
        vælg enhed >  
        <select id="enhed" name="enhed" onchange="hent_gemte_data(vis_data)">
          <option value=""></option>
          <option value="fam">Fammiliespejd</option>
          <option value="bae">Bæver</option>
          <option value="ulv">Ulv</option>
          <option value="spe">Spejder</option>
          <option value="rov">Rover</option>
        </select>
        <input type="text" name="nr" id="nr" style="visibility: hidden; width: 20px;">
        <br>
        <input id="upload_bild" type="file" name="files">
        <br>
        vælg billed position >
        <select id="poss" name="poss" >
          <option value="0"></option>
          <option value="1">venstre</option>
          <option value="2">midten</option>
          <option value="3">højre</option>
        </select>
        <?php 
          if (isset($_SESSION['u_id'])) {
            echo '<button class="sort_knap" type="submit" id="send" > Upload </button>';
          }
        ?>
        <img id="output_image" style="width: auto;">
          
        <br>
        <textarea name="tekst" id="tekst" placeholder="Tekst" align="center" style="font-size: 1.5rem; width: 50%; height: 100px;"></textarea>
        <br>
        </p>
    </form>
  </div>


  <div id="preview" style="display: visible"></div>

  <div class="clear"></div>
  <div class="filler" style="height: 300px"></div>
  <script src="footer.html"></script>  

<!-- build:js assets/scripts/App.js -->
<script type="text/javascript" src="temp/scripts/App.js"></script>
<!-- endbuild -->


</body>
</html>
