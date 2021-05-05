var x1 = 0
var x2 = 1200;
var a = 1

var gamestate = "play";

var ninja, ninjaRunningright, ninjaRunningleft, ninjaIdleright, ninjaIdleleft,
    ninjaJump, jumpright, jumpleft, die, stand, slideright, slideleft, ninjaattack;
var ground;
var platform1, plat, spikeimg;

var plat1, plat2, plat3, plat4, plat5, plat6, plat7;
var group;

var jumpLimit;


var enemy1, enemy1Attack, enemy2;

let sld = false;
let atk = false;


var spell1;

var spellx = 0, spelly = 0;

var sp1, sp2, sp3, sp4, sp5;

var spellgroup, ninjaSpellGroup, spikeGroup;

var spellimage;

var ninjaFacing = "right";

var playerHealthbar, ninjahp = 200;

var flower, flowerimg;

var win, winimg;

var ninjaspellimg;


// load images here
function preload() {
    bgImg = loadImage("Background.png");

    platform1 = loadImage("Tile (15).png");

    spikeimg = loadImage("Spike.png")



    ninjaRunningright = loadAnimation("ninja png/Run__000.png", "ninja png/Run__001.png", "ninja png/Run__002.png",
        "ninja png/Run__003.png", "ninja png/Run__004.png", "ninja png/Run__005.png",
        "ninja png/Run__006.png", "ninja png/Run__007.png", "ninja png/Run__008.png", "ninja png/Run__009.png")

    ninjaRunningleft = loadAnimation("ninja png/Run__000(1).png", "ninja png/Run__001(1).png", "ninja png/Run__002(1).png",
        "ninja png/Run__003(1).png", "ninja png/Run__004(1).png", "ninja png/Run__005(1).png",
        "ninja png/Run__006(1).png", "ninja png/Run__007(1).png", "ninja png/Run__008(1).png", "ninja png/Run__009(1).png")

    ninjaIdleright = loadAnimation("ninja png/Idle__000.png", "ninja png/Idle__001.png", "ninja png/Idle__002.png", "ninja png/Idle__003.png"
        , "ninja png/Idle__004.png", "ninja png/Idle__005.png", "ninja png/Idle__006.png"
        , "ninja png/Idle__007.png", "ninja png/Idle__008.png", "ninja png/Idle__009.png");

    ninjaIdleleft = loadAnimation("ninja png/Idle__000(1).png", "ninja png/Idle__001(1).png", "ninja png/Idle__002(1).png", "ninja png/Idle__003(1).png"
        , "ninja png/Idle__004(1).png", "ninja png/Idle__005(1).png", "ninja png/Idle__006(1).png"
        , "ninja png/Idle__007(1).png", "ninja png/Idle__008(1).png", "ninja png/Idle__009(1).png");

    // ninjaJump = loadAnimation("ninja png/Jump__000.png", "ninja png/Jump__001.png", "ninja png/Jump__002.png", "ninja png/Jump__003.png",
    //                             "ninja png/Jump__004.png","ninja png/Jump__005.png","ninja png/Jump__006.png","ninja png/Jump__007.png",
    //                             "ninja png/Jump__008.png","ninja png/Jump__009.png");


    // ninjaattack = loadAnimation("ninja png/Attack__000.png","ninja png/Attack__001.png","ninja png/Attack__002.png",
    //                             "ninja png/Attack__003.png","ninja png/Attack__004.png","ninja png/Attack__005.png","ninja png/Attack__006.png",
    //                             "ninja png/Attack__007.png","ninja png/Attack__008.png","ninja png/Attack__009.png");

    jumpright = loadImage("ninja png/Jump__002.png");

    jumpleft = loadImage("ninja png/Jump__002(1).png");


    stand = loadImage("ninja png/Idle__001.png");

    slideright = loadImage("ninja png/Slide__000.png");

    slideleft = loadImage("ninja png/Slide__000(1).png");
    
    ninjaspellimg = loadImage("spell.png");
    

    // enemy1Attack = loadAnimation("enemy1attack/Wraith_02_Attack_000.png","enemy1attack/Wraith_02_Attack_001.png" , "enemy1attack/Wraith_02_Attack_002.png" ,
    //                 "enemy1attack/Wraith_02_Attack_003.png","enemy1attack/Wraith_02_Attack_004.png" , "enemy1attack/Wraith_02_Attack_005.png",
    //                 "enemy1attack/Wraith_02_Attack_006.png","enemy1attack/Wraith_02_Attack_007.png" , "enemy1attack/Wraith_02_Attack_008.png",
    //                 "enemy1attack/Wraith_02_Attack_009.png" ,"enemy1attack/Wraith_02_Attack_010.png" , "enemy1attack/Wraith_02_Attack_011.png");


    enemy1Idle = loadAnimation("enemy1idle/Wraith_02_Idle_000(1).png", "enemy1idle/Wraith_02_Idle_001(1).png", "enemy1idle/Wraith_02_Idle_002(1).png", "enemy1idle/Wraith_02_Idle_003(1).png",
        "enemy1idle/Wraith_02_Idle_004(1).png", "enemy1idle/Wraith_02_Idle_005(1).png", "enemy1idle/Wraith_02_Idle_006(1).png", "enemy1idle/Wraith_02_Idle_007(1).png",
        "enemy1idle/Wraith_02_Idle_008(1).png", "enemy1idle/Wraith_02_Idle_009(1).png", "enemy1idle/Wraith_02_Idle_010(1).png", "enemy1idle/Wraith_02_Idle_010(1).png");

    spellimage = loadImage("Spells Effect.png");
    flowerimg = loadImage("flower.png");
    die = loadImage("ninja png/Dead__009.png");

    winimg = loadImage("vaccine.png");

}


function setup() {
    // createCanvas(windowWidth,windowHeight-10);
    createCanvas(1200, 600);

    ninja = createSprite(150, 510, 50, 50);
    ninja.addImage("stand", stand);
    ninja.addAnimation("idleright", ninjaIdleright);
    ninja.addAnimation("idleleft", ninjaIdleleft);
    ninja.addAnimation("runright", ninjaRunningright);
    ninja.addAnimation("runleft", ninjaRunningleft);
    ninja.addImage("die", die);
    // ninja.addAnimation("jump",ninjaJump);
    // ninja.addAnimation("attack",ninjaattack);
    ninja.addImage("jumpright", jumpright);
    ninja.addImage("jumpleft", jumpleft);
    ninja.addImage("slideright", slideright);
    ninja.addImage("slideleft", slideleft);
    // ninja.debug = true;

    jumpLimit = createSprite(0, 0, 40, 90);
    jumpLimit.visible = false;

    ninja.scale = 0.2;
    frameRate(60);

    ground = createSprite(300, 560, 2400, 10);
    ground.visible = false;

    group = new Group();

    plat1 = new PLATFORM(350, 550, 0.5);
    plat2 = new PLATFORM(700, 490, 0.5);
    plat3 = new PLATFORM(850, 400, 0.5);
    plat4 = new PLATFORM(1450, 530, 0.5);
    plat5 = new PLATFORM(1650, 400, 0.5);
    plat6 = new PLATFORM(1760, 400, 0.5);
    plat7 = new PLATFORM(1100, 520, 0.5)

    enemy1 = new Enemy1(1080, 400, 0.20, 100);
    enemy2 = new Enemy1(1650, 440, 0.20, 100);


    spikeGroup = new Group();

    sp1 = new Spikes(470, 530);
    sp2 = new Spikes(1100, 530);
    sp3 = new Spikes(1300, 530);
    sp4 = new Spikes(1700, 258, 180);
    sp5 = new Spikes(1750, 258, 180);
    sp6 = new Spikes(1820, 300, 90)



    spellgroup = new Group();
    ninjaSpellGroup = new Group();

    playerHealthbar = createSprite(ninja.x, ninja.y - 50, ninjahp, 5);
    playerHealthbar.shapeColor = "red";

    flower = createSprite(1730, ground.y - 10, 10, 10);
    flower.addImage(flowerimg);
    flower.scale = 0.1;

    win = createSprite(1780, 320, 10, 10);
    win.addImage(winimg);
    win.scale = 0.1;

}

function draw() {
    background(rgb(118, 147, 179));

    image(bgImg, x1, 0, width, height);
    image(bgImg, x2, 0, width, height);
    ground.x = ninja.x;

    text("GET THE VACCINE TO WIN THE GAME", 100, 230);
    text("USE 'A' AND 'D' TO MOVE LEFT AND RIGHT", 100, 250);
    text("USE 'W' TO JUMP AND 'S' TO SLIDE ", 100, 270);
    text("USE 'J' TO ATTACK",100,290)
    ninja.velocityY += 0.8;


    if (gamestate == "play") {
        playerHealthbar.x = camera.x;
        playerHealthbar.y = camera.y + 170;
        playerHealthbar.width = ninjahp;
        // background scroller ** }

        if (keyDown("d")) {
            ninjaFacing = "right";
            // console.log(ninjaFacing);
        } else if (keyDown("a")) {
            ninjaFacing = "left";
        }
        if (keyDown("a") && ninja.x > 150) {
            ninja.x -= 4;
            ninjaFacing = "left";
            ninja.changeAnimation("runleft");
        } else if (keyDown("d") && ninja.x < 2000) {
            ninja.x += 4;
            ninjaFacing = "right";
            ninja.changeAnimation("runright");
        } else {
            if (ninjaFacing == "right") {
                ninja.changeAnimation("idleright");
            } else { ninja.changeAnimation("idleleft") }
            ninja.velocityX = 0;
        }

        if (keyDown("w") && (jumpLimit.isTouching(ground) || jumpLimit.isTouching(group))) {
            ninja.velocityY -= 8;
        } else if (keyWentDown("s") && ninja.x < 2000 && ninja.x > 150 && (jumpLimit.isTouching(ground) || jumpLimit.isTouching(group))) {
            sld = true;
            setTimeout(() => { sld = false }, 500);
        }

        jumpLimit.x = ninja.x;
        jumpLimit.y = ninja.y + 5;

        if (jumpLimit.isTouching(group) == false && jumpLimit.isTouching(ground) == false) {
            if (ninjaFacing == "right") {
                ninja.changeAnimation("jumpright");
            } else { ninja.changeAnimation("jumpleft") }
        }



        if (sld) {
            if (ninjaFacing == "right") {
                ninja.changeAnimation("slideright");
                ninja.x += 4;
            } else {
                ninja.changeAnimation("slideleft")
                ninja.x -= 4
            }
        }

        if (keyWentDown("j")) {
            spell = new ninjaSpell(3);
        }

        if (typeof spell != "undefined") {
            spell.display();
        }

        // frameRate = 120;
        // console.log("high " + frameRate)
        // gravity>>>>>>>
       //jeremdfd

        // console.log(ninja.velocityY);

        // set colliders here >>>
        ninja.collide(ground);
        plat1.display();
        plat2.display();
        plat3.display();
        plat4.display();
        plat5.display();
        plat6.display();
        plat7.display();


        enemy1.display();
        enemy2.display();

        sp1.display();
        sp2.display();



        //    spell1.display();

        //    <<<<<<<<<<<<<<

        // setting camera position
        camera.position.x = ninja.x + 250;
        camera.position.y = ninja.y - 110;
        camera.zoom = 1.5;


        // var spell1 = new Spell(enemy1.x,enemy1.y);

        if (enemy1.vision.isTouching(ninja)) {
            if (frameCount % 50 == 0) {
                spell = new Spell(enemy1.x, enemy1.y, 2);
                spell.display();
            }
        }
        if (enemy2.vision.isTouching(ninja)) {
            if (frameCount % 60 == 0) {
                spell = new Spell(enemy2.x, enemy2.y, 2);
                spell.display();
            }
        }

        if (spellgroup.isTouching(group)) {
            spellgroup.destroyEach();
        }
        if (ninjaSpellGroup.isTouching(group)) {
            ninjaSpellGroup.destroyEach();
        }

        if (spellgroup.isTouching(ninja)) {
            spellgroup.destroyEach();
            ninjahp -= 19.5;
            // console.log(ninjahp);
        }
        if (ninja.isTouching(spikeGroup)) {
            ninjahp -= 19.5;
            ninja.velocityY = -15;
            console.log(ninja)
        }


        if (spellgroup.isTouching(ninjaSpellGroup)) {
            spellgroup.destroyEach();
            ninjaSpellGroup.destroyEach();

        }

        if (ninjahp <= 0) {
            ninja.changeAnimation("die");
            gamestate = "dead";
        }

        if (ninja.isTouching(flower)) {
            ninja.scale = 0.18
        }

        if (ninja.isTouching(win)) {
            gamestate = "won";

        }


    }
    if (gamestate === "won") {
        fill("red");
        textSize(15);
        text("YOU RECEIVED VACCINE AND WON ", 1700, 200);

    } else if (gamestate === "dead") {
        fill("red");
        textSize(15);
        text("YOU LOSE ", 1700, 200);
    }

    ninja.collide(ground);
    console.log(gamestate);


    drawSprites();



    fill("blue");
    text("PLAYER HP - " + ninjahp + "/200", playerHealthbar.x - 55, playerHealthbar.y + 15)

}



class Spikes {
    constructor(x, y, r = 0) {
        this.x = x;
        this.y = y;

        this.body = createSprite(x, y, 10, 10);
        this.body.addImage(spikeimg);
        this.body.scale = 0.2;
        spikeGroup.add(this.body);
        this.body.rotation = r;
        this.body.setCollider("rectangle", 0, 50, 200, 150)
        // this.body.debug = true;

    }

    display() {

    }
}

class ninjaSpell {
    constructor(vX) {
        this.vX = vX;
        if (ninjaFacing == "left") {
            this.vX = vX * -1;
        }
        var a = 1;

        this.body = createSprite(ninja.x, ninja.y, 10, 10);
        this.body.addImage(ninjaspellimg);
        this.body.scale = 0.4;
        this.body.velocityX = this.vX;
        this.body.lifetime = 300;

        ninjaSpellGroup.add(this.body);
        // console.log(this.body.velocityX)
    }
    display() {
        this.body.rotation = 0 + a;
        a += 10;
    }
}

