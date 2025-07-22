const { resolve } = require('path');
const fs = require('fs');

function JsIncGenerator() {}

JsIncGenerator.prototype.apply = (compiler) => {
  compiler.hooks.afterEmit.tap('JsIncGenerator', (compilation) => {
    const folders = [
      resolve(__dirname, 'dist'),
    ];
    folders.forEach((folder) => {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
    });

    const lottJsPath = resolve(__dirname, 'dist/lott-js.js');
    const lottJsList = [];
    compilation.chunks.forEach((chunk) => {
      chunk.files.forEach((filename) => {
        if (
          !filename.includes('.map') &&
          (filename.includes('bettingCompress') || filename.includes('lottTranslator'))
        ) {
          lottJsList.push(filename);
        }
      });
    });

    fs.writeFileSync(
      lottJsPath,
      `var _lottJsCount = ${lottJsList.length}; function _loadLottJs() {${lottJsList
        .map(
          (filename) =>
            `var script = document.createElement("script");script.src = "/lotto/lott-common/${filename}";script.onload = scriptOnLoad;document.head.appendChild(script);`
        )
        .join('')}} function scriptOnLoad() { _lottJsCount -= 1; if (_lottJsCount === 0) { if (window.onLottJsReady && typeof window.onLottJsReady === "function") { window.onLottJsReady(); }}} _loadLottJs();`
    );

    return true;
  });
};

module.exports = JsIncGenerator;