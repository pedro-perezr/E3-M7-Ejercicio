require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

async function insertarTarea(titulo, descripcion) {
  const consulta = 'INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)';
  const valores = [titulo, descripcion];

  try {
    const resultado = await pool.query(consulta, valores);
    console.log(`Tarea "${titulo}" insertada. Filas afectadas: ${resultado.rowCount}`);
  } catch (error) {
    console.error('Error al insertar:', error.message);
  }
}

async function actualizarTarea(id, nuevoTitulo, nuevaDescripcion) {
  const consulta = 'UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3';
  const valores = [nuevoTitulo, nuevaDescripcion, id];

  try {
    const resultado = await pool.query(consulta, valores);
    console.log(`Tarea con ID ${id} actualizada. Filas afectadas: ${resultado.rowCount}`);
  } catch (error) {
    console.error('Error al actualizar:', error.message);
  }
}

async function eliminarTarea(id) {
  const consulta = 'DELETE FROM tareas WHERE id = $1';
  const valores = [id];

  try {
    const resultado = await pool.query(consulta, valores);
    console.log(`Tarea con ID ${id} eliminada. Filas afectadas: ${resultado.rowCount}`);
  } catch (error) {
    console.error('Error al eliminar:', error.message);
  }
}

async function main() {
  await insertarTarea('Nueva Tarea', 'Descripcion de la nueva tarea.');
  await actualizarTarea(1, 'Aprender PostgreSQL', 'Completar todos los ejercicios de la guia.');
  await eliminarTarea(2);

  await pool.end();
}

main();