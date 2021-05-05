class PLATFORM {
    constructor(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.platform = createSprite(x, y, width, height);
        this.platform.addImage("ss", platform1);
        this.platform.scale = scale;
        this.platform.setCollider("rectangle", 0, -100, 200, 50);
        // this.platform.debug = true;
        group.add(this.platform);

    }

    display() {
        drawSprites();
        ninja.collide(this.platform);

    }

}