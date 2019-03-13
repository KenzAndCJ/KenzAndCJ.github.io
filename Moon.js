class Moon {
	constructor(hr) {
		this.highest = 10;
        this.img = createImg('https://kenzandcj.github.io/assets/moon.png');
        this.img.hide();
		this.posX = (windowWidth/12) * (hr - 6);
		this.scale = 2;
        this.hr = hr;
	
    }
    
    display() {
        image(this.img, 
            this.posX - ( this.img.width * this.scale/2), 
            (windowHeight - this.highest)/(12-this.hr) - ( this.img.width * this.scale/2), 
            this.img.width * this.scale, this.img.height * this.scale);
    }
}