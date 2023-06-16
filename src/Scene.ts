import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane} from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {

    constructor(){
        super();

        //NINE-SLICE PLANE
        //const panel = Sprite.from("Panel");
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            35, 35, 35, 35
        );
        panel.width = 500;
        panel.height = 300;
        panel.scale.set(2);
        panel.position.x = 100;
        panel.position.y = 100;

        this.addChild(panel);
        
        //CONTAINER
        const dinoWithHat: DinoHat = new DinoHat();
        dinoWithHat.scale.set(8);
        dinoWithHat.x = 190;
        dinoWithHat.y = 175;
        this.addChild(dinoWithHat);

        //ANIMACION DINO RUN
        const dinoAnimatedRun: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("DinoMove1"),
                Texture.from("DinoMove2"),
                Texture.from("DinoMove3"),
                Texture.from("DinoMove4")
            ],
            true
        );
        dinoAnimatedRun.play();
        dinoAnimatedRun.animationSpeed = 0.13
        dinoAnimatedRun.scale.set(8);
        dinoAnimatedRun.x = 400;
        dinoAnimatedRun.y = 90;
        this.addChild(dinoAnimatedRun);

        //ANIMACION DINO IDLE
        const dinoAnimatedIdle: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("DinoIdle1"),
                Texture.from("DinoIdle2"),
                Texture.from("DinoIdle3")
            ]
        );
        dinoAnimatedIdle.play();
        dinoAnimatedIdle.scale.set(8);
        dinoAnimatedIdle.x = 250;
        dinoAnimatedIdle.y = 90;
        dinoAnimatedIdle.animationSpeed = 0.07;
        this.addChild(dinoAnimatedIdle);

        //ANIMACION DINO SALTAR
        const dinoAnimatedJump: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("DinoJump1"),
                Texture.from("DinoJump2"),
                Texture.from("DinoJump3"),
                Texture.from("DinoJump4")
            ]
        );
        dinoAnimatedJump.play();
        dinoAnimatedJump.scale.set(8);
        dinoAnimatedJump.x = 525;
        dinoAnimatedJump.y = 105;
        dinoAnimatedJump.animationSpeed = 0.07;
        this.addChild(dinoAnimatedJump);

        // GRAFICOS
        const myGraph: Graphics = new Graphics();
            myGraph.lineStyle({color: 0x222222, width: 6, alpha: 1});
            myGraph.moveTo(0,0);
            myGraph.lineTo(300, 200);
            myGraph.lineTo(300, 40);
            myGraph.lineTo(0,0);

            myGraph.position.set(1920/2, 1080/2);

            this.addChild(myGraph);


        //TEXT
        const myText: Text = new Text("Hello world", {fontSize: 42, fontFamily: "Arial"});
        myText.text = "hola";
        myText.position.set(1000, 500);
        this.addChild(myText);


        



    }
}