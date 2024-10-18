# API DE GESTION DE TAREAS 

Una API RESTful para gestionar tareas con métodos CRUD.

## Índice

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)   
- [Ejemplos de Peticiones](#ejemplos-de-peticiones)
- [Pruebas](#pruebas)

## Características

- Crear nuevas tareas
- Obtener una tarea específica
- Obtener todas las tareas
- Actualizar tareas existentes
- Eliminar tareas

## Tecnologías Utilizadas

- Node.js
- Express
- Chai (para pruebas)
- Supertest (para pruebas HTTP)
- JSON como formato de datos

## Instalación

1. Clona el repositorio:

```bash
   git clone https://github.com/JuanB-D/First_Proyect-TO-DO.git
```
2. Navega en el proyecto:

```bash
cd TO-DO-CRUD
```
3. Instala las dependencias:

```bash
npm install
```
## Uso
1. Inicia el servidor:

```bash
npm start
```
2. Crea una nueva tarea:

Método: POST
URL: /api/tasks
Cuerpo de la solicitud:

json
{
  "title": "Limpiar el piso",
  "description": "Limpiar el piso con la trapidora",
  "status": "pending",
  "dueDate": "30/03/2024",
  "priority": "low",
  "tags": ["Clean", "LowImportance"],
  "note": "Lavar el trapo después de usarlo"
}
Headers:

json
{
  "x-api-key": "np384_3jan_ii9"
}
 Ejemplo de uso con curl:

```bash
curl -X POST "http://tu-api.com/api/tasks" \
-H "Content-Type: application/json" \
-H "x-api-key: np384_3jan_ii9" \
-d '{
  "title": "Limpiar el piso",
  "description": "Limpiar el piso con la trapidora",
  "status": "pending",
  "dueDate": "30/03/2024",
  "priority": "low",
  "tags": ["Clean", "LowImportance"],
  "note": "Lavar el trapo después de usarlo"
}'
```
3. Obtener una tarea:

Método: GET
URL: /api/tasks/
Ejemplo de uso con curl:

```bash
curl -X GET "http://tu-api.com/api/tasks/Limpiar%20el%20piso" \
-H "x-api-key: np384_3jan_ii9"
```
4. Obtener todas las tareas:

Método: GET
URL: /api/tasks
Ejemplo de uso con curl:

```bash
curl -X GET "http://tu-api.com/api/tasks" \
-H "x-api-key: np384_3jan_ii9"
```
5.Actualizar una tarea:

Método: PATCH
URL: /api/tasks/
Cuerpo de la solicitud:

json
{
  "update": {
    "title": "Nuevo Título"
  }
}
Headers:

json
{
  "x-api-key": "np384_3jan_ii9"
}
 Ejemplo de uso con curl:

```bash
curl -X PATCH "http://tu-api.com/api/tasks/Limpiar%20el%20piso" \
-H "Content-Type: application/json" \
-H "x-api-key: np384_3jan_ii9" \
-d '{
  "update": {
    "title": "Nuevo Título"
  }
}'

```
6. Eliminar una tarea:

Método: DELETE
URL: /api/tasks/
Ejemplo de uso con curl:

``` bash
curl -X DELETE "http://tu-api.com/api/tasks/Limpiar%20el%20piso" \
-H "x-api-key: np384_3jan_ii9"
```
## Pruebas
Puedes probar la API usando herramientas como Postman, Thunderclient o curl. Asegúrate de incluir tu API key en las solicitudes.



Notas:

API Key: Asegúrate de que tu API key esté incluida en el encabezado x-api-key en cada solicitud.
Formato de respuesta: Todas las respuestas se envían en formato JSON.
O puedes usar el comando:



``` bash
npm test

```
para ejecutar las pruebas predeterminadas con Mocha del repositorio.



