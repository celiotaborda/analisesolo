const fs = require('fs');
const path = require('path');

// Extensão da imagem (mesma para todas as camadas)
const imageExtent = [497235.869610, 6712247.784580, 506519.854760, 6721476.695520];

// Função para gerar o conteúdo do arquivo JS
function generateLayerJS(attribute) {
    return `var lyr_${attribute} = new ol.layer.Image({
    title: '${attribute}',
    opacity: 1,
    source: new ol.source.ImageStatic({
        url: "./layers/${attribute}.png",
        attributions: ' ',
        projection: 'EPSG:31981',
        alwaysInRange: true,
        imageExtent: [${imageExtent.join(', ')}]
    })
});`;
}

// Lista de atributos de fertilidade
const attributes = [
    'SMP',
    'pH',
    'MO',
    'P',
    'K',
    'Ca',
    'Mg',
    'Al',
    'Mn',
    'Cu',
    'B',
    'S',
    'Zn',
    'Argila'
];

// Gerar arquivos para cada atributo
attributes.forEach(attribute => {
    const content = generateLayerJS(attribute);
    const filename = `layers/${attribute}.js`;
    
    fs.writeFileSync(filename, content);
    console.log(`Arquivo gerado: ${filename}`);
}); 