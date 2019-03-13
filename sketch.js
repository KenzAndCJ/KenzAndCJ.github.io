var player;

var goal;
var backgroundColor;

var terrain;
var sky;

var hr;
var isDay;


function setup() {

  backgroundColor = color(0, 20, 20);
  createCanvas(windowWidth - 10, windowHeight - 10);
  background(backgroundColor);
  player = new Sprite(100, 100, 64, 64, 'red');
  goal = new Sprite(200, 100, 128, 64, 'green');
  terrain = new Terrain();
  textSize(60);


  //is it less than 6 pm and greater than 6 am
  isDay = hour() + 1 < 18 && hour() + 1 > 6;
  hr = hour() % 12;

  sky = new Sky(100, 8, hr);
}

function draw() {

  background(backgroundColor);



  if (keyIsDown(RIGHT_ARROW)) {
    player.move(1, 0);
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.move(-1, 0);
  }

  if (keyIsDown(UP_ARROW)) {
    player.move(0, -1);
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.move(0, 1);
  }


  if (player.isColliding(goal.x, goal.y, goal.w, goal.h)) {
    if (goal.color != 'green') {
      goal.color = 'green';
    }
    else {
      goal.color = 'yellow';
    }

    if (goal.x == 200 && goal.y == 200) {
      goal.x = 400;
      goal.y = 400;
    }
    else {
      goal.x = 200;
      goal.y = 200;
    }
  }


  sky.display();

  //player.display();
  //goal.display();

  terrain.display();

  fill('white');
  text('Kenz and CJ!', windowWidth / 2 - 200, 60);

}

function windowResized() {

  
  resizeCanvas(windowWidth - 10, windowHeight - 10);

  terrain = new Terrain();
  sky = new Sky(100, 8, hr);
  
  fill('white');
  text('Kenz and CJ!', windowWidth / 2 - 200, 60);

}

