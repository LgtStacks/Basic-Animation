downloadImage("./img/ninja/Ninja_Idle", 10);
downloadImage("./img/ninja/Ninja_Left", 10);
downloadImage("./img/explosion/explosion", 32);
downloadImage("./img/ninja/Ninja_Throw", 10);
downloadImage("./img/rocket/rocket", 15);
downloadImage("./img/ninja/Ninja_Run", 10);
AM.queueDownload("./img/background0.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
	var ninjaIdle = [];
	assetToArray("./img/ninja/Ninja_Idle", 10, ninjaIdle);
	var ninjaRunLeft = [];
	assetToArray("./img/ninja/Ninja_Left", 10, ninjaRunLeft);
	
	var tninjaArr = [];
	assetToArray("./img/ninja/Ninja_Throw", 10, tninjaArr);
	var ninjaRun = [];
	assetToArray("./img/ninja/Ninja_Run", 10, ninjaRun);
	gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background0.png")));
	gameEngine.addEntity(new ninja(gameEngine,ninjaIdle, ninjaRun, ninjaRunLeft, tninjaArr));
    console.log("All Done!");
});