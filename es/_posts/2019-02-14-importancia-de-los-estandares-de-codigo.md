---
layout: post
title: "La importancia de los estándares de código"
date: 2019-02-14 18:09:00 -0500
categories: programming
author: "Sagrario Meneses"
lang: es
---
La importancia de los estándares de código
==========================================

Los estándares se encuentran constantemente presentes en nuestra vida cotidiana, son importantes para mantener un cierto orden en las cosas. La ingeniería de software no es la excepción y los estándares de código son necesarios para que desarrollemos sistemas de calidad.
Para las organizaciones de nuestra época el correcto funcionamiento de sus aplicaciones digitales representa crecimiento y eso es algo que en Linio sabemos.

¿Qué son los estándares de código?
----------------------------------

Son una serie de reglas definidas para un lenguaje de programación o bien un estilo de programación específico. Los estándares de código se aseguran de que los desarrolladores que contribuyen en un proyecto sigan ciertas pautas al escribir código, dando como resultado un producto consistente, fácil de leer y a su vez de mantener.

Un poco de historia
-------------------

El uso de estándares es muy importante en la calidad de software, sin embargo el mantener todos los proyectos cumpliendo a la perfección con los estándares establecidos no es una tarea fácil, requiere un gran esfuerzo y constancia por parte del equipo de desarrollo. Es muy común que durante el crecimiento de una compañía se comience el desarrollo de un proyecto sin contar con estándares establecidos.

En Linio sucedió algo así, en un inicio no contábamos con estándares y era el pan de cada día que los desarrolladores escribieran código a su modo, dando como resultado un repositorio difícil de entender y por tanto difícil de mantener, aún recuerdo las horas que pasábamos "debugeando" un problema antes de estar si quiera cerca de donde podría haberse originado.

"Más vale paso que dure, que trote que canse." la migración de Linio a las buenas prácticas ha sido progresiva, no fue cosa de un solo día, se comenzó a adoptar en los nuevos proyectos y poco a poco se fue exigiendo un nivel adecuado en cada cambio que se enviaba a nuestros repositorios, en un inicio fue difícil adaptarnos, de estar acostumbrados a no tener reglas establecidas para la revisión de código a tener muy presente estas reglas para que todos los desarrolladores dieran su visto bueno en el cambio que solicitabas empujar a los repositorios.

Hoy en día contamos con un conjunto de estándares, incluso con algunos procesos automatizados, como lo es el estilo de código, con ayuda de un script podemos detectar líneas de código que no cumplen con nuestros estándares antes de intentar empujarlas al proyecto, aún hay muchas cosas por mejorar y estándares por añadir, es un trabajo constante y seguimos trabajando en ello.

¿Cómo comienzo la aplicación de estándares de código en mis proyectos?
---------------------------------------------------------------

No todas las compañías utilizan las mismas herramientas en sus desarrollos y es muy complicado que se encuentre un estándar ideal que se adapte a nuestras necesidades especificas, por ello, para estar todos en el mismo canal es recomendable establecer un grupo de estándares propios, es decir, crear tu propio repositorio de estándares es un buen comienzo para lograr código de calidad. 

Consideraciones:
---------------

1. Tomar como base estándares oficialmente publicados de las herramientas que se utilizan en cada proyecto.

2. Para obtener un código de fácil lectura es necesario poner atención al estilo del mismo; segmentos de código, correcto uso de indentación, longitud de lineas y espacios entre ellas.

3. Asignación de nombres en variables, funciones etc. 

4. Establecer límites en complejidad o longitud de funciones.

Y lo más importante, no detenerse en la aplicación de estas reglas, no incrementemos la deuda técnica en nuestros proyectos, quizá al día de hoy tengas un proyecto muy grande en el que jamás se han aplicado estándares y te parece una pérdida de tiempo comenzar a hacerlo, pero es una inversión que vale la pena, para ir construyendo no solo un producto de calidad, sino también un equipo de ingeniería con calidad. Si la implementación de estos estándares comienza a ser un verdadero dolor de cabeza, es muy recomendable considerar una refactorización completa de tu sistema "divide y vencerás" es recomendable iniciar módulo por módulo.

Ventajas de la aplicación de estándares:
---------------------------------------

1. Detección temprana de fallas:
   Al buscar cumplir con los estándares que establecimos ha sido más sencillo detectar posibles errores desde la revisión de código, evitando que estos problemas lleguen a producción.
   
2. Reducción de la complejidad:
   El cumplir con las reglas acerca del estilo de código ayuda a construir código más limpio, permitiéndonos detectar fácilmente oportunidades para simplificar nuestras funciones.
   
3. Código de fácil lectura:
   El respetar los estándares en nuestros proyectos le ha permitido a nuevos miembros del equipo acoplarse más fácilmente al ritmo de trabajo y a entender mejor el código en los repositorios.
   
4. Código reusable:
   Contamos con segmentos de código que pueden ser consumidos por más de un servicio, gracias al uso de buenas prácticas, haciendo menos frecuente la repetición de código.

Principios de código limpio recomendados:
----------------------------------------

Es una buena estrategia buscar que todo el equipo de ingenieros esté familiarizado con principios de código limpio, por ello a continuación se enlistan algunos de los principios que nos inspiraron a crear nuestros estándares y a buscar calidad en nuestros desarrollos.

1. DRY - Don't repeat yourself.
2. YAGNI - You Ain’t Gonna Need It.
3. KISS - Keep it simple, stupid.
4. SOLID 

     S - Single-responsiblity principle.
     
     O - Open-closed principle.
     
     L - Liskov substitution principle.
     
     I - Interface segregation principle.
     
     D - Dependency Inversion principle.


Conclusión:
----------
La implementación de estándares en Linio dio como resultado:
 * Una reducción entre el 60 y 80% en incidencias.
 * Disminución en el número de despliegues de hotfix.
 * Una mejora significativa en la calidad del equipo de desarrollo.

Como podemos ver la definición y el uso de estándares proporciona muchos beneficios, en mi experiencia disfruto más el trabajo desde que tenemos un enfoque hacia el código de calidad que antes cuando no había reglas establecidas y esto se ha dado gracias al trabajo de todos los ingenieros en el equipo, se trata de apuntar todos juntos a un mismo objetivo.
