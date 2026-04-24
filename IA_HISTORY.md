# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Noelia Agustina Brandan -->
**Fecha:** <!-- 23/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  "Una vez que reemplace todos los div, em trabé con el formulario y ya en ese punto también me corregía lo que ya habia modificado"
-->
```

### Lo que le pedí a la IA

```
<!--Me ayudas a reescribir el código, que accesible y semántico el formulario, corrígeme si me falta algún <> y si hay falta ortográfica.-->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  Tomó un enfoque de estandar moderno y accesibilidad.
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  Si, bastante. Tuve errores ortográficos y <> que no cerre correctamente, cmo tmabién la accesibildad. Habia varias lineas de "styles" que pasé por alto y pude corregirlo.
  - ¿Qué parte te resultó útil como punto de partida?
  Si, bastante potque estaba un poco perdida en cmo hacer accesible el formulario y no me acordaba tanto.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  Tabulación, varias cosas no conecctaban con la etiqueta correspondiente y también fue algo de comodidad de lectura y que no este todo junto.
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  Al leer el código, no era cómodo leer todo junto.
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  Por que es una buena práctica tabular y que el código pueda leerse bien.
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Tabulé las líneas de código que eran necesarias.
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
Me ayudas con este código de CCS que tenia estilos enbebidos? Definir layout macro con `grid-template-areas` para `header`, `main` y `footer`. - Usar `display: flex` para la barra de navegación y las etiquetas de habilidades ```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  Me dió un css moderno, me arreglo el código para porque dijo que habia cosas "antiguas", agregó flexbox y lo que le pedí.
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  Si y No, si me ordenó el css pero no me gustaron los estilos, pero se olvidó de varias partes porque no fui específica, no fue mas alla de lo que pedi, como el formulario, quedó peladp jaja.
  - ¿Qué parte te resultó útil como punto de partida?
  Que me ordene todo el css y poder trabajarlo mejor, mas ordenado.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  El estilo del formulario, colores, fuentes.
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  Al probarlo en el browser y en la consola, porque el botón del fromulario estaba desnudo.
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  Lo incorrecto fui yo al dar mal el promp, si fue insuficiente que me ayudó con todo el css menos con 1 solo botón. 
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Tuve quen darle otro promp para que me ayude, no me funcionó y tuve que probar varias veces hasta que quedó decente.
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  Con el css, le pedia algo no me gustaba, yo lo corregia y a eso que hice queria me lo modificaba por completo sin que yo se lo pidiera o agregaba cosas que no quería modificar. El final y el principio eran totalmente diferentes. 
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  Si, fue muy claro para ayduarme con una base para el Javascript
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
  Si, ser más clara y dar mas contexto, que cosas si y que cosas no. Perdí mucho tiempo discutiendo con la IA jaja
-->
```
