import { AnimatedSprite, Container, Texture } from "pixi.js";


export class KuroMove extends Container {
    constructor(){
        super();

        const kuroAnimatedMove: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("KuroMove1"),
                Texture.from("KuroMove2"),
                Texture.from("KuroMove3"),
                Texture.from("KuroMove4"),
                Texture.from("KuroMove5"),
                Texture.from("KuroMove6"),
            ]
        );
        kuroAnimatedMove.play();
        kuroAnimatedMove.scale.set(8);
        kuroAnimatedMove.x = 670;
        kuroAnimatedMove.y = 90;
        kuroAnimatedMove.animationSpeed = 0.2;
        this.addChild(kuroAnimatedMove);
    }
}