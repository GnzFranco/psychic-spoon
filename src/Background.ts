import { Container, Sprite } from "pixi.js";

export class Background extends Container{
    constructor(){
        super();

        const back1: Sprite = Sprite.from("Back1");
        const back2: Sprite = Sprite.from("Back2");
        const back3: Sprite = Sprite.from("Back3");

        this.addChild(back1);
        this.addChild(back2);
        this.addChild(back3);
    }
}