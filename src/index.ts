import { Application, Assets, Sprite } from 'pixi.js'

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



Assets.add("Clampy", "./clampy.png");
Assets.add("Mega", "./mega1.png");
Assets.add("Dino", "./dino1.png");

Assets.load(["Clampy", "Mega", "Dino"]).then(()=>{

	const pj: Sprite = Sprite.from("Dino");
	//const pj2: Sprite = Sprite.from("Clampy");

	pj.anchor.set(0.5);

	pj.x = app.screen.width /3;
	pj.y = app.screen.height /2;

	console.log ("Hola mundo!", pj.width, pj.height);

	app.stage.addChild(pj);
	//app.stage.addChild(pj2);
});

Assets.load;

