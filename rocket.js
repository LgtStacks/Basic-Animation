function rocket(game,startX, startY, velocityX, velocityY) {
	var rocketArr = [];
	assetToArray("./img/rocket/Hit", 9, rocketArr);
	this.animation = new arrAnimation(rocketArr, .05, true, 3);
    this.speed = velocityX;
	this.ySpeed = velocityY;
    this.ctx = game.ctx;
	
    Entity.call(this, game, startX, startY);
}

rocket.prototype = new Entity();
rocket.prototype.constructor = rocket;

rocket.prototype.update = function () {
    if (this.x > 750){
		this.removeFromWorld = true;
		this.game.addEntity(new explosion(this.game,this.x, this.y));
	}
	if (this.x < 0){
		this.removeFromWorld = true;
		this.game.addEntity(new explosion(this.game,this.x, this.y));
	}
	if (this.y < 0){
		this.removeFromWorld = true;
		this.game.addEntity(new explosion(this.game,this.x, this.y));
	}
	if (this.y > 660){
		this.removeFromWorld = true;
		this.game.addEntity(new explosion(this.game,this.x, this.y));
	}
	this.x += this.game.clockTick * this.speed;
	this.y += this.game.clockTick * this.ySpeed;
    Entity.prototype.update.call(this);
}

rocket.prototype.draw = function () {
		this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
		Entity.prototype.draw.call(this);
}