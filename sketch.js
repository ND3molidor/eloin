var imagemDaTorre, torre;
var imagemDaPorta, porta, grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var grupoDeBlocoInvisivel, blocoInvisivel;
var estadoJogo = "JOGAR"

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(595,595);
  
  torre = createSprite(width/2,10);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 4;

  fantasma = createSprite(300,300);
  fantasma.addImage("Fantasma",imagemDoFantasma);
  fantasma.scale =0.4;
  
  
  grupoDePortas = new Group();
  grupoDeEscaladores = new Group();
  grupoDeBlocoInvisivel = new Group();
}



function draw(){
  background(200);
  if(torre.y > 600){
      torre.y = 10
    }
  
  
 if(fantasma.isTouching(grupoDeEscaladores)){
  fantasma.velocityY =0; 
 }
   
//faz o fantasma andar
  controle()
//gera as janelas
  janelas()
  
  
  
  
  drawSprites();
  
  if(fantasma.isTouching(grupoDeBlocoInvisivel)|| fantasma.y >602){
   background("black");
    textSize(70);
   fill("red");
  stroke("yellow");
    text("MORELO",150,300);
    
  }
}


function controle(){
if(keyDown("up")){
   fantasma.velocityY= -10;
  }
  
  if(keyDown("left")){
   fantasma.x = fantasma.x -5;
  }
  
  if(keyDown("right")){
   fantasma.x = fantasma.x + 5;
  }
  
    fantasma.velocityY = fantasma.velocityY  +1;
}

function janelas(){
 if(frameCount %100 === 0){
      
porta= createSprite(300,-50);
porta.addImage(imagemDaPorta);  
   
 porta.x = Math.round(random(150,450));    
 
 porta.velocityY = 4;
  
 porta.lifetime=180;
 grupoDePortas.add (porta);
   
   escalador = createSprite(300,15);
 escalador.addImage(imagemDeEscalador);
   
 escalador.x = porta.x;  
 escalador.velocityY = porta.velocityY; 
 grupoDeEscaladores.add(escalador);
   
  blocoInvisivel = createSprite(300,25);
  blocoInvisivel.x=porta.x;
  blocoInvisivel.velocityY = porta.velocityY; 
  blocoInvisivel.width = escalador.width; 
  blocoInvisivel.height = 2;
  grupoDeBlocoInvisivel.add(blocoInvisivel);
  blocoInvisivel.visible = false;
   
   
 fantasma.depth = porta.depth;
   
 fantasma.depth = fantasma.depth +1;
 }
  
  
 
  
  
}