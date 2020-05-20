<!DOCTYPE html>

<html>

  <head>
    <meta charset='utf-8'>
    <meta name='description' content='Fun Game'>
    <title> Rock Paper and Scissors</title>
    <link rel='stylesheet' href='style.css'>
	</head>
  
  
  
  
  <style>
    @import url('https://fonts.googleapis.com/css?family=Asap:400,500,700&display=swap');
    </style>


<body style='text-align:center;font-family:Asap,sans-serif;margin:0;padding:0;background-color:#24272E'>
  <header style='background-color:white;padding:1px'>
    <h2 id="header" style='color:#25272E;'>Rock Paper Scissors</h2>
  </header>
  <main>
      
      <div style='position:relative;font-size:100px;color:white;border:3px solid white; width:400px; margin:20px auto;' >
        
        <h4 style='font-size:14px;position:absolute;top:30px;left:-30px; text-align:center;color:white ; background-color:red;width:50px'>user</h4>
        <h4 style='font-size:14px;position:absolute;top:30px;right:-25px;text-align:center;color:white; background-color:red;width:50px'>comp</h4>
        
        <p id="score" style="margin: 0; width:0px auto; ">0:0</p>
    </div>
    <h1 id="message" style='color:white;'>Paper covers rock. You Win!</h1>
    <img class='img' id="rock" style=' border: solid white;border-radius:50%;margin:10px' src='https://img.icons8.com/color/48/000000/hand-rock.png' alt='please load image'> 
    <img class='img' id="paper" style='border: solid white;border-radius:50%;margin:10px' src='https://img.icons8.com/color/48/000000/hand.png' alt='please load image'>
    <img class='img' id="scissor" style='border: solid white;border-radius:50%;margin:10px' src='https://img.icons8.com/color/48/000000/hand-scissors.png' alt='please load image'>
    <h3 style='color:white;'>Make your move.</h3>
</main>

<?php include "email.php"?>
<script src="app.js"></script>
</body>
  








</html>
