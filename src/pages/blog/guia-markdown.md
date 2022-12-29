---
layout: "../../layouts/BlogPost.astro"
title: "Guia Rapida de Markdown"
description: "Guia de la sintaxis markdown"
pubDate: "02 Nov 2022"
heroImage: "https://pic1.zhimg.com/v2-c93ae95786e7e4f0240ea31de4020083_r.jpg?source=172ae18b"
heroImageAlt: "Markdown logo"
---

## Cabeceras

Usa las almohadillas (#) para crear los encabezados el número de almohadillas es el nivel del encabezado así hasta el 6

#### Sintaxis

```md
# Cabecera nivel 1

## Cabecera nivel 2

### Cabecera nivel 3

#### Cabecera nivel 4

##### Cabecera nivel 5

###### Cabecera nivel 6
```

## Estilos en Texto

Al igual como los encabezados entre más \* agregues cambiara él efecto. Los asteriscos van sin espacio.

| **Sintaxis**  | **Resultado**                    |
| ------------- | -------------------------------- |
| `*Cursiva*`   | _texto en cursiva_               |
| `**negrita**` | **texto en negrita**             |
| `***ambos***` | **_texto en cursiva y negrita_** |
| `~~tachado~~` | ~~tachado~~                      |

## Tablas

#### Sintaxis

```markdown
| Sintaxis| Descripción| Resultado |
| :--- | :----: | ---: | se usa para la alineacion
| Header | Title | Here's this |
| Paragraph | Text | And more |
```

> o Usa el generador de tabla : https://www.tablesgenerator.com/markdown_tables

## Listas y Bloques

### Bloques de citado

#### Sintaxis

```md
para poner bloques de citado se usa > antes de empezar el texto
```

#### Ejemplo

```md
> este sería un ejemplo
> de como debes escribirlo
```

#### Resultado

> este sería un ejemplo
> de como debes escribirlo

### Bloques de codigo

#### Sintaxis

para poner bloques de código se usa las tres comillas invertidas simples ``` antes y después además, se puede especificar el código usando las tres comillas
y seguido el lenguaje por ejemplo json después cierras las comillas invertidas y el código

#### Ejemplo

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Listas

#### Sintaxis

Para poner listas ordenas simplemente por un numero antes `1.` lista y así.
Para listas no ordenadas solo pon un `-` lista.
Para listas dentro de listas solo usa los espacios.
Y para empezar una lista con numero sin que se ordenen pon \ y el numero

#### Ejemplo

```md
- Lista
- no
- ordenada

1.  Lista
2.  xd
3.  ordenada

- primera item
- segundo item
- tercera item
  - Interna
  - Interna
- cuarto item
```

#### Resultado

- Lista
- no
- ordenada

1.  Lista
2.  xd
3.  ordenada

- primera item
- segundo item
- tercera item
  - Interna
  - Interna
- cuarto item

### Url

Por ultimo para poner un texto una url

#### Sintaxis

```md
[Texto con Url](url)
```

#### Ejemplo

[Mardown Sintaxis completa](https://www.markdownguide.org/basic-syntax/)
