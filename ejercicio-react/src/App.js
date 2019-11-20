import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AgregarTarea from './components/AgregarTarea';
import ListadoTareas from './components/ListadoTareas';

function App() {
	const [tareas, setTareas] = useState([]);
	const [recargarTareas, setRecargarTareas] = useState(true);

	useEffect(() => {
		if (recargarTareas) {
			const actualizarTareas = async () => {
				const resultado = await axios.get('http://localhost:4000/tareas');
				setTareas(resultado.data);
				console.log(tareas);
			};

			actualizarTareas();
		}

		setRecargarTareas(false);
	}, [recargarTareas]);

	return (
		<div>
			<AgregarTarea setRecargarTareas={setRecargarTareas} />
			<ListadoTareas tareas={tareas} setRecargarTareas={setRecargarTareas} />
		</div>
	);
}

export default App;
