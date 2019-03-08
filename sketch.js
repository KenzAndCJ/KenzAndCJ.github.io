let stars = []; 
let _moon;

function setup() 
{
	createCanvas(windowWidth - 20, windowHeight - 40);
	background('black');
	textSize(60);

	let r = random(100,150);
	for (let i = 0; i < r; i++)
	{
		stars.push(new star());
	}

	_moon = new moon();
}


function draw()
{	
	fill('white');
	text('Kenz and CJ!', windowWidth/2 - 140, 60);
	
	for (let s of stars)
	{
		s.display();
	}

	_moon.display();
}

function moon()
{
	this.img = loadImage('assets/moon.png');
	this.posX = random(0, windowWidth);
	this.posY = random(0, 60);
	this.scale = 3;
	this.display = function()
	{
		image(this.img, this.posX, this.posY, this.img.width * this.scale, this.img.height * this.scale);
	}
}


function star()
{
	this.posX = random(0,windowWidth); 
	this.posY = random(0,windowHeight);
	this.size = random(2,8);

	this.display = function()
	{
		ellipse(this.posX, this.posY, this.size)
	}
}


 
