import { Container, Texture, NineSlicePlane, AnimatedSprite } from "pixi.js";
import { KuroMove } from "./KuroMove";
import { Background } from "./Background";

export class Scene extends Container {

    constructor(){
        super();

        //BACKGROUND
        const background: Background = new Background();
        background.width = 1920;
        background.height = 1080;
        this.addChild(background);


        //NINE-SLICE PLANE
        //const panel = Sprite.from("Panel");
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            35, 35, 35, 35
        );
        panel.width = 200;
        panel.height = 100;
        panel.scale.set(2);
        panel.position.x = 100;
        panel.position.y = 100;

        this.addChild(panel);
        
        //MENU
        const menu = new NineSlicePlane(
            Texture.from("Menu"),
            35, 35, 35, 35
        );
        menu.width = 370;
        menu.height = 600;
        menu.scale.set(1);
        menu.position.x = 1300;
        menu.position.y = 100;
        this.addChild(menu);

        //BOTON START
        const btstart: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("BtStart1"),
                Texture.from("BtStart2"),
                Texture.from("BtStart3"),
            ]
        );
        btstart.play();
        btstart.animationSpeed = 0.07;
        btstart.position.set(1415, 300);
        btstart.scale.set(2.2)
        this.addChild(btstart);


        //KURO MOVE SOLO EL LLAMADO, SE HACE TODO EN LA CLASE KUROMOVE.TS
        const kuroMove: KuroMove = new KuroMove();
        this.addChild(kuroMove);











        // GRAFICOS
        /* const myGraph: Graphics = new Graphics();
            myGraph.lineStyle({color: 0x222222, width: 6, alpha: 1});
            myGraph.moveTo(0,0);
            myGraph.lineTo(300, 200);
            myGraph.lineTo(300, 40);
            myGraph.lineTo(0,0);

            myGraph.position.set(1920/2, 1080/2);

            this.addChild(myGraph); */


        //TEXT
        /* const myText: Text = new Text("Hello world", {fontSize: 42, fontFamily: "Arial"});
        myText.text = "hola";
        myText.position.set(1000, 500);
        this.addChild(myText); */

    }
}