import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane} from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {

    constructor(){
        super();
        
        //CONTAINER
        const dinoWithHat: DinoHat = new DinoHat();
        dinoWithHat.scale.set(1);
        dinoWithHat.x = 200;
        dinoWithHat.y = 300;
        this.addChild(dinoWithHat);

        //ANIMACION DINO
        const dinoAnimated: AnimatedSprite = new AnimatedSprite(
            [
                
                Texture.from("DinoMove2"),
                Texture.from("DinoMove3"),
                Texture.from("DinoMove4")
            ],
            true
        );
        dinoAnimated.play();
        dinoAnimated.animationSpeed = 0.15
        this.addChild(dinoAnimated);

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



    }
}