import React from 'react';
import axios from 'axios';

function Tarea({ tarea, setRecargarTareas }) {
	const eliminarTarea = id => {
		console.log('eliminando', id);
		try {
			const url = `http://localhost:4000/tareas/${id}`;
			axios.delete(url);

			//Actualizar las tareas en app.
			setRecargarTareas(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<p>Tipo tarea: {tarea.tipoTarea} </p>
			<p>Nombre del desarrolador: {tarea.nombre} </p>
			<p>Apellido del desarrolador: {tarea.apellido} </p>
			<p>Tipo de desarrolador: {tarea.tipoDesarrollador} </p>
			<p>Fecha de creación de la tarea: {tarea.fecha} </p>
			<p>Hora de creación de la tarea: {tarea.hora} </p>
			<div>
				<button
					type='button'
					className='btn btn-danger'
					onClick={() => eliminarTarea(tarea.id)}
				>
					Eliminar &times;
				</button>
			</div>
		</div>
	);
}

export default Tarea;
