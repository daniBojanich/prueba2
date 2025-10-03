// scripts/generateLotties.js
const fs = require("fs");
const path = require("path");

// función auxiliar para generar un json
function generateJson(folder, outputFile) {
  const dirPath = path.join(process.cwd(), "public", folder);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".json"));
  const outPath = path.join(process.cwd(), "src/js", outputFile);

  fs.writeFileSync(outPath, JSON.stringify(files, null, 2));
  console.log(`✅ ${outputFile} generado con ${files.length} archivos`);
}

// colecciones
generateJson("img", "lotties.json");
generateJson("img/animacionesWork", "lottiesWork.json");
generateJson("img/art", "lottiesArt.json");
generateJson("img/loaders", "lottiesLoaders.json");
