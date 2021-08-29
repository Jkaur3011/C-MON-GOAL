var canvas = new fabric.Canvas("game_canvas"); //canvas added to js

//positions for ball and the hole
ball_y = 0;
ball_x = 0;
hole_y = 440;
hole_x = 790;

//block width and height
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(IMG){
		hole_ob = IMG; 
		hole_ob.scaleToWidth(50); //given width to the hole
		hole_ob.scaleToHeight(50); //given height to the hole
		hole_ob.set({ //set the top and left position
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_ob); //hole added to the canvas now
	})
	new_image(); //function new image called
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(IMG){
		ball_ob = IMG;
		ball_ob.scaleToWidth(50); //given width to the ball
		ball_ob.scaleToHeight(50); //given height to the ball
		ball_ob.set({ //set top and left position
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_ob); //ball added to the canvas
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y)){ //if the position matches
		canvas.remove(ball_ob); //remove the ball
		document.getElementById("Check").innerHTML="Wow, You won!!!!"; //show text of winning
		document.getElementById("game_canvas").style.borderColor ="Pink"; //change canvas border color
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >= 0){
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			canvas.remove(ball_ob);
			new_image();
		}
	}
	
}

