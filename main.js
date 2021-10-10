noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(660, 660);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded(){
    console.log('The mission has begun!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightwristX =  results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX =" + leftwristX +" rightwristX =" + rightwristX +"difference =" + difference)


    }
}
 function draw(){
     background("yellow");

     document.getElementById("square_side").innerHTML = "The Width And Height Of The Square is =" + difference +"px"
     fill("turqoise");
     stroke("turqoise");
     square(noseX, noseY, difference);
 }