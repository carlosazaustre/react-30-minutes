---
title: "Crea tu primera app con React en 30 minutos"
date: "2021-06-28"
tags:
  - "💻 Desarrollo"
---

# Getting Started with Create React App

Utilizamos [Create React App](https://github.com/facebook/create-react-app).
Tienes que tener [Node.js instalado](https://nodejs.org)
Ejecutamos en la terminal

```shell
$ npx create-react-app react-30-minutes
```

Scripts útiles

```shell
$ npm start
$ npm test
$ npm run build
```

y entramos en la carpeta y abrimos el editor.

Ejecuta la aplicación en modo desarrollo. Abres [http://localhost:3000](http://localhost:3000) En el navegador y puedes ver el "hola mundo" de la aplicación.

La página se recarga si hacemos cambios y tambien mostrará errores de linting en la consola.

## Librerias instaladas

- React
- ReactDOM

## Archivos

- index.HTML
-

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- dentro del div #root se renderizará todo el contenido de nuestra app -->
    <div id="root"></div>
  </body>
</html>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hola Mundo!</h1>
  document.getElementById('root')
);
```
