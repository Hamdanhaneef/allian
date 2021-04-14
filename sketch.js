var ship, ship1Img, ship2Img, ship3Img, shipsGroup;
var ground, groundImg;
var allian, allian1Img, allian2Img, alliansGroup;
function preload() {
  ship1Img = loadImage("ship01.png");
  ship2Img = loadImage("ship03.png");
  ship3Img = loadImage("ship14.png");

  allian1Img = loadImage("retroaliens_10.png");
  allian2Img = loadImage("ore_coal.png");

  groundImg = loadImage("background.jpg");
}
function setup() {
  createCanvas(800, 1000);

  ground = createSprite(0, 200, 800, 1000);
  ground.addImage(groundImg);
  ground.scale = 5;
  ground.velocityX = -3;

  shipsGroup = new Group();
}

function draw() {
  background(0);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  edges = createEdgeSprites();
  drawSprites();
  spawnShips();
  spawnAllian();
}

function spawnShips() {
  if (frameCount % 180 === 0) {
    ship = createSprite(0, 200, 50, 50);
    ship.velocityX = 3;
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        ship.addImage(ship1Img);
        break;
      case 2:
        ship.addImage(ship2Img);
        break;
      case 3:
        ship.addImage(ship3Img);
        break;
    }
    ship.scale = 0.5;
    ship.lifetime = 1000;
    shipsGroup.add(ship);
  }
}
function spawnAllian() {
  if (frameCount % 180 === 0) {
    allian = createSprite(0, 400, 50, 50);
    allian.velocityX = 3;
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        allian.addImage(allian1Img);
        break;
      case 2:
        allian.addImage(allian2Img);
        break;
    }
    allian.scale = 0.5;
    allian.lifetime = 1000;
    alliansGroup.add(allian);
  }
}
