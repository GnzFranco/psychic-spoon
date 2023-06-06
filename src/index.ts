import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6595ed,
	width: 650,
	height: 480
});

Assets.add("Clampy", "./clampy.png");
Assets.add("Mega", "./mega1.png");

Assets.load(["Clampy", "Mega"]).then(()=>{

	const pj: Sprite = Sprite.from("Mega");
	//const pj2: Sprite = Sprite.from("Clampy");

	pj.anchor.set(0.5);

	pj.x = app.screen.width /2;
	pj.y = app.screen.height /2;

	console.log ("Hola mundo!", pj.width, pj.height);

	app.stage.addChild(pj);
	//app.stage.addChild(pj2);
});

Assets.load;

