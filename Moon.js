class Moon {
	constructor(hr, isNight) {

        this.img = isNight ? createImg('assets/moon.png') : createImg('assets/sun.png');
        this.img.hide();
        this.midnightDistFromTop = 22;         
        this.hour = hr;
        var hrUnitY = windowHeight/6;
        var hrUnitX = windowWidth/12;
        this.b4MN = (this.hour >= 18);    
        this.posX = (this.b4MN) ?  hrUnitX * (this.hour - 18) : hrUnitX * (this.hour + 6);            
        this.posY = (this.b4MN) ?  hrUnitY * (23-this.hour) : hrUnitY * this.hour;
		this.scale = isNight ? 2 : 0.8;
      
	
    }
    
    display() {




        image(this.img, 
            this.posX - (this.img.width * this.scale)/2,
            this.posY + this.midnightDistFromTop,
            this.img.width * this.scale, 
            this.img.height * this.scale);

        
            //this.posX - ( this.img.width * this.scale/2), 
            //this.posY + this.midnightDistFromTop, 
           // (windowHeight - this.highest)/(12-this.hr) - ( this.img.width * this.scale/2), 
    }
}