var hypnoticBall, database;
var position;
var gameState = 0;
var playerCount = 0;
var form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-50,displayHeight-175);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if (playerCount === 4){
  game.update(1)

  }
  if (gameState === 1){
  clear();  
  game.play();

  }
  
}

