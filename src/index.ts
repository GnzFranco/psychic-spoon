import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

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
Assets.add("Hat", "./hat.png");

Assets.load(["Clampy", "Mega", "Dino", "Hat"]).then(()=>{

	
	const hat: Sprite = Sprite.from("Hat");
	/* hat.anchor.set(0.5); */
	hat.position.set(250, 50);
	hat.scale.set(0.15, 0.15);
	hat.angle=-15;


	const dino: Sprite = Sprite.from("Dino");
	/* dino.anchor.set(0.5);
	dino.x = app.screen.width /3;
	dino.y = app.screen.height /2;
	dino.scale.x = 1;
	dino.scale.y = 1; */


	const dinoWithHat: Container = new Container();

	dinoWithHat.addChild(dino);
	dinoWithHat.addChild(hat);

	dinoWithHat.scale.set(1);
	dinoWithHat.x = 200;
	dinoWithHat.y = 300;

	console.log(hat.toGlobal(new Point()));		//gorro decime donde queda tu origen
	console.log(hat.parent.toGlobal(hat.position));   //padre del gorro, decime la posicion en global



	app.stage.addChild(dinoWithHat);
});

Assets.load;