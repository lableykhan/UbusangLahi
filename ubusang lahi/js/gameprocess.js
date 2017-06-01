mambobola.prototype = {
    init:function(){

    },
		 preload:function() {


			game.scale.scaleMode =Phaser.ScaleManager.SHOW_ALL;

		    game.scale.pageAlignHorizontally = true;
		    game.scale.pageAlignVertically = true;


			
			
			
			
			

			game.load.image('bg','img/puno2.png');
			game.load.image('ground','img/plat.png');
			game.load.image('grounds','img/flat.png');
			game.load.image('groundss','img/ladd.png');
			game.load.image('groundse','img/ladd.png');
			game.load.image('fire','img/bato.png');
			game.load.image('title','img/harap.png',800,600);
			game.load.image('btn', 'img/playbutton.png');

			game.load.image('btn_paused', 'img/pause2.png');
			game.load.image('btn_pause', 'img/pause.png');

			game.load.spritesheet('dude','img/gwapo.png',32,48);
			game.load.spritesheet('enemy','img/violet.png',32,48);
			game.load.spritesheet('enemy1','img/red.png',32,48);
			game.load.spritesheet('enemy2','img/pink.png',32,48);
			game.load.spritesheet('enemy3','img/gwapo2.png',32,48);
			game.load.spritesheet('enemy4','img/red.png',32,48);
			game.load.spritesheet('enemy5','img/gwapo2.png',32,48);
			game.load.spritesheet('enemy6','img/violet.png',32,48);
			game.load.spritesheet('enemy7','img/pink.png',32,48);
			game.load.spritesheet('enemy8','img/gwapo2.png',32,48);
			game.load.spritesheet('enemy9','img/violet.png',32,48);
			game.load.spritesheet('enemy10','img/pink.png',32,48);
			game.load.spritesheet('enemy11','img/red.png',32,48);
			game.load.spritesheet("button","img/btn-ups.png",100,100);
			game.load.spritesheet("button1","img/btn-left.png",100,100);
			game.load.spritesheet("button2","img/btn-right.png",100,100);

			game.load.audio("bgmusic","audio/epic.mp3");


		},

		 create:function() {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.add.sprite(0,0, 'bg');
			//game.world.setBounds(0,0,boundsRight,0);
			
			button = game.add.button(650,450,"button",proseso.lundagNaruto);
		   	button1 = game.add.button(100,450,"button1",proseso.kananNaruto);
		   	button2 = game.add.button(250,445,"button2",proseso.kaliwaNaruto);

		   	 pause_label = game.add.button(380,10, 'btn_pause');
				pause_label.inputEnabled = true;
				pause_label.events.onInputUp.add(function (){
					game.paused = true;
					menu = game.add.sprite(w/2,h/2,'btn_paused');
					menu.anchor.setTo(0.5,0.5);
					choiseLabel = game.add.text (w/2,h-240, 'Click unpause button to continue',{fill: 'white'});
					choiseLabel.anchor.setTo(0.5,0.5);
					 });
				game.input.onDown.add(unpause,self);
				function unpause(event){
				if(game.paused){
					proseso.menu.destroy();
					choiseLabel.destroy();
					
					game.paused = false;
				}
				}

		    bgmusic = game.add.audio("bgmusic");
			bgmusic.play('',0,1,true);

			lad = game.add.group();
			lad.enableBody = true;

			var ledge = lad.create(268,140,'groundss'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(268,-88,'groundss'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(268,360,'groundss'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(635,140,'groundse'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(635,-88,'groundse'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(635,360,'groundse'); // 1 pinaka baba
			ledge.body.immovable = true;
			var ledge = lad.create(450,295,'groundse'); // 1 pinaka baba
			ledge.body.immovable = true;


			platforms = game.add.group();
			platforms.enableBody = true;



			var ground = platforms.create(-90,game.world.height -40,'ground');
			ground.scale.setTo(3.7,1);
			ground.body.immovable = true;

			var ledge = platforms.create(0,415,'grounds'); // 1 pinaka baba
			ledge.body.immovable = true;
			
			ledge = platforms.create(290,270,'grounds'); // 2
			ledge.body.immovable = true;


			ledge = platforms.create(0,140,'grounds'); // 3
			ledge.body.immovable = true;


			ledge = platforms.create(520,415,'grounds'); // katapat ng 1
			ledge.body.immovable = true;
			
			
			
			ledge = platforms.create(540,130,'grounds'); // katapat ng 3
			ledge.body.immovable = true;
			
			
			Fire = game.add.group();
			Fire.enableBody = true;
			proseso.createFires(500);
			proseso.time(1000,duration);



			player = game.add.sprite(32,game.world.height -150,'dude');
			
			
			game.physics.arcade.enable(player);
			game.physics.arcade.enable(platforms);
			
			player.body.bounce.y = 0.2;
			player.body.gravity.y = 800;
			player.body.collideWorldBounds = true;
			
			player.animations.add('left',[0,1,2,3],10,true);
			player.animations.add('right',[5,6,7,8],10,true);
			player.body.velocity.x =0;
			
			enemy = game.add.sprite(0,90,"enemy");
			enemy.animations.add('left', [0,1,2,3], 10, true);
			enemy.animations.add('right', [5,6,7,8], 10, true);
			enemy.scale.x=1;
			enemy.scale.y=1;
			game.physics.arcade.enable(enemy);
			enemy.body.collideWorldBounds = true;

			enemy1 = game.add.sprite(268,190,"enemy1");
			enemy1.animations.add('left', [0,1,2,3], 10, true);
			enemy1.animations.add('right', [5,6,7,8], 10, true);
			enemy1.scale.x=1;
			enemy1.scale.y=1;
			game.physics.arcade.enable(enemy1);
			enemy1.body.collideWorldBounds = true;

			enemy2 = game.add.sprite(0,90,"enemy2");
			enemy2.animations.add('left', [0,1,2,3], 10, true);
			enemy2.animations.add('right', [5,6,7,8], 10, true);
			enemy2.scale.x=1;
			enemy2.scale.y=1;
			game.physics.arcade.enable(enemy2);
			enemy2.body.collideWorldBounds = true;

			enemy3 = game.add.sprite(539,80,"enemy3");
			enemy3.animations.add('left', [0,1,2,3], 10, true);
			enemy3.animations.add('right', [5,6,7,8], 10, true);
			enemy3.scale.x=1;
			enemy3.scale.y=1;
			game.physics.arcade.enable(enemy3);
			enemy3.body.collideWorldBounds = true;

			enemy4 = game.add.sprite(800,80,"enemy4");
			enemy4.animations.add('left', [0,1,2,3], 10, true);
			enemy4.animations.add('right', [5,6,7,8], 10, true);
			enemy4.scale.x=1;
			enemy4.scale.y=1;
			game.physics.arcade.enable(enemy4);
			enemy4.body.collideWorldBounds = true;

			enemy5 = game.add.sprite(800,370,"enemy5");
			enemy5.animations.add('left', [0,1,2,3], 10, true);
			enemy5.animations.add('right', [5,6,7,8], 10, true);
			enemy5.scale.x=1;
			enemy5.scale.y=1;
			game.physics.arcade.enable(enemy5);
			enemy5.body.collideWorldBounds = true;

			enemy6 = game.add.sprite(635,370,"enemy6");
			enemy6.animations.add('left', [0,1,2,3], 10, true);
			enemy6.animations.add('right', [5,6,7,8], 10, true);
			enemy6.scale.x=1;
			enemy6.scale.y=1;
			game.physics.arcade.enable(enemy6);
			enemy6.body.collideWorldBounds = true;

			enemy7 = game.add.sprite(635,370,"enemy7");
			enemy7.animations.add('left', [0,1,2,3], 10, true);
			enemy7.animations.add('right', [5,6,7,8], 10, true);
			enemy7.scale.x=1;
			enemy7.scale.y=1;
			game.physics.arcade.enable(enemy7);
			enemy7.body.collideWorldBounds = true;

			enemy8 = game.add.sprite(268,190,"enemy8");
			enemy8.animations.add('left', [0,1,2,3], 10, true);
			enemy8.animations.add('right', [5,6,7,8], 10, true);
			enemy8.scale.x=1;
			enemy8.scale.y=1;
			game.physics.arcade.enable(enemy8);
			enemy8.body.collideWorldBounds = true;
			
			enemy9 = game.add.sprite(800,370,"enemy9");
			enemy9.animations.add('left', [0,1,2,3], 10, true);
			enemy9.animations.add('right', [5,6,7,8], 10, true);
			enemy9.scale.x=1;
			enemy9.scale.y=1;
			game.physics.arcade.enable(enemy9);
			enemy9.body.collideWorldBounds = true;

			enemy10 = game.add.sprite(0,370,"enemy10");
			enemy10.animations.add('left', [0,1,2,3], 10, true);
			enemy10.animations.add('right', [5,6,7,8], 10, true);
			enemy10.scale.x=1;
			enemy10.scale.y=1;
			game.physics.arcade.enable(enemy10);
			enemy10.body.collideWorldBounds = true;

			enemy11 = game.add.sprite(560,225,"enemy11");
			enemy11.animations.add('left', [0,1,2,3], 10, true);
			enemy11.animations.add('right', [5,6,7,8], 10, true);
			enemy11.scale.x=1;
			enemy11.scale.y=1;
			game.physics.arcade.enable(enemy11);
			enemy11.body.collideWorldBounds = true;

			keyboard = game.input.keyboard.createCursorKeys();

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemyMoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 0.6,proseso.enemyMoveLeft);
			
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy1MoveDown);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy1MoveUp);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy2MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy2MoveLeft);
			
			timer=game.time.events.loop(Phaser.Timer.SECOND * 0.6,proseso.enemy3MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy3MoveLeft);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy4MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy4MoveLeft);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy5MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy5MoveLeft);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy6MoveDown);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy6MoveUp);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy7MoveDown);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy7MoveUp);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy8MoveDown);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy8MoveUp);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy9MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy9MoveLeft);
			
			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy10MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 2,proseso.enemy10MoveLeft);

			timer=game.time.events.loop(Phaser.Timer.SECOND * 0.5,proseso.enemy11MoveRight);
			timer=game.time.events.loop(Phaser.Timer.SECOND * 1,proseso.enemy11MoveLeft);
			
			bestScoreText = game.add.text(570,20,"bestScore: "+ proseso.getScore(),{fill:'blue'});
			scoreText = game.add.text(50,20,"SCORE: 0",{fill:'blue'});
			lifeText = game.add.text(50,50,"LIFE: 3",{fill:'red'});
			gameOverText = game.add.text(300,240,"",{fill:'red'});
			timeText = game.add.text(570,50,"TIME: 30",{fill:'red'});

			stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '30px Arial', fill: 'black' });
		    stateText.anchor.setTo(0.5, 0.5);
			game.scale.refresh();



			game.camera.follow(player,Phaser.Camera.FOLLOW_TOPDOWN);
			scoreText.fixedToCamera = true;
			bestScoreText.fixedToCamera = true;
			scoreText.fixedToCamera = true;
			bestScoreText.fixedToCamera = true;
			
			titlepage = game.add.sprite(0,0, "title");
			startButton = game.add.button(game.world.centerX - 60, 300, 'btn', proseso.actionOnClick, this, 2, 1, 0);

		},

		 update:function() {
			game.physics.arcade.collide(player,platforms,0,0);
			//game.physics.arcade.collide(player,plat,0,0);
			//game.physics.arcade.collide(player,plat2,0,0);
			game.physics.arcade.overlap(player,Fire,proseso.killFire);
			game.physics.arcade.overlap(player,enemy,proseso.killenemy);
			game.physics.arcade.overlap(player,enemy1,proseso.killenemy1);
			game.physics.arcade.overlap(player,enemy2,proseso.killenemy2);
			game.physics.arcade.overlap(player,enemy3,proseso.killenemy3);
			game.physics.arcade.overlap(player,enemy4,proseso.killenemy4);
			game.physics.arcade.overlap(player,enemy5,proseso.killenemy5);
			game.physics.arcade.overlap(player,enemy6,proseso.killenemy6);
			game.physics.arcade.overlap(player,enemy7,proseso.killenemy7);
			game.physics.arcade.overlap(player,enemy8,proseso.killenemy8);
			game.physics.arcade.overlap(player,enemy9,proseso.killenemy9);
			game.physics.arcade.overlap(player,enemy10,proseso.killenemy10);
			game.physics.arcade.overlap(player,enemy11,proseso.killenemy11);





			var x= 0;
		    if(keyboard.left.isDown){
		         x++;
		        player.animations.play('left');
		        player.body.velocity.x = -200;
		        // bg.frame = 0;
		    }
		    else if(keyboard.right.isDown){
		         x++;
		        // bg.frame = 1;
		        player.animations.play('right');
		        player.body.velocity.x = 200;
		    }
		    else{
		        player.body.velocity.x = 0;
		        player.animations.stop();
		    }

		    if(keyboard.up.isDown && player.body.touching.down){
		        player.body.velocity.y = -500;
		    }
				
		}

}
game.state.add("Game",mambobola,true);