---
layout: "../../layouts/BlogPost.astro"
title: "Guia Basica de Kotlin "
description: "Guia Basica del lenguaje de programacion Kotlin, las bases para iniciar en el lenguaje."
pubDate: "03 Jan 2023"
heroImage: "https://th.bing.com/th/id/R.ae78f82cfaa0015ef0ed01092b9dddf8?rik=11zQQB1HKlS7cQ&riu=http%3a%2f%2fruaa.me%2fcontent%2fimages%2f2019%2f10%2fkotlin-cover.jpg&ehk=6MPzRF2jk9Pi9vOOOvYRNWDONuZKzoO2zg7eTZK%2bz2Y%3d&risl=&pid=ImgRaw&r=0"
heroImageAlt: "kotlin design"
---

Kotlin es un lenguaje de programación de propósito general que se ejecuta en la máquina virtual de Java y también se puede compilar en el código fuente de JavaScript o usar la infraestructura del compilador LLVM. Si buscas un lenguaje moderno y sobre todo para el desarrollo android, kotlin es la mejor opcion. En esta guia basica aprenderas lo basico del lenguaje.

## Variables y Constantes

Las variables nos ayudan a asignar valores y las constantes son variables que no se pueden cambiar. Las variables se declaran con la palabra reservada `var`

```kotlin
// Para declarar las variables usamos val + el nombre de la variable + = + el valor
var stringVar = "Cadena de texto"
var numberVar = 123
```

las constantes se declaran con la palabra reservada `val`, las constantes no se les puede reasignar un valor.

```kotlin
val firstConstant = "The earth is spheroid"
```

## Tipos de datos (Principales)

Los tipos de datos son fundamentales para la programación. Se utilizan para almacenar y procesar datos. Los principales en Kotlin son:

🔹**String**// Los strings son cadenas de texto, se escriben entre comillas simples o dobles.

```kotlin
val cadena = "Strings"
// podemos ser explicitos al declarar usando ':'+el tipo de dato
val cadena2: String = "Cadenas"
//println nos sirve para mostrar el mensaje en consola el simbolo '+' para unir los strings
println(cadena + cadena2)
```

🔹**Enteros** (Byte, Short, Int, Long) son los numeros enteros.

```kotlin
val num1 = 12
val num2 = 8
val res = num1 + num2;
println(res)
```

🔹**Decimales** (Float, Double) son numeros que contienen decimales

```kotlin
val float = 12.4f
val double = 2.4
val resDecimals = float + double
println(resDecimals)
```

🔹**Booleans** son valores de verdadero y falso

```kotlin
val booleano = true
val bool2 = false
println(booleano == bool2) // compara si son iguales_ retorna falso
```

## Operadores Principales

### Operadores condicionales y logicos

| Simbolo | Descripción       |
| :------ | :---------------- |
| >       | Mayor que         |
| >=      | Mayor o igual que |
| <       | Menor que         |
| <=      | Menor o igual que |
| ==      | Igualdad          |
| !=      | Desigualdad       |
| &&      | Operador 'y'      |
| \|\|    | Operador 'o'      |
| !       | Negar             |

### Operadores aritmeticos

| Simbolo | Descripción                                             |
| :------ | :------------------------------------------------------ |
| +       | Suma: suma dos valores                                  |
| -       | Resta: resta dos valores                                |
| /       | Division: divide dos valores                            |
| \*      | Multiplicacion: multiplica dos valores                  |
| %       | Modulo: devuelve el resto de la division de dos valores |
| ++      | Incremento: incrementa en 1 el valor                    |
| --      | Decremento: decrementa en 1 el valor                    |
| \*\*    | Exponente: eleva un valor a la potencia de otro valor   |

## Condicionales

Los condicionales son bloques de código que se ejecutan solo cuando se cumplen las condiciones que especifican.

```kotlin
// if simple
val age = 1
if (age >= 18) {
    // lo que se ejecuta si la condicional es cierta
    println("$age es mayor de edad")
} else { // lo que se ejecuta si la condicional es falsa
    println("$age es menor de edad")
}
// if con operador &&
//ambas condiciones tienen que ser verdaderas para entrar
if (age == 65 && age >= 18) {
    println("$age es mayor de edad y es una persona de la tercera edad")
} else {
    println("$age es menor de edad")
}
// if con operador ||
// al menos 1 de las condicionales debe ser verdadera
if (age == 65 || age >= 18) {
    println("$age Es mayor de edad")
} else {
    println("$age Es menor de edad")
}
// else if nos ayuda a evaluar más condicionales
if (age >= 18 && age < 65) {
    println("Mayor de edad")
} else if (age >= 65) {  // si la condicion anterior no se cumple y esta si
    println("Eres una persona de la tercera edad")
    //NOTA: se pueden agregar varior else if
} else { // si ninguna de las operaciones anteriores se cumple
    println("Eres menor de edad")
}
```

## Sentencia When

La declaración when en Kotlin (en otros lenguajes switch) se usa para especificar las condiciones para que se ejecute un bloque de código. Se puede usar con sentencias if, bucles y otras sentencias when

```kotlin
val country = "México"
when (country) {
  //evaluamos una condicion
  "Francia" -> {
          // si se cumple ira esta condicion
          println("habla Frances")
  }
  "EUUA" -> {
          println("habla Ingles")
  }
  "Portugal" -> {
          println("habla Portugues")
  }
  // podemos seperar con comas si tenemos varias opciones que cumples un mismo objetivo
  "México", "España", "LATAM" -> {
      println("habla Español")
  }
  // si ninguna de las anteriores opciones cumple la condicional
  else -> {
      println("aun no tenemos tu idioma")
  }
}
```

#### When con rangos

podemos evaluar por rango con when, supongamos que tenemos que clasificar una arma por su alcance

```kotlin
val range = 100;
when (range) {
    // con "in" seguido de numero a .. numero b podemos establecer un intervalo
    in 0..25 -> {
        println("Arma de corto alcance")
    }
    in 25..50 -> {
        println("Arma de mediano alance")
    }
    in 50..75 -> {
        println("Arma de largo alance")
    }
    else -> {
        println("Arma con demasiado alcance")
    }

}
```

## Arreglos

Los arreglos son listas ordenadas de datos

```kotlin
// para declararlo usamos val o var + el nombre del arreglo + '=' + arrayListOf + <Tipo de dato>
val fruits = arrayListOf<String>()
// para añadir datos al array usamos .add
fruits.add("Fresa")
fruits.add("Mango")
println(fruits)
// si queremos añdir un conjunto de datos usaderemos .addAll y listOf para crear una lista
fruits.addAll(listOf("Aguacate", "Pera", "Sandia", "Uva"))
println(fruits)
// para poder acceder a los datos dentro del arrgelo usaremos la posicion, NOTA: las posicioneempiezan desde 0
val strawberry = fruits[0]
val grapes = fruits[5]
println("Frutas pequeñas $strawberry y $grapes")
// eliminar datos
fruits.removeAt(3)
println(fruits)
// recorrer arreglos/ pasar por cada valor
fruits.forEach {
    println(it) // it: es el iterador va tomar como valor la posicion por cada elemento
}
// para saber la cantidad de elementos de nuestro array usaremos count
println("Total de frutas: " + fruits.count())
// podemos acceder de forma rapida al primer y utlimo elemento con
println(fruits.first())
println(fruits.last())
// vaciar el array
fruits.clear()
println("Total de frutas: " + fruits.count())
```

## Mapas / Diccionarios

Los mapas son una de las estructuras de datos más importantes de Kotlin. Se utilizan para almacenar pares clave-valor y proporcionan una forma de recuperar valores en función de sus claves.

```kotlin
// definimos el nombre + Map<Tipo de dato de la clave , Tipo de dato del valor> +'='+ mapOf()
var names: Map<Int, String> = mapOf()
// añadir elementos, al añadirlos con map of, el mapa se crea de cero
names = mapOf(1 to "Juan", 4 to "Pedro")
println(names)
// si queremos añadir elementos sin eliminar los anterior mutaremos el mapa
names = mutableMapOf(1 to "Juan", 4 to "Pedro")
// añadir un elemento
names[2] = "Alex"
// tambien podemos usar put
names.put(3, "Alicia")
println(names)
// las claves no se pueden repetir es decir no podemos hacer esto para añadir
/*
* names.put(3,"Marcelo") esto actualizara el valor
* */
// los valores si se pueden actualizar
names.put(3, "Marcelo")
println(names)
// acceder a valores
println(names[1])
// eliminar
names.remove(2)
println(names)
```

## Bucles

Los bucles son una construcción de programación que permite al programador ejecutar un conjunto de instrucciones repetidamente. Hay tres tipos de bucles en Kotlin: bucles for, while y do-while.

### for

Se utiliza un bucle for cuando se conoce el número de iteraciones. Ejecutará los bloques de código hasta que se cumpla la condición.

```kotlin
val fruits = listOf("Fresa", "Mango", "Aguacate", "Pera", "Sandia", "Uva")
val name = mutableMapOf(1 to "Juan", 4 to "Pedro", 3 to "Marcelo")
//for para recorrer arreglos
for (element in fruits) {
    println(element)
}
//for para recorrer mapas
for (element in name) {
    println("${element.key} , ${element.value}")

for (x in 0..10) {
    println(x) // son 11
}
//until no toma el cuenta el ultimo numero
for (x in 0 until 10) {
    println(x) // son 10
}
// con step podemos definir el incremento
for (x in 0..10 step 2) {
    println(x)
}
// cuenta regresiva
for (x in 10 downTo 0) {
    println(x)
}
```

### while

Un ciclo while se usa cuando no se sabe cuántas veces se debe ejecutar un bloque de código.

```kotlin
// while
var x = 0
while (x < 10) {
    println(x)
    x++
}
x = 0
// while con incrementos
while (x < 10) {
    println(x)
    x += 2
}
```

### do-while

Un ciclo do-while ejecuta su bloque de código al menos una vez, incluso si la condición se evalúa como falsa en el primer intento.

```kotlin
// while
var x = 0
do {
    println(x)
    x++
} while (x < 10)
```

## Null Safety

Seguridad contra nulos, nos ayuda a evitar errores de ejecucion por variables nulas

```kotlin
val string = "Hola mundo"
// string= null ❌     Esto daría un error
println(string)
// Variable null safety
// tendremos que escribir la variable e indicar el tipo de dato y a lado un '?'
var nullString: String? = "Hola null safety"
nullString = null
println(nullString)
// Safe Call
// El simbolo ? nos ayuda en caso de ser nulo, no ejecutara esta operacion
println(nullString?.length)

```

## Funciones

Funcionaes, nos permiten reutilizar partes del codigo; son partes de codigo que hacen un tarea espeficifica. Estas pueden transmitir como si fueran datos.También se pueden anidar dentro de otras funciones o clases.

```kotlin
// palabra reservada fun + el nombre de la funcion () {}
fun funciones() {
    // aqui ira el codigo.
    // para llamarlas se usa lo siguiente nombreFuncion()
    // estamos llamando una funcion que se declara más abajo
    sayHello()
    // estamos llamando una funcion que recibe un parametro
    sayName("Juan")
    // estamos llamando una funcion que retorna un valor para poder almacenarlo
    val sumRes: Int = sum(12, 12)
    println(sumRes)
    // podemos usar varias veces las funciones
    println(sum(12, sum(13, 12)))
}
// funcion simple
fun sayHello() {
    println("Hola")
}
//funcion con parametros, estas nos permiten reutilizar codigo y tener resultado dititos.
fun sayName(name: String) {
    println("Hola $name ")
}
// funciones con valores de retorno
fun sum(x: Int, y: Int): Int {
    val res = x + y
    return res
}
```
