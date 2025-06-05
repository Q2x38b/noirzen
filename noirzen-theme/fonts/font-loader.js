const vscode = require('vscode');
const path = require('path');

function activate(context) {
    const fontPath = path.join(context.extensionPath, 'fonts');
    
    const fontFaces = [
        `@font-face {
            font-family: 'JetBrains Mono Bundled';
            src: url('${fontPath}/JetBrainsMono-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
        }`,
        `@font-face {
            font-family: 'JetBrains Mono Bundled';
            src: url('${fontPath}/JetBrainsMono-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
        }`,
        `@font-face {
            font-family: 'JetBrains Mono Bundled';
            src: url('${fontPath}/JetBrainsMono-Italic.woff2') format('woff2');
            font-weight: 400;
            font-style: italic;
        }`
    ];

    const style = document.createElement('style');
    style.textContent = fontFaces.join('\n');
    document.head.appendChild(style);
}

module.exports = { activate };