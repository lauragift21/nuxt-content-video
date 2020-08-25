---
title: Documentación de contenido de Nuxt
description: 'Potencie su aplicación NuxtJS con el módulo @ nuxt / content: escriba en un directorio de contenido / y obtenga sus archivos Markdown, JSON, YAML y CSV a través de una API tipo MongoDB, actuando como un CMS sin cabeza basado en Git.'
---

## Hola de [Nuxt.js Content] (https://content.nuxtjs.org) 👋

👉 Edite este [sandbox] (https://codesandbox.io/s/nuxt-content-tailwindcss-typography-twhtf). ¡Niice!

👀 Ver [demostración en vivo] (https://nuxt-tailwind-typo.vercel.app)

<h />

<p class = "lead">
  <i> Hasta ahora </i>, intentar diseñar un artículo, documento o publicación de blog con Tailwind ha sido una tarea tediosa.
  tarea que requería un buen ojo para la tipografía y una gran cantidad de CSS personalizado complejo.
</p>

Por _default_, c Tailwind elimina todo el estilo predeterminado del navegador de párrafos, encabezados, listas y más. Esto termina siendo realmente útil para crear interfaces de usuario de aplicaciones porque pasa menos tiempo deshaciendo estilos de agente de usuario, pero cuando _realmente_ está tratando de diseñar un contenido que proviene de un editor de texto enriquecido en un CMS o un archivo de rebajas, puede ser sorprendente y poco intuitivo.

De hecho, recibimos muchas quejas al respecto, y la gente nos pregunta regularmente cosas como:

> ¿Por qué Tailwind está eliminando los estilos predeterminados en mis elementos `h1`? ¿Cómo desactivo esto? ¿Qué quieres decir con que también pierdo todos los demás estilos base?

Lo escuchamos, pero no estamos convencidos de que simplemente deshabilitar nuestros estilos básicos sea lo que realmente desee. No querrá tener que eliminar los molestos márgenes cada vez que utilice un elemento `p` en una parte de la interfaz de usuario de su panel. Y dudo que realmente quieras que las publicaciones de tu blog usen los estilos de usuario-agente, quieres que se vean _ asombrosos_, no horribles.

El complemento `@ tailwindcss / typography` es nuestro intento de darte lo que _actualmente_ quieres, sin ninguna de las desventajas de hacer algo estúpido como deshabilitar nuestros estilos básicos.

Agrega una nueva clase de "prosa" que puede agregar a cualquier bloque de contenido HTML vanilla y convertirlo en un documento hermoso y bien formateado:

`` `html
<article class = "prosa">
  <h1> Pan de ajo con queso: lo que nos dice la ciencia </h1>
  <p>
    Durante años, los padres han apoyado los beneficios para la salud de comer pan de ajo.
    con queso a sus hijos, con la comida ganando un estatus tan icónico
    en nuestra cultura que los niños a menudo se disfrazan de pan caliente y cursi para
    Víspera de Todos los Santos.
  </p>
  <p>
    Pero un estudio reciente muestra que el célebre aperitivo puede estar relacionado con un
    una serie de casos de rabia surgiendo en todo el país.
  </p>
  <! - ... ->
</artículo>
''

Para obtener más información sobre cómo utilizar el complemento y las funciones que incluye, [lea la documentación] (https://github.com/tailwindcss/typography/blob/master/README.md).

---

## Qué esperar de aquí en adelante

Lo que sigue a partir de aquí es solo un montón de tonterías absolutas que he escrito para probar el complemento en sí. Incluye todos los elementos tipográficos sensatos que se me ocurren, como ** texto en negrita **, listas desordenadas, listas ordenadas, bloques de código, comillas en bloque, _e incluso cursiva_.

Es importante cubrir todos estos casos de uso por algunas razones:

1. Queremos que todo se vea bien desde el primer momento.
2. Realmente solo la primera razón, ese es el objetivo del complemento.
3. Aquí hay una tercera razón aparente, aunque una lista con tres elementos parece más realista que una lista con dos elementos.

Ahora vamos a probar otro estilo de encabezado.

### La tipografía debería ser fácil

Así que ese es un encabezado para usted; con suerte, si hemos hecho nuestro trabajo correctamente, se verá bastante razonable.

Algo que una persona sabia me dijo una vez sobre la tipografía es:

> La tipografía es muy importante si no quieres que tus cosas se vean como basura. Hágalo bueno, entonces no será malo.

Probablemente sea importante que las imágenes también se vean bien aquí de forma predeterminada:

<figura>
  <img
    src = "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    alt = ""
  />
  <figcaption>
    Contrariamente a la creencia popular, Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raíces en un trozo de
    literatura latina clásica del 45 a. C., por lo que tiene más de 2000 años.
  </figcaption>
</figure>

Ahora les voy a mostrar un ejemplo de una lista desordenada para asegurarme de que también se vea bien:

- Así que aquí está el primer elemento de esta lista.
- En este ejemplo, mantenemos los elementos breves.
- Más adelante, usaremos elementos de lista más largos y complejos.

Y ese es el final de esta sección.

## ¿Qué pasa si apilamos títulos?

### Debemos asegurarnos de que también se vea bien.

A veces tienes títulos directamente uno debajo del otro. En esos casos, a menudo tiene que deshacer el margen superior del segundo encabezado porque, por lo general, parece mejor que los encabezados estén más juntos de lo que debería estar un párrafo seguido de un encabezado.

### Cuando un encabezado viene después de un párrafo…

Cuando un encabezado viene después de un párrafo, necesitamos un poco más de espacio, como ya mencioné anteriormente. Ahora veamos cómo sería una lista más compleja.

- ** A menudo hago esto en el que los elementos de la lista tienen títulos. **

  Por alguna razón, creo que esto se ve genial, lo cual es desafortunado porque es bastante molesto tener los estilos correctos.

  A menudo también tengo dos o tres párrafos en estos elementos de la lista, por lo que la parte difícil es colocar el espacio entre los párrafos, el elemento de la lista