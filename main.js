function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav")
	mario_coin=loadSound("coin_wav")
	mario_gameover=loadSound("gameover.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas")
	instializeInSetup(mario);

	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("game_console")

	poseNet = ml5.poseNet(video, model_loaded)
	poseNet.on("pose", gotposes)
}

function draw() {
	game()
}
function model_loaded() {
	console.log('model_loaded')
}
function gotposes(results) {
	if (results.length > 0) {
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}
