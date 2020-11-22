\*blue

# fs-md-links

### validador de links en archivos con extensión markdown.

#

Herramienta desarrollada para encontrar y analizar archivos de extensión markdown (**.md**).

Para instalar la herramienta en su proyecto es muy sencillo, copie y pegue el comando:

#### npm i fs-md-links

#

Es necesario una ruta de un archivo markdown para empezar!

![necesita un archivo para empezar](./img/node1.png)

#

Archivo mardown encontrado! Devuelve el _enlace_, el _texto_ y la _ruta_ del archivo markdown.

![ruta markdown](./img/node2.png)

#

Solo se analiza archivos de extensión markdown!

![ruta archivo invalido](./img/node3.png)

#

Al ingresar el argumento _--validate_, devuelve además el status del link!

![argumento --validate](./img/node4.png)

#

Para obtener estadísticas, se utiliza el argumento --stats, que devuelve el total de links encontrados, cuantos del total son unicos, y cuantos links del total están rotos.

![argumento --validate](./img/node6.png)

#

En este ejemplo hay un total de 4 links, donde 3 links no se repiten, y 1 está roto.
![argumento --validate](./img/exemplo1.png)

![argumento --validate](./img/ex1.png)

#

En este ejemplo hay 1 link, donde el link es unico y no está roto, o sea, el link funciona perfectamente.

![argumento --validate](./img/exemplo2.png)

![argumento --validate](./img/ex2.png)

#

## Autora:

#### [Fabiane Santos](https://github.com/FabianeSantos?tab=repositories)
