# Dockerfile
FROM node:23-slim

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la app
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para correr la app
CMD [ "node", "app.js" ]
