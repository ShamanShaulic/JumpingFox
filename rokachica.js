var app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

//OBJECTS AND CHARACTERS
var fox,frog,opossum,eagle,dead,bush0,bush1,bush2,bush3,house,tree,shroom,skull,rock,rock2,diamond,cherry,platformLong,platformShort;

// ANIMATIONS
var foxWalk = [];
var foxSquat = [];
var foxJump = [];
var foxIdle = [];
var foxHurt = [];
var foxClimb = [];
var eagleArray = [];
var frogIdle = [];
var frogJump = [];
var objects = [];
var deathArray = [];
var movements = [];
var opossumArray = [];
var skyArray = [];
var tile = [];
var diamondArray = [];
var platforms = [];
var cherryArray = [];

// MEASUREMENTS
var framerate = 0.15;
var foxSize = 2;
var opossumSpeed = 15;
var eagleSpeed = 2;
var frogSpeed = 15;
var playerSpeed = 2;
var playerJump = 20;
var playerJumpVelocity = 10;

// STATES
var hasJumped = false;
var hasSquated = false;
var isHurt = false;
var hit;
var isDead = false;
var jumpedOn = false;
var isKicked = false;
var isCaught = false;
var aboveClouds = false;
var up = false;
var down = false;
var onSide = false;
var disabled;

// TEXT
var style, scoreText;


PIXI.loader
	.add('assetica/atlas.json')
	.add('assetica/atlas-props.json')
	.load(assetLoaded);


function assetLoaded() {



	// CHARACTER DRAWING
	// CHARACTER DRAWING
	// CHARACTER DRAWING


	for (var i = 1; i <= 5; i++) {
		diamondArray.push(PIXI.Texture.fromFrame("gem/gem-" + i));
	}

	for (var i = 1; i <= 6; i++) {
		deathArray.push(PIXI.Texture.fromFrame("enemy-death/enemy-death-" + i));
	}

	for (var i = 1; i <= 4; i++) {
		eagleArray.push(PIXI.Texture.fromFrame("eagle/eagle-attack-" + i));
	}

	for (var i = 1; i <= 2; i++) {
		frogJump.push(PIXI.Texture.fromFrame("frog/jump/frog-jump-" + i));
	}

	for (var i = 1; i <= 4; i++) {
		frogIdle.push(PIXI.Texture.fromFrame("frog/idle/frog-idle-" + i));
	}

	for (var i = 1; i <= 6; i++) {
		opossumArray.push(PIXI.Texture.fromFrame("opossum/opossum-" + i));
	}

	for (var i = 1; i <= 6; i++) {
		foxWalk.push(PIXI.Texture.fromFrame("player/run/player-run-" + i));
	}

	for (var i = 1; i <= 2; i++) {
		foxSquat.push(PIXI.Texture.fromFrame('player/crouch/player-crouch-' + i));
	}

	for (var i = 1; i <= 2; i++) {
		foxJump.push(PIXI.Texture.fromFrame('player/jump/player-jump-' + i));
	}

	for (var i = 1; i <= 4; i++) {
		foxIdle.push(PIXI.Texture.fromFrame('player/idle/player-idle-' + i));
	}

	for (var i = 1; i <= 2; i++) {
		foxHurt.push(PIXI.Texture.fromFrame('player/hurt/player-hurt-' + i));
	}

	for (var i = 1; i <= 3; i++) {
		foxClimb.push(PIXI.Texture.fromFrame('player/climb/player-climb-' + i));
	}


	fox = new PIXI.extras.AnimatedSprite(foxWalk);
	fox.x = app.screen.width / 3;
	fox.y = app.screen.height * 5 / 6 - fox.height;
	fox.anchor.set(0.5);
	fox.animationSpeed = framerate;
	fox.scale.set(foxSize);
	fox.play();

	frog = new PIXI.extras.AnimatedSprite(frogIdle);
	frog.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	frog.y = app.screen.height * 5 / 6 - frog.height;
	frog.anchor.set(0.5);
	frog.animationSpeed = framerate;
	frog.scale.set(foxSize);
	frog.play();

	opossum = new PIXI.extras.AnimatedSprite(opossumArray);
	opossum.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
   	opossum.y = app.screen.height * 5 / 6 - opossum.height;
   	opossum.anchor.set(0.5);
	opossum.animationSpeed = framerate;
	opossum.scale.set(foxSize);
	opossum.play();

	eagle = new PIXI.extras.AnimatedSprite(eagleArray);
	eagle.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	eagle.y = app.screen.height * 5 / 6 - eagle.height;
	eagle.anchor.set(0.5);
	eagle.animationSpeed = framerate;
	eagle.scale.set(foxSize);
	eagle.play();

	diamond = new PIXI.extras.AnimatedSprite(diamondArray);
	diamond.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	diamond.y = app.screen.height * 5 / 6 - diamond.height * 2;
	diamond.anchor.set(0.5);
	diamond.animationSpeed = framerate * 1.5;
	diamond.scale.set(foxSize);
	diamond.play();



	// OBJECT DRAWING
	// OBJECT DRAWING
	// OBJECT DRAWING



	bush0 = PIXI.Sprite.fromImage('bush');
	bush0.anchor.set(0,1);
	bush0.x = app.screen.width - 200;
	bush0.y = app.screen.height * 5 / 6;

	bush1 = PIXI.Sprite.fromImage('bush');
	bush1.anchor.set(0,1);
	bush1.x = app.screen.width - 400;
	bush1.y = app.screen.height * 5 / 6;

	bush2 = PIXI.Sprite.fromImage('bush');
	bush2.anchor.set(0,1);
	bush2.x = app.screen.width - 500;
	bush2.y = app.screen.height * 5 / 6;

	bush3 = PIXI.Sprite.fromImage('bush');
	bush3.anchor.set(0,1);
	bush3.x = app.screen.width;
	bush3.y = app.screen.height * 5 / 6;

	house = PIXI.Sprite.fromImage('house');
	house.anchor.set(0,1);
	house.x = app.screen.width + 220;
	house.y = app.screen.height * 5 / 6;
	house.scale.set(1.5);

	tree = PIXI.Sprite.fromImage('tree');
	tree.anchor.set(0,1);
	tree.x = app.screen.width + 80;
	tree.y = app.screen.height * 5 / 6;
	tree.scale.set(2);

	shroom = PIXI.Sprite.fromImage('shrooms');
	shroom.anchor.set(0,1);
	shroom.x = app.screen.width - 150;
	shroom.y = app.screen.height * 5/6;
	shroom.scale.set(2)

	rock = PIXI.Sprite.fromImage('rock');
	rock.anchor.set(0,1);
	rock.x = app.screen.width - 50;
	rock.y = app.screen.height * 5/6;
	rock.scale.set(3);

	rock2 = PIXI.Sprite.fromImage('rock');
	rock2.anchor.set(0,1);
	rock2.x = app.screen.width - 450;
	rock2.y = app.screen.height * 5/6;
	rock.scale.set(2);

	skull = PIXI.Sprite.fromImage('skulls');
	skull.anchor.set(0,1);
	skull.x = app.screen.width - 650;
	skull.y = app.screen.height * 5/6;
	skull.scale.set(3);

	style = new PIXI.TextStyle({  
		fontFamily: 'Arial',
   		fontSize: 50,
    	fontStyle: 'italic',
    	fontWeight: 'bold',
  		fill: ['#cc00cc','#ffffff'],
  		dropShadow: true,
    	dropShadowColor: '#000000',
   	 	dropShadowBlur: 4,
    	dropShadowAngle: Math.PI / 6,
    	dropShadowDistance: 6
	});
	scoreText = new PIXI.Text('0', style);
	scoreText.x = 50;
	scoreText.y = 50;



	platformLong = PIXI.Sprite.fromImage('platform-long');
	platformLong.anchor.set(0.5);
	platformLong.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	platformLong.y = Math.min(app.screen.height * 5 / 6 - platformLong.height * 4,
		Math.floor(Math.random() * app.screen.height));
	platformLong.scale.set(3);

	platformShort = PIXI.Sprite.fromImage('small-platform');
	platformShort.anchor.set(0.5);
	platformShort.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	platformShort.y = Math.min(app.screen.height * 5 / 6 - platformShort.height * 4,
		Math.floor(Math.random() * app.screen.height));
	platformShort.scale.set(2);

	platforms = [platformShort,platformLong];
	// platforms = [platformLong, platformShort];

	for (var i = 0; i < 4; i++) {
	skyArray[i] = PIXI.Sprite.fromImage('assetica/back.png');
	skyArray[i].anchor.set(0);
	skyArray[i].scale.set(2.09);
	skyArray[i].x = app.screen.width * i;
	// skyArray[i].y = app.screen.y;
	app.stage.addChild(skyArray[i])
	}

	for (var i = 0; i < 9; i++) {
    tile[i] = PIXI.Sprite.fromImage('block-big');
	tile[i].anchor.set(0);
	tile[i].scale.set(3.17);
	tile[i].x = tile[i].width * i;
	tile[i].y = app.screen.height - tile[i].height;
	app.stage.addChild(tile[i])
	}

	objects = [frog,opossum,eagle,bush0,bush1,bush2,bush3,house,tree,shroom,skull,rock,rock2,diamond];

    // app.stage.addChild(tilingSprite);
	app.stage.addChild(rock2);
	app.stage.addChild(bush0);
	app.stage.addChild(bush1);
	app.stage.addChild(rock);
	app.stage.addChild(bush2);
	app.stage.addChild(skull);
	app.stage.addChild(bush3);
	app.stage.addChild(shroom);
	app.stage.addChild(house);
	app.stage.addChild(tree);
	app.stage.addChild(scoreText);
	app.stage.addChild(platformLong);
	app.stage.addChild(platformShort);
	app.stage.addChild(diamond);
	app.stage.addChild(opossum);
	app.stage.addChild(eagle);
	app.stage.addChild(fox);
	// app.stage.addChild(frog);


	startGame()

}



	//START GAME
	//START GAME
	//START GAME



function startGame() {

		disabled = false;
		hasKickedHead = false;
		up = false;
		down = false;
		aboveClouds = false;
		isHurt = false;
		fox.xSpeed = 0;
		fox.ySpeed = 0;
		fox_score = 0;
		opossum.isDead = false;
		opossum.xSpeed = Math.floor(Math.random() * -10);
		eagle.isDead = false;
		eagle.xSpeed = -2;
		eagle.ySpeed = 1;
		// frog.xSpeed = 0;

		app.ticker.add(function(delta){
			objectMoving()
			characterMoving()
			collisionDetection()
			updateScore()
		});
	}



	// OBJECT MOVEMENT
	// OBJECT MOVEMENT
	// OBJECT MOVEMENT



function objectMoving() {

	// tilingSprite.tilePosition.x -= 1;
	for (var i = 0; i < tile.length; i++) {
		tile[i].position.x -= 1;
			if (tile[i].position.x + tile[i].width < app.screen.x) {
				tile[i].position.x = app.screen.width 
			}
		}
	for (var i = 0; i < skyArray.length; i++) {
		skyArray[i].position.x -= 0.5;
			if (skyArray[i].position.x + skyArray[i].width < app.screen.x) {
				skyArray[i].position.x = app.screen.width 
			}
		}
	
	for (var i = 0; i < objects.length; i++) {
			if (objects[i].position.x + objects[i].width < app.screen.x) {
				objects[i].position.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
			}
		objects[i].position.x -= 1;
		}

	for (var i = 0; i < platforms.length; i++) {
			if (platforms[i].position.x + platforms[i].width < app.screen.x) {
				platforms[i].position.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
				platforms[i].position.y = Math.min(app.screen.height * 5 / 6 - platforms[i].height * 4,
					Math.floor(Math.random() * app.screen.height))
				// platforms[i].position.y = app.screen.height * 5 / 6 - platforms[i].height / 2;
			}
		platforms[i].position.x -= 1;
	}
}



	// CHARACTER MOVEMENT
	// CHARACTER MOVEMENT
	// CHARACTER MOVEMENT



function characterMoving() {



	// FOX MOVEMENT
	// FOX MOVEMENT
	// FOX MOVEMENT



	if (!isHurt || !isCaught) {
		fox.x += fox.xSpeed;
		fox.x = Math.min(fox.x, app.screen.width - fox.width / 2 + 10);
		fox.x = Math.max(fox.x, fox.width / 2 - 10);

		if (hasJumped) {
			fox.ySpeed += 1;
			fox.y += fox.ySpeed;
			up = false;
		}
		if (fox.y >= app.screen.height * 5/6 - (fox.height /2) && hasJumped) {
			fox.ySpeed = 0;
			hasJumped = false;
			fox.y = app.screen.height * 5/6 - (fox.height /2);
			fox.textures = foxWalk;
			fox.play()
			fox.loop = true;
			down = false;
			hasKickedHead = false;
		}

		if (hasKickedHead) {
			fox.ySpeed += 0.5;
			fox.y += fox.ySpeed;
		}
	}




	// OPOSSUM MOVEMENT
	// OPOSSUM MOVEMENT
	// OPOSSUM MOVEMENT



	opossum.x += opossum.xSpeed
	if (opossum.x - opossum.width/2 <= app.screen.x) {
		opossum.scale.x = -foxSize
		opossum.xSpeed = Math.floor(Math.random() * 10);
	} else if (opossum.x + opossum.width/2 >= app.screen.width) {
		opossum.scale.x = foxSize
		opossum.xSpeed = Math.floor(Math.random() * -10);
	}



	// EAGLE MOVEMENT
	// EAGLE MOVEMENT
	// EAGLE MOVEMENT



	if (!isCaught) {
	eagle.x += eagle.xSpeed;
	eagle.y -= eagle.ySpeed;

	if (eagle.y <= app.screen.height * 2 / 3 - eagle.height/2){
		 eagle.ySpeed = -1;
	} else if (eagle.y >= app.screen.height * 5 / 6 - eagle.height/2) {
		eagle.ySpeed = 1;
	}

	if (eagle.x - eagle.width/2 <= app.screen.x) {
		eagle.scale.x = -foxSize;
		eagle.xSpeed = eagleSpeed + 1;
	} else if (eagle.x + eagle.width/2 >= app.screen.width) {
		eagle.scale.x = foxSize;
		eagle.xSpeed = -eagleSpeed;
	}
	} else {
		if (!aboveClouds) {
		eagle.ySpeed = -4;
		eagle.y += eagle.ySpeed;
		} 
	}
}



	// COLLISIONS
	// COLLISIONS
	// COLLISIONS



function hasCollided(player, enemy) {

	let vx,vy,combinedHalfWidths,combinedHalfHeights;
	hit = false;

	player.centerX = player.x;
	player.centerY	= player.y;
	enemy.centerX = enemy.x;
	enemy.centerY	= enemy.y;

	player.halfWidth = player.width / 2;
  	player.halfHeight = player.height / 2;
  	enemy.halfWidth = enemy.width / 2;
  	enemy.halfHeight = enemy.height / 2;

  	vx = player.centerX - enemy.centerX;
  	vy = player.centerY - enemy.centerY;

  	combinedHalfWidths = player.halfWidth + enemy.halfWidth;
 	combinedHalfHeights = player.halfHeight + enemy.halfHeight;

 	 if (Math.abs(vx) < combinedHalfWidths) {
    	if (Math.abs(vy) < combinedHalfHeights) {
    			 hit = true;
    		} else {
    			hit = false;
    	}
  		} else {
  			hit = false
 	 }
 	 return hit;
	};



function collisionDetection() {



		// PLATFORM COLLISION
		// PLATFORM COLLISION
		// PLATFORM COLLISION



for (var i = 0; i < platforms.length; i++) {
	if(!isHurt || !isCaught){


			// FOX & PLATFORM

		if(hasCollided(fox,platforms[i])) { 
				// while (hasCollided(fox,platforms[i])) {

				// fox.x += -Math.sign(fox.xSpeed);
				// fox.y += -Math.sign(fox.ySpeed);

				//ABOVE
				if(!up) {
				if(fox.y <= platforms[i].y - platforms[i].height/2 && fox.y < platforms[i].y) {
					up = true
					fox.ySpeed = 0;
					hasJumped = false;
					fox.y = platforms[i].y - platforms[i].height - fox.height/13;
					fox.textures = foxWalk;
					fox.play()
					fox.loop = true;
					} 
				} else {
					if (fox.x >= platforms[i].x + platforms[i].width/2 || fox.x <= platforms[i].x - platforms[i].width/2) {
						hasJumped = true;
					}
				}
				// UNDER
				if(!down){
				if(fox.y >= platforms[i].y + platforms[i].height/2 && fox.y > platforms[i].y ){
					fox.ySpeed = 0;
					down = true;
					fox.y = platforms[i].y + platforms[i].height/2;
					hasKickedHead = true;
					}
				}
				// ON LEFT
				if(!down && !up){
				if(fox.x >= platforms[i].x - platforms[i].width/2 - fox.width/6 && fox.x < platforms[i].x) {
					fox.x = platforms[i].x - platforms[i].width/2 - fox.width/6; 
					}
				// ON RIGHT
				if(fox.x <= platforms[i].x + platforms[i].width/2 + fox.width/6 && fox.x > platforms[i].x){
					fox.x = platforms[i].x + platforms[i].width/2 + fox.width/6;
					}
				}
	    } else if (!hasCollided(fox, platforms[i]) && fox.y == platforms[i].y - platforms[i].height - fox.height/13) {
	    			hasJumped = true;
	    }
	}

			// OPOSSUM & PLATFORM

	if (hasCollided(opossum, platforms[i])){
		if(opossum.x >= platforms[i].x - platforms[i].width/2 - opossum.width/6 && opossum.x < platforms[i].x){
			opossum.scale.x = foxSize
			opossum.xSpeed = Math.floor(Math.random() * -10);
		}
		if(opossum.x <= platforms[i].x + platforms[i].width/2 + opossum.width/6 && opossum.x > platforms[i].x){
			opossum.scale.x = -foxSize
			opossum.xSpeed = Math.floor(Math.random() * 10);
		}
	}

			// EAGLE & PLATFORM

	if(hasCollided(eagle,platforms[i])){
		if(eagle.y <= platforms[i].y - platforms[i].height/2 && eagle.y < platforms[i].y) {
			 eagle.ySpeed = 1;
		}
		if(eagle.y >= platforms[i].y + platforms[i].height/2 && eagle.y > platforms[i].y) {
			 eagle.ySpeed = -1;
		}
		if(eagle.x >= platforms[i].x - platforms[i].width/2 - eagle.width/6 && eagle.x < platforms[i].x) {
			eagle.scale.x = -foxSize;
			eagle.xSpeed = eagleSpeed + 1;
		}
		if(eagle.x <= platforms[i].x + platforms[i].width/2 + eagle.width/6 && eagle.x > platforms[i].x){
			eagle.scale.x = foxSize;
			eagle.xSpeed = -eagleSpeed;
		}
	}

	// if (app.screen.x + opossum.width <= platforms[i].x - platforms[i].width/2 || 
	// 	app.screen.width - opossum.width >= platforms[i].x + platforms[i].width/2) {
	// 		opossum.textures = deathArray;
	// 		opossum.play()
	// 		opossum.loop = false;
	// 		opossum.xSpeed -= opossum.xSpeed;
	// 		opossum.onComplete = respawnOpossum;
	// 		opossum.isDead = true;
	// }
}
  
			// FOX & DIAMOND COLLISION

if(!isHurt) {
	if(hasCollided(fox,diamond)){
		fox_score++
		diamond.position.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
		// diamond.position.y = 
	} 
}

			// FOX & OPOSSUM COLLISION

if (!isHurt) {
	if (hasCollided(fox,opossum)) {
		if (fox.ySpeed > 0) {
			if (!opossum.isDead) {
			opossum.textures = deathArray;
			opossum.play()
			opossum.loop = false;
			opossum.xSpeed -= opossum.xSpeed;
			opossum.onComplete = respawnOpossum;
			opossum.isDead = true;

			fox.textures = foxJump;
 			fox.ySpeed = -(playerJump/2);
 			fox.play()
 			fox.loop = true;
 			hasJumped = true;
			}
		} 
		else if (!opossum.isDead) {
			fox.textures = foxHurt;
			fox.play()
			fox.ySpeed = -(playerJump / 2);
			fox.y += fox.ySpeed;
			isHurt = true;
			fox.loop = true;
			}
		}
	}

		 	// FOX & EAGLE COLLISION

if (!isHurt && !aboveClouds) {
	if (hasCollided(fox,eagle)) {
		if (fox.ySpeed > 2) {
			if (!eagle.isDead) {
			eagle.textures = deathArray;
			eagle.play()
			eagle.loop = false;
			eagle.xSpeed -= eagle.xSpeed;
			eagle.onComplete = respawnEagle;
			eagle.isDead = true;

			fox.textures = foxJump;
 			fox.ySpeed = -(playerJump/2);
 			fox.play()
 			fox.loop = true;
 			hasJumped = true;
			}
		} 
		else if (!eagle.isDead) {
			fox.textures = foxHurt;
			fox.play()
			fox.loop = true;
			isCaught = true;
			}
		}
	}
		death()
}



	// DEATH VARIATIONS
	// DEATH VARIATIONS
	// DEATH VARIATIONS



function death(){


	if(isCaught && !aboveClouds) {
		fox.x = eagle.x;
		fox.y = eagle.y + eagle.height/2;
		fox.ySpeed = eagle.ySpeed;
		fox.xSpeed = eagle.xSpeed;

		// throw the dirtbag

		if (eagle.y <= app.screen.y) {
			aboveClouds = true;
		}
	} 

	if (aboveClouds) {
		fox.ySpeed += 1;
		fox.y += fox.ySpeed;
	}

	if (isHurt) {
		disabled = true;
		fox.ySpeed += 1;
		fox.y += fox.ySpeed;
	}
}

// IF OPOSSUM DEAD

var respawnOpossum = function() {
	opossum.isDead = false;
	opossum.textures = opossumArray;
	opossum.position.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	opossum.play();
	opossum.loop = true;
	opossum.onComplete = null;
}

// IF EAGLE DEAD

var respawnEagle = function() {
	eagle.isDead = false;
	eagle.textures = eagleArray;
	eagle.position.x = app.screen.width + Math.floor(Math.random() * app.screen.width);
	eagle.play();
	eagle.loop = true;
	eagle.onComplete = null;
}


// SCORE UPDATE

function updateScore() {
	scoreText.text = fox_score;
}


// DIRECTIONS
// DIRECTIONS
// DIRECTIONS


if(!disabled){
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
}


function onKeyDown(key) {
	
 // RIGHT Key is 39

 if (key.keyCode === 39) {
 	if (!hasSquated) {
 	fox.xSpeed = playerSpeed
 	fox.scale.x = foxSize;
 	} else if(!hasSquated && !moveRight) {
 	fox.xSpeed -= 3;
 	}
 }
 // LEFT Key is 37
 if (key.keyCode === 37) {
 	if (!hasSquated) {
 	fox.scale.x = -foxSize;
 	fox.xSpeed = -playerSpeed * 2;
 	}
}
// Down arrow is 40
if (key.keyCode === 40) {
	if (fox.textures != foxSquat){
	fox.textures = foxSquat;
	fox.play()
	hasSquated = true;
	}	
}
// Up arrow is 87
 if (key.keyCode === 38) {
 	if (hasJumped === false) {
 		fox.textures = foxJump;
 		fox.ySpeed = -playerJump;
 		fox.play()
 		fox.loop = false;
 		hasJumped = true
 	}
  }
}


function onKeyUp(key) {
	
 // RIGHT Key is 39
 if (key.keyCode === 39 && fox.xSpeed > 0) {
 	fox.xSpeed = 0;
 }
 // LEFT Key is 37
 if (key.keyCode === 37 && fox.xSpeed < 0) {
 	fox.scale.x = foxSize;
 	fox.xSpeed = 0;
 }
// Down arrow is 40
if (key.keyCode === 40) {
	fox.textures = foxWalk;
 	fox.play()
 	fox.xSpeed = 0;
 	hasSquated = false;
}
// Up arrow is 87
if (key.keyCode === 38) {
 	
	}
}




