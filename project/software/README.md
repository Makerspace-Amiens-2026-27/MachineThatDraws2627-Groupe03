# Software

Application navigateur qui génère les dessins à tracer et les exporte en **SVG**
pour la machine.

- **Langage :** JavaScript ([p5.js](https://p5js.org/reference/), mode global)
- **Dépendances** (incluses dans `test_p5/libraries/`, aucune connexion internet requise) :
  - `p5.min.js` — p5.js v1.10.0
  - `p5.plotSvg.js` — [p5.plotSvg](https://github.com/golanlevin/p5.plotSvg) v0.3.0,
    export SVG pensé pour les pen-plotters

## Installer et lancer

1. Ouvrir le dossier `test_p5/` dans VS Code.
2. Lancer `index.html` avec l'extension **Live Server** (ou l'extension **p5.vscode**),
   ou simplement ouvrir `index.html` dans un navigateur.
3. Appuyer sur **S** pour télécharger le dessin en `dessin.svg`.

## Fonctionnement

- Le dessin est fait dans `draw()` de [`test_p5/sketch.js`](test_p5/sketch.js).
- Les fonctions de p5.plotSvg (`beginRecordSvg`, `endRecordSvg`, `setSvg…`) sont
  **globales** : ne pas utiliser d'`import`.
- Échelle : `setSvgResolutionDPCM(10)` → 1 px du canvas = 1 mm sur le papier.
- Utiliser `noFill()` : la machine ne trace que des contours. Le `background()`
  n'apparaît qu'à l'écran, il n'est pas exporté.

## Reste à faire

- Convertir le SVG en commandes pour la machine (format à définir avec le firmware).
- Envoyer les commandes à l'ESP32 (Web Serial ou Wi-Fi).
- Limiter le dessin à la zone atteignable par le bras / cinématique inverse.
- Intégrer la vectorisation d'images (imagetracer.js).
