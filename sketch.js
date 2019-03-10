let stars = [];
let _moon;
var hr;
var isDay;
function setup() {
	createCanvas(windowWidth - 20, windowHeight - 40);
	background('black');
	textSize(60);

	//is it less than 6 pm and greater than 6 am
	isDay = hour() + 1 < 18 && hour() + 1 > 6;
	hr = hour() % 12;
	let r = random(100, 200);
	for (let i = 0; i < r; i++) {
		stars.push(new star());
	}

	_moon = new Moon();
}


function draw() {
	fill('white');
	text('Kenz and CJ!', windowWidth / 2 - 200, 60);

	for (let s of stars) {
		s.display();
	}

	_moon.display();
}

class Moon {
	constructor() {
		this.highest = 10;
		this.img = loadImage('assets/moon.png');
		this.posX = (windowWidth/12) * (hr - 6);
		this.scale = 3;

		this.display = function () {
			image(this.img, 
				this.posX - ( this.img.width * this.scale/2), 
				(windowHeight - this.highest)/(12-hr) - ( this.img.width * this.scale/2), this.img.width * this.scale, this.img.height * this.scale);
		}
	}
}


function star() {
	this.posX = random(0, windowWidth);
	this.posY = random(0, windowHeight);
	this.size = random(2, 8);

	this.display = function () {
		ellipse(this.posX, this.posY, this.size)
	}
}



