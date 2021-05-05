class Spell {
    constructor(x, y, vX = 1) {

        this.x = x;
        this.y = y;
        // this.vY = vY;
        this.body = createSprite(x, y, 10, 10);
        this.X = x - ninja.x;
        this.Y = y - ninja.y;
        if (ninja.x < x) {
            this.vX = vX * -1;
        } else {
            this.vX = vX;
        }

        this.vY = (this.vX * this.Y) / this.X;
        this.body.addImage(spellimage);
        this.body.scale = 0.4;
        this.body.setVelocity(this.vX, this.vY);
        this.body.lifetime = 300;
        spellgroup.add(this.body);


    }
    display() {
        if (this.body.isTouching(group)) {
            this.body.destroy();
        }

    }
}