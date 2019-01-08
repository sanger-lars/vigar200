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

  <script>
  function preview_image(ev) 
  {
   var reader = new FileReader();
   reader.onload = function()
   {
      var output = document.getElementById('output_image');
      output.src = reader.result;
      //output.style.height = "200px";
   }  
   reader.readAsDataURL(ev.target.files[0]);
   
   lav_html(false);
  }
  </script>
  
  <style>
    .knap {
      background-color: #27211e;
      color: #93cc19;
      padding: 5px 10px 5px 10px;
      border: solid #cd3c43 1px;
    }

    .knap:hover {
      background-color: #cd3c43;
      color: #27211e;
    }

    .skjul {
        display: none;
    }
    h3 {
      color: #93cc19;
    }

    form {
      color: #93cc19;
    }

    .hvidbrun {
      font-size: 2rem;
      color: #7d8260;
      border: 20px solid #7d8260;
      background-color: white;
      width: 95%;
      padding: 20px;
      text-align: center;
      margin: auto;
    }
    .hvidbrun a {color: #7d8260;}

    textarea {
      margin-top: 20px;
      font-size: 1rem; 
      width: 95%; 
      height: 100px;
      text-align: center;
    }

    @media (min-width: 1000px) {
      .flex3 img {
        padding: 10px;
      }

      textarea {
        margin-top: 20px;
        font-size: 1.2rem; 
        width: 80%; 
        height: 100px;
        text-align: center;
      }

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
            <textarea name="tekst" class="tekst2" id="tekst" placeholder="Tekst" align="center" onchange="vis_tekstfelt()"></textarea>
            <br><br><span class="knap" onmousedown="slet_tekst()">Slet tekst-banner</span>
            <br><br>
            <div class= "linje_green" style="display: block;"></div>
            <br><br>
            <label for="bannere">find banner ></label> 
            <input id="upload_ban" type="file" name="files" >
            <label for="dokument">tilføj dokument ></label> 
            <input id="upload_link" type="file" name="dokument" onchange="lav_html(false)">
            <span class="knap" onmousedown="lav_html(true)">Slet banner</span>
            <br>
            <br>
            <img id="output_image" style="width: 95%";>
            <br>
            
            <br>
            <div class= "linje_green" style="display: block;"></div>
            <br>
            <label for="baeverstop">Skal Bæverstop banner vises ></label>
            <select id="baeverstop" name="baeverstop" onchange="lav_html(false)">
              <option value="0"></option>
              <option value="1">Ja</option>
              <option value="2">Nej</option>
            </select>
            <input type="text" id="jsondata-link" name="jsondata-link" style="visibility: hidden;">
            <input type="text" id="jsondata" name="jsondata" style="visibility: hidden;">

            <br><br>
            <button class="sort_knap skjul" type="submit" id="send" ></button>
        </form>
      </div>';
    } // if u_id
  ?>
  
  <br>
  <div class="hvidbrun skjul" id="tekstfeldt"> </div>
  
  <br>

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
