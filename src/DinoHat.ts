import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container {

    constructor() {
        super();

        //const hat: Sprite = Sprite.from("Hat");
        /* hat.position.set(250, 50);
        hat.scale.set(0.15, 0.15);
        hat.angle = -15; */

        /* const dino: Sprite = Sprite.from("DinoIdle1");
        dino.anchor.set(0.5); */

        const dino1: Sprite = Sprite.from("DinoMove1");
        dino1.anchor.set(0.5);

        

        /* this.addChild(dino); */
        this.addChild(dino1);
        
        //this.addChild(hat);
    }
}