---
layout: "../../layouts/BlogPost.astro"
title: "Guia Basica Github"
description: "Guia basica y Comandos Basicos Github"
pubDate: "05 Nov 2022"
heroImage: "https://myblogtime.com/wp-content/uploads/2020/08/Git-hub-1.png"
heroImageAlt: "GitHub logo"
---

## Subir un proyecto a GitHub

<br/>
Seleccionamos la carpeta donde tenemos el proyecto. Damos clic derecho y abrimos en una terminal.

> Nota: en la terminal debes fijarte que estas en la dirección correcta de tu proyecto.

Aplicamos el comando `git init` para inicializar el repositorio.
Después `git add . `, el punto indica que se agregara todos los archivos.
Luego `git commit -m "mensaje"` , el mensaje es para identificar el cambio que hicimos.
Por ultimo `git push -u origin main` , origin es el nombre del repositorio y main es la rama.

<br/>

## Clonar un proyecto de GitHub

<br/>

Seleccionamos la carpeta donde queremos clonar el proyecto. Damos clic derecho y abrimos en una terminal.
Aplicamos el comando `git clone` y pegamos la url del repositorio.

<br/>

### Clonar de una rama en especifico

<br/>

Aplicamos el comando `git clone -b rama url` , **_rama_** es el nombre de la rama que queremos clonar.

<br/>

## Descargar cambios de un proyecto

<br/>

Para descargar los cambios de un proyecto clonado simplemente tenemos que poner el comando `git pull` en la terminal.

<br/>

## Actualizar un proyecto

<br/>

Para actualizar un proyecto clonado tenemos que poner el comando `git push orgin master` en la terminal.
Si es en una rama en especifico `git push orgin rama` , **_rama_** es el nombre de la rama que queremos actualizar.

<br/>

## Comandos utiles

<br/>

```bash
git status # Muestra el estado del repositorio
git log # Muestra el historial de cambios
git log --oneline # Muestra el historial de cambios en una sola linea
git log --oneline --graph # Muestra el historial de cambios en una sola linea con un grafico
git checkout -b rama # Crea una rama y se cambia a ella
git branch # Muestra las ramas
```

<br/>

## Extensiones recomendas en VSCODE para github

<br/>

Estas extensiones en Visual Studio Code nos ayudaran a trabajar con github de una manera mas facil.

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
