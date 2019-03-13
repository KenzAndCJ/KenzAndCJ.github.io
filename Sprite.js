class Sprite
{
  constructor(x, y, w, h, color)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = 400;
  }


  display()
  {
    push();

      fill(this.color);
      rect(this.x, this.y, this.w, this.h, 20);

    pop();
  }

  move(x, y)
  {
      this.x += (x * this.speed)/frameRate();
      this.y += (y * this.speed)/frameRate();
  }


  isColliding(x, y, w, h)
  {
    if (this.x + this.w >= x &&    
        this.x <= x + w &&    
        this.y + this.h >= y &&    
        this.y <= y + h) {    
          return true;
    }
    return false;
  }
  

}


