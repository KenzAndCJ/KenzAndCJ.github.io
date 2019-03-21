

var aboutButton;
var homeButton;
var aboutTextBox;

var enviro;

var sm;

var fps;

var debugMode;
var moonFollowMode;

function setup()
{
	var cnvs = createCanvas(windowWidth, windowHeight);

	cnvs.style('display', 'block');

	enviro = new Environment();

	sm = new StateMachine();

	debugMode = false;

	//home button
	var hbText = new TextObj("CSCJ", 0, 0, 'white', 44);
	var hbBS = new ButtonState(
		color(0, 0, 0),
		color(40, 40, 40),
		color(120, 120, 120),
		color(160, 160, 160));

	cscjButton = new Button(windowWidth - 128 - 20, 10, 128, 64, 20,
		'white', 4, hbText, hbBS);


			//home button
	var kText = new TextObj("KENZ", 0, 0, 'white', 44);
	var kBS = new ButtonState(
		color(0, 0, 0),
		color(40, 40, 40),
		color(120, 120, 120),
		color(160, 160, 160));

	kenzButton = new Button( 20, 10, 128, 64, 20,
		'white', 4, kText, kBS);

		
		

	//about text box
	var atText = new TextObj(
		"This website was\n made entirely\n "
		+ "with P5 using\n fake javascript classes\n "
		+ "each stored in\n it's own file because\n "
		+ "OOP is supreme.\n I want to make static\n "
		+ "websites with OOP.\n Is that so wrong?",
		0, 0, 'white', 22);

	var moonText = new TextObj(
		"The moon will move\n across the screen\n "
		+ "using the real time.\n\n The stars and\n "
		+ "mountains are\n randomly generated\n "
		+ "when loading this page.",
		0, 0, 'white', 22);

	var atBS = new ButtonState(
		color(0, 0, 0),
		color(0, 0, 0),
		color(0, 0, 0),
		color(0, 0, 0));

	aboutTextBox = new Button(10, 80, 256, 256, 10,
		'white', 2, moonText, atBS);



	//about button
	var abText = new TextObj("About", 0, 0, 'white', 44);
	var abBS = new ButtonState(
		color(0, 0, 0),
		color(40, 40, 40),
		color(120, 120, 120),
		color(160, 160, 160));

	aboutButton = new Button(10, 10, 128, 64, 20,
		'white', 4, abText, atBS);



}


function keyPressed()
{
	//tilde ~ key
	if (keyCode === 192)
	{
		debugMode = !debugMode;
	}
}


function draw()
{


	switch (sm.state)
	{
		case States.Loading:
			sm.changeState(States.HomePage);
			break;

		case States.HomePage:

			enviro.display();


			if (cscjButton.state.state === cscjButton.state.released)
			{
				window.location.href = 'cscj.html';
			}
			if (kenzButton.state.state === kenzButton.state.released)
			{
				window.location.href = 'kenz.html';
			}

			cscjButton.display();

			kenzButton.display();

	

			if (containsMouse(
				enviro.sky.moon.posX - (enviro.sky.moon.img.width * enviro.sky.moon.scale) / 2,
				enviro.sky.moon.posY + enviro.sky.moon.midnightDistFromTop,
				enviro.sky.moon.img.width * enviro.sky.moon.scale,
				enviro.sky.moon.img.height * enviro.sky.moon.scale))
			{
				if (mouseIsPressed && !moonFollowMode)
				{
					moonFollowMode = true;
				}
				else{
					if (!moonFollowMode)
					{
					//aboutTextBox.display();
					//aboutButton.display();
					}
				}
			}

			if (moonFollowMode)
			{
				if (mouseIsPressed)
				{
					enviro.sky.moon.posX = mouseX;//- (enviro.sky.moon.img.width * enviro.sky.moon.scale)/2;
					enviro.sky.moon.posY = mouseY- (enviro.sky.moon.img.height * enviro.sky.moon.scale)/2;
				}
				else{
					moonFollowMode = false;
				}
			}


			break;


	}


	if (debugMode)
	{
		push();

		fill('white');
		textSize(22);
		text("FPS:" + frameRate().toFixed(0), 20, windowHeight - 20);

		pop();

	}
}


function containsMouse(x, y, w, h) 
{
	if (mouseX >= x && mouseX <= x + w &&
		mouseY >= y && mouseY <= y + h)
	{
		return true;
	}

	return false;
}

function windowResized()
{

	resizeCanvas(windowWidth, windowHeight);

	enviro = new Environment();

	var hbText = new TextObj("CSCJ", 0, 0, 'white', 44);
	var hbBS = new ButtonState(
		color(0, 0, 0),
		color(40, 40, 40),
		color(120, 120, 120),
		color(160, 160, 160));

	cscjButton = new Button(windowWidth - 128 - 20, 10, 128, 64, 20,
		'white', 4, hbText, hbBS);


				//home button
	var kText = new TextObj("KENZ", 0, 0, 'white', 44);
	var kBS = new ButtonState(
		color(0, 0, 0),
		color(40, 40, 40),
		color(120, 120, 120),
		color(160, 160, 160));

	kenzButton = new Button(20, 10, 128, 64, 20,
		'white', 4, kText, kBS);

		

}



