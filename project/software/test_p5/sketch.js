// Les fonctions de p5.plotSvg (beginRecordSvg, endRecordSvg, setSvg...) sont
// globales : la librairie est chargée par index.html, pas besoin d'import.

function setup() {
  createCanvas(400, 400);
  noLoop(); // dessin statique : draw() n'est appelé qu'une fois

  // Échelle du SVG : 1 px du canvas = 1 mm sur le papier
  setSvgResolutionDPCM(10);
  setSvgDocumentSize(width, height);
}

function draw() {
  background("yellow"); // fond affiché à l'écran uniquement, non exporté
  noFill(); // un plotter ne trace que des contours
  circle(200, 200, 100); // centre (200, 200), diamètre 100
}

// Touche S : exporte le dessin en SVG
function keyPressed() {
  if (key === "s" || key === "S") {
    beginRecordSvg("dessin.svg");
    draw();
    endRecordSvg();
  }
}
