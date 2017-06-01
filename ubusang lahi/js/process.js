var proseso = function(){
    "use strict";
      return {
             actionOnClick:function(){
            	titlepage.visible =! startButton.visible;
            	startButton.destroy();
            	button.frame = 1;

                },

             createFires:function(time){
                setInterval(function(){
                    var size = Math.random();
                    Fires = Fire.create(100+ Math.random()*800,-100,"fire");
                    Fires.body.gravity.y = 100;
                    Fires.scale.x = size*4;
                    Fires.scale.y = size*4;
                    // diamonds.body.collideWorldBounds = true;
                    Fires.body.bounce.y = 0.7;
                },time)
            },

             enemyMoveRight:function() {
                
            			enemy.body.velocity.x = 320;
                        enemy.animations.play('right');

                 },
            enemyMoveLeft :function() {
                
            			enemy.body.velocity.x = -320;
                        enemy.animations.play('left');

                 },

             enemy1MoveDown:function() {
                
            		enemy1.body.velocity.y = -320;
            		enemy1.animations.play('down');

                 },
             enemy1MoveUp:function() {
                
            		enemy1.body.velocity.y =320;
            		enemy1.animations.play('up');

                 },

             enemy2MoveRight:function() {
                
            			enemy2.body.velocity.x = -320;
                        enemy.animations.play('right');

                 },
             enemy2MoveLeft:function() {
                
            			enemy2.body.velocity.x = 320;
                        enemy2.animations.play('left');

                 },
            enemy3MoveRight:function () {
                
            			enemy3.body.velocity.x = 320;
                        enemy3.animations.play('right');

                 },
            enemy3MoveLeft :function() {
                
            			enemy3.body.velocity.x = -320;
                        enemy3.animations.play('left');

                 },

            enemy4MoveRight:function () {
                
            			enemy4.body.velocity.x = -200;
                        enemy4.animations.play('right');

                 },
             enemy4MoveLeft:function() {
                
            			enemy4.body.velocity.x = 200;
                        enemy4.animations.play('left');

                 },
             enemy5MoveRight:function() {
                
            			enemy5.body.velocity.x = 250;
                        enemy5.animations.play('right');

                 },
            enemy5MoveLeft :function() {
                
            			enemy5.body.velocity.x = -250;
                        enemy5.animations.play('left');

                 },
             enemy6MoveDown:function() {
                
            		enemy6.body.velocity.y = -320;
            		enemy6.animations.play('down');

                 },
             enemy6MoveUp:function() {
                
            		enemy6.body.velocity.y =320;
            		enemy6.animations.play('up');

                 },
             enemy7MoveDown:function() {
                
            		enemy7.body.velocity.y = -500;
            		enemy7.animations.play('down');

                 },
            enemy7MoveUp :function() {
                
            		enemy7.body.velocity.y =500;
            		enemy7.animations.play('up');

                 },
            enemy8MoveDown :function() {
                
            		enemy8.body.velocity.y = -500;
            		enemy8.animations.play('down');

                 },
             enemy8MoveUp:function() {
                
            		enemy8.body.velocity.y =500;
            		enemy8.animations.play('up');

                 },
            enemy9MoveRight :function() {
                
            			enemy9.body.velocity.x = 200;
                        enemy9.animations.play('right');

                 },
            enemy9MoveLeft  :function () {
                
            			enemy9.body.velocity.x = -200;
                        enemy9.animations.play('left');

                 },

            enemy10MoveRight:function() {
                
            			enemy10.body.velocity.x = -300;
                        enemy10.animations.play('right');

                 },
            enemy10MoveLeft :function() {
                
            			enemy10.body.velocity.x = 300;
                        enemy10.animations.play('left');

                 },
            enemy11MoveRight:function () {
                
            			enemy11.body.velocity.x = -320;
                        enemy11.animations.play('right');

                 },
             enemy11MoveLeft:function() {
                
            			enemy11.body.velocity.x = 320;
                        enemy11.animations.play('left');

                },

            getScore:function(){
                return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:localStorage.getItem("gameData");
            },
            saveScore:function(score){
                localStorage.setItem("gameData",score);
            },

            lundagNaruto:function(){
                button.frame = 1;
                if(player.body.touching.down){

                    player.body.velocity.y = -500;
                }

                setTimeout(function(){
                    button.frame = 0;
                },300)
            },


            kananNaruto:function(){
               button1.frame = 1;
                //	if(keyboard.left.isDown){
               		player.body.velocity.x = -2500;
               		player.animations.add('left',[0,1,2,3,4],10,true);
               	//	}
                setTimeout(function(){
                	
                	player.animations.play('left');

                    button1.frame = 0;
                   },300)
            },


            kaliwaNaruto:function(){
                button2.frame = 1;
                //	if(keyboard.right.isDown){
                	player.animations.add('right',[5,6,7,8],10,true);
               		player.body.velocity.x = 2500;
               	//	}
                setTimeout(function(){
            		player.animations.play('right');

                    button2.frame = 0;
                   },100)
            },



            killFire:function(player,Fire){
              	 life--;
                lifeText.text = "LIFE: "+life;
                if(life>0){
                	 Fire.kill();
                }
                else{
                	gameOverText.text = "GAME OVER!!";
                	stateText.text="DOUBLE TAP \n    to restart";
                	game._paused = true; 
                   /*	restartButton = game.add.button(371,150,"restart",restartB,this,1,0,1);
                    function restartB(){
                        window.location.href=window.location.href;
            		}*/
                    player.kill();
                    game.input.onTap.addOnce(proseso.restart,this)  

                }
                // if(retrieve()<=score){
                //     saveScore(score);        
                // }
            },

            restart:function (){
                window.location.href=window.location.href;
                stateText.visible = false;
            },
            time:function(time,duration){
                setInterval(function(){

                    if(duration<=0){ 
                    	gameOverText.text = "GAME OVER";
                		game._paused = true;
                		stateText.text="DOUBLE TAP \n    to restart";
            	    	game._paused = true;
                        bgmusic.stop(); 
            	       	player.kill();
            	        game.input.onTap.addOnce(proseso.restart,this)             
                        
                    }
                    else{
                        if(lifeText._text != "LIFE: 0"){
                            duration--;
                        }
                        timeText.text = "TIME: "+duration;  
                      
                    
                  
                    }
                },time);

            },

            killenemy:function(player,enemy){
                score = score + 1;
                scoreText.text = "SCORE:"+ score;
                enemy.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },

            killenemy1:function(player,enemy1){
                score = score + 1;
                scoreText.text = "SCORE:"+ score;
                enemy1.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy2 :function(player,enemy2){
                score = score + 5;
                scoreText.text = "SCORE:"+ score;
                enemy2.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy3:function (player,enemy3){
                score = score + 10;
                scoreText.text = "SCORE:"+ score;
                enemy3.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy4:function(player,enemy4){
                score = score + 10;
                scoreText.text = "SCORE:"+ score;
                enemy4.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
             killenemy5 :function(player,enemy5){
                score = score + 5;
                scoreText.text = "SCORE:"+ score;
                enemy5.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy6  :function(player,enemy6){
                score = score + 2;
                scoreText.text = "SCORE:"+ score;
                enemy6.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy7:function(player,enemy7){
                score = score + 15;
                scoreText.text = "SCORE:"+ score;
                enemy7.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy8 :function(player,enemy8){
                score = score + 10;
                scoreText.text = "SCORE:"+ score;
                enemy8.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
            killenemy9:function (player,enemy9){
                score = score + 1;
                scoreText.text = "SCORE:"+ score;
                enemy9.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },

            killenemy10:function(player,enemy10){
                score = score + 5;
                scoreText.text = "SCORE:"+ score;
                enemy10.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            },
             killenemy11:function(player,enemy11){
                score = score + 3;
                scoreText.text = "SCORE:"+ score;
                enemy11.kill();
                
            	
                if(proseso.getScore()<=score){
                    proseso.saveScore(score);
                    bestScoreText.text = "bestscore: "+score;
                }
            }
 }
}();