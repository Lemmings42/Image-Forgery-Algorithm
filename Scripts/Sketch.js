// Built using the p5.js library
let paused = true;
let img;
let pauseButton = document.createElement('button');
pauseButton.onclick = "pauseToggle();";
pauseButton.id = "Pause";
pauseButton.type = "button";



function preload(){
  img = loadImage("https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/thecodingtrain_1549464698899._QL80_._SS205_.png");
}

function setup(){
  createCanvas(600, 200);
  background(255, 240, 240);
  stroke(0);
  noFill();
  image(img, 0, 0, 200, 200);
  image(img, 200, 0, 200, 200);
  image(img, 400, 0, 200, 200);
  rect(0, 0, 200, 200);
  rect(200, 0, 200, 200);
  rect(400, 0, 200, 200);
  document.getElementById('body').appendChild(document.createElement("br"));
  document.getElementById('body').appendChild(pauseButton);
  document.getElementById('body').appendChild(htmlSect);
}

function draw(){
  if (!paused){
    console.log(paused);
    pauseButton.innerHTML = "Pause";
    pauseButton.style = "background-color: #f03535";
  }else{
    console.log(paused);
    pauseButton.innerHTML = "Start";
    pauseButton.style = "background-color: #35f035";
  }
}
pauseButton.addEventListener("mousedown", () => {
  paused = !paused;
});
