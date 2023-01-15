---
layout: "../../layouts/BlogPost.astro"
title: "Usar PostgreSQL en Django"
description: "Como implementar postgreSQL en Django"
pubDate: "20 Dec 2022"
heroImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Fc5%2F1a%2F26%2Fc51a267acfd057acefe465fd932348be--coding-blog.jpg&f=1&nofb=1&ipt=cb13843e6e3ef73ae554958130b59f8d3a9075536100464ef1f9d441ab6cb3d6&ipo=images"
heroImageAlt: "Django and PostgreSQL logo"
---

Django usa por defecto sqlite, pero generalmente esta solo se usa en la etapa de desarrollo. Para poder usar PostgreSQL debemos realizar lo siguiente:

## Instalar el modulo `psycopg2`

Dentro de nuestro entorno virtual en python debemos ejecutar la siguiente linea de codigo:

```sh
 pip install psycopg2

```

## Crear un usuario en PostgreSQL

Para crear un Usuario en PostgreSQL desde pgAdmin debemos:

1.- Abrir pgAdmin y iniciar el servidor de PostgreSQL, para ello bastara con darle clic al nombre del servidor de PostgreSQL por defecto es `PostgreSQL` + `la version`.

2.- Dentro ubicar `Login/Group Roles`, darle clic derecho y en `create` `Login/Group Role`.

3.- En la ventana emergente escribir en la pestaña `general` el name (este sera el usuario) y en la pestaña `Definition` en el campo `password` escribir la constaseña despues en la pestaña `Privileges` activar los permisos que desea en este caso activaremos todos (asi sera un superusuario).

## Crear una base de datos en PostgreSQL

Para crear una base de datos en PostgreSQL desde pgAdmin debemos darle clic derecho a `Database` dentro de nuestro servidor de PostgreSQL, despues create `database`.

## Configuración en Django

Dentro del archivo `settings.py` buscaremos en la sección `DATABASES` pondremos lo siguiente:

```python
 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nombre_de_tu_base_de_datos',
        'USER': 'usuario_de_la_base_de_datos',
        'PASSWORD': 'contraseña_del_usuario',
        'HOST': 'dirección_del_servidor', # es 'localhost' en desarrollo
        'PORT': 'puerto_del_servidor', # Generalmente es el 5432
    }
 }
```

### Comandos Finales

Por ultimo dentro del proyecto ejecutaremos lo siguientes comandos en la terminal (recuerda tener el entorno virtual activado)

```shell
 python manage.py makemigrations
 python manage.py migrate
```
