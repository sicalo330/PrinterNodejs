const PDFDocument = require('pdfkit');
const fs = require('fs');
const printer = require('pdf-to-printer');

export const print = (req,res) => {
    res.json("Conexión exitosa")
    const doc = new PDFDocument();
    doc.fontSize(25).text('Hello, World!');


    // Guardar el documento PDF en un archivo temporal
    const pdfPath = 'output.pdf';
    doc.pipe(fs.createWriteStream(pdfPath));
    doc.end();

    // Imprimir el archivo PDF en una impresora específica
    printer
        .print(pdfPath, { printer: 'TH' })
        .then(console.log("Impresión exitosa"))
        .catch(console.error);
}
