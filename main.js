nosex = 0;
nosey = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/Zq3Cg3yr/mustache.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, nosex, nosey, 30 , 10);
}

function modelLoaded() {
    console.log("Model loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + nosex);
        console.log("nosey = " + nosey);
    }
}

function take_pic() {
    save('myFilter.jpg');
}
