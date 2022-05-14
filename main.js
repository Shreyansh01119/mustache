noseX = 0;
noseY = 0;

function preload(){
    clown_image = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function take_snap(){
    save('Mustache.png');
}
function draw(){
    image(video,0,0,500,500);
    image(clown_image,noseX,noseY,70,50);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y+2;
        console.log("noseX = "+noseX);
        console.log("noseY = "+noseY);
    }
}

