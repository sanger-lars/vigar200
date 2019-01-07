<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'>
  <title>Vigar Stamme - upload på forsiden</title>
  <meta name="keywords" content="Spejder,KFUM Spejderne, Vigar, Spejder i Hvidovre">
  <meta name="description" content="Hjemmeside for KFUM Spejderne Vigar Stamme.">
  <META content=da http-equiv=Content-Language>
  <META content="text/html"; charset="utf-8"; http-equiv="Content-Type">
  <!-- build:css assets/styles/styles.css -->
  <link rel="stylesheet" type="text/css" href="temp/styles/styles.css">
  <!-- endbuild -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="assets/upload/scripts/forsiden.js"></script>  
  
  <style>
    .skjul {
        visibility: hidden;
    }
    h3 {
      color: #93cc19;
    }
    @media (min-width: 1000px) {
      .flex3 img {
        padding: 10px;
      }
    {

    form {
      color: #93cc19;
    }
  </style>

</head>
<body>
          <?php 
          if (isset($_SESSION['u_id'])) {
            echo '<form id="logud" action="assets/includes/logout.inc.php" method="POST" style="position: absolute; right: 20px;">
              <button class="sort_knap" type="submit" name="logout-submit">Log ud</button>
            </form><br><a href="upload.php"><button class="sort_knap" >Enhederne</button></a>';
          }
        ?>
  <script src="menu.html"></script>    
  <br>
  <div class= "linje_green"></div>
 
   <div class="overskriften">
    <h1>upload på forsiden</h1>
  </div>

  <?php 
    if (isset($_SESSION['u_id'])) {  
  echo '
  <div align="center" style="color: #93cc19;">
    
    <form method="POST" action="assets/upload/scripts/banner_opload.php" enctype="multipart/form-data" >
      
        <label for="bannere">find banner ></label> 
        <input id="upload_ban" type="file" name="files" >
        <label for="dokument">tilføj dokument ></label> 
        <input id="upload_link" type="file" name="dokument" onchange="lav_html(false)">
        <button onmousedown="lav_html(true)">Slet</button>
        <br>
        <img id="output_image">
        <br>
        <div class= "linje_green" style="display: block;"></div>
        <br>
        <label for="baeverstop">Skal Bæverstop banner vises ></label>
        <select id="baeverstop" name="baeverstop" onchange="lav_html(false)">
          <option value="0"></option>
          <option value="1">Ja</option>
          <option value="2">Nej</option>
        </select>
        <input type="text" id="jsondata" name="jsondata" style="visibility: hidden;">
        <br><br>
        <button class="sort_knap skjul" type="submit" id="send" > Upload </button>
    </form>
  </div>';
}
?>


  <div id="banner" style="display: visible"></div>

  <div class="clear"></div>
  <div class="filler" style="height: 300px"></div>
  <script src="footer.html"></script>  

<!-- build:js assets/scripts/App.js -->
<script type="text/javascript" src="temp/scripts/App.js"></script>
<!-- endbuild -->
<script type="text/javascript" src="assets/upload/scripts/hent_bannere.js"></script>


</body>
</html>
