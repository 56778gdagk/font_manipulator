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
    }
}