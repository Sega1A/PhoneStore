# Servidor en Express para una tienda de telefonos.

## Instalacion

En una terminal, ingresa el siguiente comando:

```bash
npm install
```

Esto creara una carpeta `node_modules` que contiene todas las dependencias necesarias para el proyecto.

## Correr el servidor

Ejecuta el siguiente comando:

```bash
npm start
```

## Configuracion del archivo .env

Crear un archivo `.env` y colocar dentro lo siguiente:

```bash
PORT=3000
HOST=localhost

# Database
DB_USER=UsuarioEjemplo #Nombre de usuario de la base de datos.
DB_PASSWORD=new_password  #Contraseña del usuario de la base de datos.
DB_DATABASE=PhoneStore
DB_PORT=3306 #3306 es el puerto por defecto, si se usa otro, cambialo.
```

## Base de datos

En el directorio `src/database` se tiene un script `db.sql` que deberás correr en `Mysql Server`, este archivo contiene la base de datos y tablas usadas en el servidor.
