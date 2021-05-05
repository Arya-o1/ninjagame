class Enemy1 {
    constructor(x, y, scale, hp) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.hp = hp;

        this.enemy = createSprite(x, y, width, height);
        this.enemy.addAnimation("enemy1Idle", enemy1Idle)
        this.enemy.scale = scale;
        this.enemy.setCollider("circle", 0, -30, 130);
        // this.enemy.debug = true;
        this.vision = createSprite(this.enemy.x, this.enemy.y - 5, 600., 150);
        this.vision.visible = false;
        this.enemyHP = createSprite(this.enemy.x, this.enemy.y + 30, hp, 5);
        this.enemyHP.shapeColor = "red";
        // this.vision.debug = true;
        // this.spell = createSprite(this.enemy.x,this.enemy.y,10,10);
        // this.z = this.enemy.x;s

    }

    display() {
        if (ninjaSpellGroup.isTouching(this.enemy)) {
            ninjaSpellGroup.destroyEach();
            this.enemyHP.width -= 49;
            if (this.enemyHP.width <= 2) {
                this.enemy.remove();
                this.enemyHP.remove();
                this.vision.remove();
            }
        }

    }



}