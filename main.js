LeftWristX = 0;
RightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,400);
    canvas.position(570,130);

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function modeLoaded()
{
    console.log("PoseNet os initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);

    }
}

function draw()
{
    background('#6C91C2');
    textSize(LeftWristX, RightWristX);
    fill('yellow');
    text('Agaz',50,50);
}