# Portfolio
Graphic Designer 

## Cambios a reglas anteriores

- Los ficheros se deben crear en `content/post/` en vez de `content/`.
- Los nombres de los ficheros en `content/post/` ya no tienen por qué incluir la fecha.

## Añadir nuevas entradas

1. Subir la imagen en `static/images/` con un nombre sin espacios ni signos especiales.
2. Crear un fichero nuevo en `content/post/`
  1. Todo fichero debe tener extensión `.md`
  2. Todo fichero irá por duplicado, donde las copias serán `<nombre fichero>.<idioma>.md`, e.g. `CoverDesign.md` para español y `CoverDesign.en.md` para inglés.
3. En el fichero escribir al menos lo siguiente:

```
---
title: <titulo que le quieras dar a la imagen>
image: <nombre del fichero que has subido>
date: <fecha en formato año-mes-dia>
---
```


Otras opciones a escribir son:

```
draft: <si se trate de un borrador, con false, se mostrará en la web, con true, se ocultará>
showImage: <si en la web del artículo se muestra la imagen de la portada junto al título, por defecto, es false>
```


Por ejemplo:

```
---
title: Diseño de portada
image: Portada_Cuadrada.jpg
date: "2020-04-14"
draft: false
showImage: false
---
```

En este caso, como `showImage` es false, no se mostrará `Portada_Cuadrada.jpg` en el post, pero sí en la página principal del portfolio.


### Modificar frase de portada

En `content/_index.md` y en su equivalente inglés, `_index.en.md`.

### Modificar información personal

La información personal está en `content/top/about.md` y en su equivalente inglés, `about.en.md`.

Para aprovechar el formato de textos de cabecera, se usa markdown o html. Así, el texto

```
### Sandra Muñoz

## ¡Hola! Soy diseñadora y animadora en Madrid
```

se muestra todo en grande, pero `### Sandra Muñoz` es algo más pequeño.


### Modificar información de contacto

La información de contacto se divide en dos lugares, en `content/top/` equivalente al `about`, y en `data/contact.yaml`.

En `data/contact.yaml` está el correo, teléfono, y enlaces de contacto que aparecerán en el pie de todas las páginas.


### Modificar CSS

En `static/css/style.css` está casi toda la personalización estética de la página.

## Modificar HTML de las páginas

En `layouts` tenemos todas las **plantillas** de los html que se muestran. Son muy sensibles y no habría que editarlas a la ligera. A ser posible, es mejor usar el directorio `content`.

Si se quiere modificar la **forma**, pero no el **contenido**, entonces sí tocamos estos HTML.

- En `index.html` tenemos la plantilla central de la portada.
- En `partials/` tenemos la cabecera con el menú de navegación y el pie de página con la información de contacto.
- En `about`, la plantilla para la información del autor.
- En `contact`, la plantilla para la información de contacto.
- En `post`, la plantilla de cada post de portfolio que se autogenera.

