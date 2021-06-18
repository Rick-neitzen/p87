var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var player_object="";


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_height;
        document.getElementById("current_height").innerHTML = block_image_width;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_height;
        document.getElementById("current_height").innerHTML = block_image_width;
    }

    if(keyPressed == '82')
    {
        new_image('rr1.png');
        console.log("r");
    }
    if(keyPressed == '71')
    {
        new_image('gr.png');
        console.log("g");
    }
    if(keyPressed == '89')
    {
        new_image('yr.png');
        console.log("y");
    }
    if(keyPressed == '80')
    {
        new_image('pr.png');
        console.log("p");
    }
    if(keyPressed == '66')
    {
        new_image('br.png');
        console.log("b");
    }
}