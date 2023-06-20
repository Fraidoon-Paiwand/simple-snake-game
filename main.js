let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;
  let  player = {
        x : 100,
        y : 100,
        w : 50,
        h : 50,
        
        speed: 9
    }


    let player2 = {
        x : 700,
        y : 100,
        w : 50,
        h : 50,
        
        speed: 9
    }

let arrowRightPressed = false;
let arrowLeftPressed = false;
let arrowUpPressed = false;
let arrowDownPressed = false;
let KeyDPressed = false;
let KeyAPressed = false;
let KeyWPressed = false;
let KeySPressed = false;
let playerSpawn = "spawn";
let playerSpawn2 = "spawn";

    requestAnimationFrame(draw);
      function draw() {

         if (arrowRightPressed) {
            player.x += player.speed;
         } else if (arrowLeftPressed) {
            player.x += -player.speed;
         } else if (arrowUpPressed) {
            player.y += -player.speed;
         } else if (arrowDownPressed) {
            player.y += player.speed;
         }

           if (KeyDPressed) {
            player2.x += player2.speed;
         } else if (KeyAPressed) {
            player2.x += -player2.speed;
         } else if (KeyWPressed) {
            player2.y += -player2.speed;
         } else if (KeySPressed) {
            player2.y += player2.speed;
         }
         ctx.fillStyle = "black"
         ctx.fillRect(0, 0, cnv.width, cnv.height); 
    
          if (playerSpawn === "spawn") {
          ctx.fillStyle = "green";
          ctx.fillRect(player.x, player.y, player.w, player.h);
          } else {

          }
          if (playerSpawn2 === "spawn") {
          ctx.fillStyle = "blue";
          ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
          } else {

          }
        
          requestAnimationFrame(draw);
      }
       requestAnimationFrame(draw2);
      function draw2 (){
         
         requestAnimationFrame(draw2);
      }
      
      document.addEventListener("keyup", keyupHandler);
      document.addEventListener("keyup", keyupHandler2);
      document.addEventListener("keydown" , keydownHandler2);
      document.addEventListener("keydown" , keydownHandler);

      function keydownHandler(event){
         console.log(event.code);
         if (event.code ==  "ArrowRight"){
            arrowRightPressed = true;
         } else if (event.code == "ArrowLeft"){
            arrowLeftPressed = true;
         } else if (event.code == "ArrowUp"){
            arrowUpPressed = true;
         } else if (event.code == "ArrowDown"){
            arrowDownPressed = true;
         } 
      }

 
      function keyupHandler(event){
         if (event.code ==  "ArrowRight"){
            arrowRightPressed = false;
         } else if (event.code == "ArrowLeft"){
            arrowLeftPressed = false;
         } else if (event.code == "ArrowUp"){
            arrowUpPressed = false;
         } else if (event.code == "ArrowDown"){
            arrowDownPressed = false;
         } 
      }
      
      function keydownHandler2(event){
      if (event.code ==  "KeyD"){
       KeyDPressed = true;
      } else if (event.code == "KeyA"){
       KeyAPressed = true;
      } else if (event.code == "KeyW"){
       KeyWPressed = true;
      } else if (event.code == "KeyS"){
       KeySPressed = true;
      } 
}

      function keyupHandler2(event){
      if (event.code ==  "KeyD"){
       KeyDPressed = false;
      } else if (event.code == "KeyA"){
       KeyAPressed = false;
      } else if (event.code == "KeyW"){
       KeyWPressed = false;
      } else if (event.code == "KeyS"){
       KeySPressed = false;
      } 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

let playerScore = 0;
let player2Score = 0;
let player3Score = 0;


/////////////////////////////////////////////////////////  
requestAnimationFrame(coli2);
  function coli2 () {
          if (player.x + player.w >= player3.x &&
            player.x <= player3.x + player3.w &&
            player.y + player.h >= player3.y &&
            player.y <= player3.y + player3.h){
            console.log("eat");
               player3 = {
               x : Math.floor(Math.random() * (cnv.height - 100)),
               y : Math.floor(Math.random() * (cnv.width - 100)),
               h : 50,
               w : 50,
               speed : 9,
               
               }

            playerScore++;
            player3Score++;
  } else {
// console.log("not eat");
  }


  if (player2.x + player2.w >= player3.x &&
   player2.x <= player3.x + player3.w &&
   player2.y + player2.h >= player3.y &&
   player2.y <= player3.y + player3.h){
   console.log("eat");
      player3 = {
      x : Math.floor(Math.random() * (cnv.height - 100)),
      y : Math.floor(Math.random() * (cnv.width - 100)),
      h : 50,
      w : 50,
      
    } 
    player2Score++;
    player3Score++;
   } else {
      // console.log("not eat");
        }
  requestAnimationFrame(coli2);
}
 let player3 = {
         x : Math.floor(Math.random() * (cnv.width - 100)),
         y : Math.floor(Math.random() * (cnv.height - 100)),
         h : 50,
         w : 50,
         
      }
      requestAnimationFrame(draw3);
      function draw3 () {
         console.log(player3.x , player3.y);
         ctx.fillStyle = "yellow";
         ctx.fillRect(player3.x, player3.y , player3.h, player3.w);
         requestAnimationFrame(draw3);
      }
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Boom
let boomXY;
requestAnimationFrame(boom);
function boom () {
      boomXY = {
      x : Math.floor(Math.random() * (cnv.width - 100)),
      y : Math.floor(Math.random() * (cnv.height - 100)),
      h : 50,
      w : 50,
   }
   setTimeout((boom), 5000);

}
requestAnimationFrame(boomIf);
function boomIf () {
   if (player.x + player.w >= boomXY.x &&
      player.x <= boomXY.x + boomXY.w &&
      player.y + player.h >= boomXY.y &&
      player.y <= boomXY.y + boomXY.h){
         console.log("player 1 out");
          playerSpawn = "deSpawn";
      } 
       else if (player2.x + player2.w >= boomXY.x &&
         player2.x <= boomXY.x + boomXY.w &&
         player2.y + player2.h >= boomXY.y &&
         player2.y <= boomXY.y + boomXY.h){
            console.log("player 2 out");
            playerSpawn2 = "deSpawn";
         
         } else if (boomXY.x + boomXY.w >= player3.x &&
            boomXY.x <= player3.x + player3.w &&
            boomXY.y + boomXY.h >= player3.y &&
            boomXY.y <= player3.y + player3.h){
               player3 = {
                  x : Math.floor(Math.random() * (cnv.height - 100)),
                  y : Math.floor(Math.random() * (cnv.width - 100)),
                  h : 50,
                  w : 50,
                  
                  }
         }

        requestAnimationFrame(boomIf);
}

requestAnimationFrame(draw4);
function draw4 () {


ctx.fillStyle = "red";
ctx.fillRect(boomXY.x, boomXY.y , boomXY.h, boomXY.w);

document.getElementById("output").innerHTML = player3Score;
document.getElementById("output1").innerHTML = playerScore;
document.getElementById("output2").innerHTML = player2Score;

   requestAnimationFrame(draw4);
}
//  }
//////////////////////////////////////////////////////////////////////////////
// Button for reseting the place of yellow square
document.getElementById("btn").addEventListener("click" , btnclicked);

function btnclicked () {
   player3 = {
      x : Math.floor(Math.random() * (cnv.height - 100)),
      y : Math.floor(Math.random() * (cnv.width - 100)),
      h : 50,
      w : 50,
      
      }
}




//  function drawBegining () {
  //    ctx.fillStyle = "black";
  //    ctx.fillRect(0, 0, cnv.width, cnv.height);
  
  //    ctx.font = "20px fantacy";
  //    ctx.fillStyle = "grey"
  //    ctx.fillText("Click to Begin", 400, 100,);
      
  //    ctx.fillStyle = "green";
  //    ctx.fillRect(100, 150 , 50, 50);
  //    ctx.font = "15px times";
  //    ctx.fillText("Green Square is player one 1", 100, 250,);
  
  //    ctx.fillStyle = "blue";
  //    ctx.fillRect(350, 150 , 50, 50);
  //    ctx.font = "15px times";
  //    ctx.fillText("Blue Square is player one 2", 350, 250,);
  
  //    ctx.fillStyle = "yellow";
  //    ctx.fillRect(550, 150 , 50, 50);
  //    ctx.font = "15px times";
  //    ctx.fillText("This is the food you have collect this.", 550, 250,);
  
  //    ctx.fillStyle = "red";
  //    ctx.fillRect(850, 150 , 50, 50);
  //    ctx.font = "15px times";
  //    ctx.fillText("BOOM don't touch this one ", 800, 250,);
  //    ctx.fillText("Otherwise you will be out.",800, 270, );
  
  //    ctx.fillStyle = "grey";
  //    ctx.font = "20px fantacy";
  //    ctx.fillText("Scores are on the left side of the page. <<<<<<", 100, 400,);
  
     
  
  //    requestAnimationFrame(drawBegining);
  // }
  