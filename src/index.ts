import { Application, Assets, BaseTexture, SCALE_MODES } from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';


BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: "#32a84a",
	width: 1920,
	height: 1080
});

window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	const canvas = app.view as HTMLCanvasElement;

	canvas.style.width = gameWidth + "px";
	canvas.style.height = gameHeight + "px";

	canvas.style.marginLeft = marginHorizontal + "px";
	canvas.style.marginRight = marginHorizontal + "px";

	canvas.style.marginTop = marginVertical + "px";
	canvas.style.marginBottom = marginVertical + "px";
});

window.dispatchEvent(new Event("resize"));

Assets.addBundle("myAssets", assets);

Assets.loadBundle(["myAssets"]).then(()=>{
	const myScene = new Scene();
	app.stage.addChild(myScene);
});

Assets.load;