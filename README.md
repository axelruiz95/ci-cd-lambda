# CV API - Node.js + Serverless + AWS Lambda

Este proyecto es una API sencilla desarrollada en **Node.js** que expone un **Currículum Vitae (CV)** en formato JSON y lo despliega como una función **Serverless** en **AWS Lambda**, expuesta mediante **API Gateway**.

---

## 🧰 Tecnologías usadas

- Node.js
- Express
- AWS Lambda
- API Gateway
- Serverless Framework
- Docker (para pruebas locales)

---

## 🚀 ¿Qué hace esta API?

- Ruta `/` muestra una pequeña presentación con un enlace a tu CV y tu perfil de GitHub.
- Ruta `/cv` expone el CV completo en formato JSON.

---

## 📦 Instalación local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cv-api.git
   cd cv-api
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Corre la app localmente:
   ```bash
   node app.js
   ```

4. También puedes usar Docker:
   ```bash
   docker build -t cv-node-app .
   docker run -p 3000:3000 cv-node-app
   ```

Accede a: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Despliegue en AWS Lambda (Serverless Framework)

1. Instala Serverless Framework:
   ```bash
   npm install -g serverless
   ```

2. Agrega el archivo `serverless.yml`:
   ```yaml
   service: cv-api

   provider:
     name: aws
     runtime: nodejs20.x
     region: us-east-1

   functions:
     app:
       handler: handler.handler
       events:
         - httpApi: '*'

   plugins:
     - serverless-offline

   package:
     exclude:
       - node_modules/**
       - .gitignore
       - Dockerfile
   ```

3. Agrega un archivo `handler.js` que importe tu app:
   ```js
   const serverless = require('serverless-http');
   const app = require('./app');

   module.exports.handler = serverless(app);
   ```

4. Despliega a AWS:
   ```bash
   serverless deploy
   ```

---

## 🔍 Uso de la API

- `GET /` → Página de presentación con enlace a `/cv` y GitHub.
- `GET /cv` → Devuelve el CV en formato JSON.

Ejemplo de respuesta:
```json
{
  "nombre": "Axel Ruiz",
  "profesion": "Arquitecto de Soluciones Cloud",
  "habilidades": ["Azure", "AWS", "Terraform", ...],
  "github": "https://github.com/axelruiz95"
}
```

---

## 📄 Licencia
MIT

---

**Desarrollado por Axel Ruiz - [GitHub](https://github.com/axelruiz95)**
