## Sobre el proyecto

Este proyecto trata de crear un sistema de traducciones exclusivo en el servidor.

La función **getDictionary** expone una función la cual retorna una función para obtener la clave de traducción.

Hemos de pasar la clave de traducción la cual se genera de forma automática leyendo los tipos de archivo de traducción y opcionalmente, como segundo parámetro un objeto con los posibles variables de traducción.

Utilizamos la librería [intl-messageformat](https://formatjs.io/docs/intl-messageformat/) para las traducciones la cual soporta plurales y selectores

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Configurando el idioma por defecto

Para configurar el idioma por defecto solamente deberemos entrar el el fichero i18n-config y modificar la propiedad defaultLocale

## Añadiendo un nuevo idioma

Para añadir un nuevo idioma deberemos crear un nuevo fichero con el nombre del idioma deseado dentro del directorio dictionaries

ej: pt.json

Una vez creado añadir las mismas claves de traducción que ya poseen todos tus ficheros de traducción

Dentro del fichero index.ts en el objeto dictionaries añadir su correspondiente código e importar el fichero de traducciones ( Importante que el código del idioma sea válido )

Y por ultimo dentro de fichero i18n-config en la propiedad locales un nuevo registro al array, este ultimo paso se realiza para que el middleware tenga registrado los idiomas aceptados y no se intente acceder a un idioma no soportado por la aplicación

## Agradecimientos

- [intl-messageformat](https://formatjs.io/docs/intl-messageformat/)
- [next-i18n-routing](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing)
