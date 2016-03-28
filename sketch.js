

var photo;
var uploadButton;
var uploadedImage;

function preload(){

	photo= loadImage("../photos/IMG_5669.jpg");

}

function setup() {

//CreateFileInput();
var uploadButton = createFileInput(imageUploaded)

createCanvas(1400,1200);
image (photo,0,0);
}

function draw() {

// image (photo,0,0);

}

function imageUploaded(file){
  uploadedImage = loadImage(file.data, drawImg);
}

function drawImg(){

  image(uploadedImage,0,0);
}
