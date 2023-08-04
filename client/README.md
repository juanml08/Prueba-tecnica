# CRUD LIBROS ONYX

Nombre del Proyecto: Prueba-Onyx-Libreria

Esta aplicacion fue realizada como prueba tecnica de la empresa Onyx para mostrar un desarrollo de una aplicacion que consiste en Crear, leer, actaulizar y eliminar (CRUD) con una interfaz y un backend

Tecnologías Utilizadas
Vite
React
Node.js
Sequelize
MySQL

Instalación
Clona el repositorio:
Copy code
git clone: https://github.com/juanml08/Prueba-tecnica.git

cd Prueba-Onyx-Libreria

Instala las dependencias

Copy code

npm install

Configuración de la Base de Datos
Asegúrate de tener MySQL instalado y en ejecución en tu máquina.

Crea una base de datos en MySQL para el proyecto
con el nombre onyx-libreria

Configura las credenciales de la base de datos en el archivo db.js ejemplo ( host: "localhost",
port: "3306",
dialect: "mysql",) y tanto tu password y user

Configuración del Servidor (Node.js)
Ve al directorio del servidor

Copy code

cd server

Instala las dependencias del servidor

Copy code

npm install

Ejecuta las migraciones para crear las tablas de la base de datos
Copy code

Inicia el servidor:
sql
Copy code

npm start
Configuración del Cliente (React)
Ve al directorio del cliente:

Copy code
cd client
Instala las dependencias del cliente

Copy code

npm install
Inicia el servidor de desarrollo del cliente

Copy code

npm run dev
