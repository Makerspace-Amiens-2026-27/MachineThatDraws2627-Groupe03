import { beginRecordSvg, endRecordSvg } from "./libraries/p5.plotSvg";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("yellow");
  //beginRecordSvg("file.svg");
  circle(400,400,100); //cercle de rayon 100 au coordonnées 400,400
  //endRecordSvg();
}
