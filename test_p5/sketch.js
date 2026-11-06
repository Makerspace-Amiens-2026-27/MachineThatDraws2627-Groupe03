import { beginRecordSvg, endRecordSvg } from "./libraries/p5.plotSvg";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  beginRecordSvg("file.svg");
  quad(20, 20, 80, 20, 80, 80, 20, 80); //crée un carré pour tester
  endRecordSvg();
}
  