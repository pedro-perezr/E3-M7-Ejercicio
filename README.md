E3-M7 Ejercicio

Gestor de Tareas CRUD 🛠️
Objetivo: Desarrollar un conjunto de funciones para manipular registros en una base de datos. Implementarás las operaciones de Crear (INSERT), Actualizar (UPDATE) y Borrar (DELETE), utilizando consultas parametrizadas para garantizar la seguridad y manejando la respuesta de la base de datos para confirmar que las operaciones fueron exitosas.

Prerrequisitos:

Tener tu conexión a la base de datos configurada (pool).

Necesitas una tabla tareas. Conéctate a tu base de datos y ejecuta la siguiente sentencia SQL para crearla:

-- Crear la tabla de tareas
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    completada BOOLEAN DEFAULT FALSE
);

-- Insertar una tarea inicial de ejemplo
INSERT INTO tareas (titulo, descripcion) VALUES
('Aprender Node.js', 'Completar los ejercicios de la guía.');

