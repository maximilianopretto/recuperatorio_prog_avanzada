import React, { Fragment } from 'react';
import Tarea from './Tarea';

function ListadoTareas({ tareas, setRecargarTareas }) {
	return (
		<Fragment>
			<h1 className='text-center'>TAREAS</h1>
			{tareas.map(tarea => (
				<Tarea
					key={tarea.id}
					tarea={tarea}
					setRecargarTareas={setRecargarTareas}
				/>
			))}
		</Fragment>
	);
}

export default ListadoTareas;
