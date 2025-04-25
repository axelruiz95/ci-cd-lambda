// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Tu CV en formato JSON
const cv = {
  nombre: 'Axel Ruiz',
  profesion: 'Arquitecto de Soluciones Cloud',
  resumen: 'Experiencia en Azure, AWS, Terraform, Kubernetes, y más.',
  habilidades: ['Azure', 'AWS', 'Terraform', 'Kubernetes', 'Linux', 'Docker'],
  educacion: [
    {
      institucion: 'Universidad X',
      titulo: 'Licenciatura en Informática',
      anio: '2015 - 2019'
    }
  ],
  experiencia: [
    {
      empresa: 'Empresa Y',
      puesto: 'Arquitecto Cloud',
      periodo: '2020 - Presente'
    }
  ],
  github: 'https://github.com/axelruiz95'
};

// Ruta principal
app.get('/', (req, res) => {
  res.send(
    `<h1>Mi CV</h1><p>Consulta mi CV en <a href="/cv">/cv</a></p><p>Visita mi GitHub: <a href="${cv.github}" target="_blank">${cv.github}</a></p>`
  );
});

// Ruta para el CV en formato JSON
app.get('/cv', (req, res) => {
  res.json(cv);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
