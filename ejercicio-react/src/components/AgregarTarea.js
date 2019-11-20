import React, { useState } from 'react';
import axios from 'axios';

function AgregarProducto({ setRecargarTareas }) {
	//state
	const [tipoTarea, setTipoTarea] = useState('');
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [tipoDesarrollador, setTipoDesarrollador] = useState('');
	const [error, setError] = useState(false);

	// metodo para el button-radio
	const leerValorRadio = e => {
		setTipoDesarrollador(e.target.value);
	};

	// agregar el producto
	const agregarProducto = async e => {
		const date = new Date();

		const fechaActual = `${date.getDate()}/${date.getMonth() +
			1}/${date.getFullYear()}`;
		const horaActual = `${date.getHours()}:${(date.getMinutes() < 10
			? '0'
			: '') + date.getMinutes()}hs`;

		e.preventDefault();

		if (tipoTarea === '' || nombre === '' || tipoDesarrollador === '')
			setError(true);
		else {
			setError(false);

			// Crear nueva tarea
			try {
				const resultado = await axios.post('http://localhost:4000/tareas', {
					tipoTarea,
					nombre,
					apellido,
					tipoDesarrollador,
					fecha: fechaActual,
					hora: horaActual
				});
				console.log(resultado);
			} catch (error) {
				console.log(error);
			}

			setRecargarTareas(true);
		}
	};

	return (
		<div className='col-md-8 mx-auto '>
			<h1 className='text-center'>Agregar Nuevo Producto</h1>
			{/* injectamos como ternario el componente del error */}
			{error ? (
				<h1 className='text-center'>TODOS LOS CAMPOS SON OBLIGATORIOS</h1>
			) : null}
			<form onSubmit={agregarProducto} className='mt-5'>
				<div className='form-group'>
					<label>Tipo Tarea</label>
					<input
						type='text'
						className='form-control'
						onChange={e => setTipoTarea(e.target.value)}
					/>
				</div>

				<div className='form-group'>
					<label>Nombre del Desarrollador</label>
					<input
						type='text'
						className='form-control'
						onChange={e => setNombre(e.target.value)}
					/>
				</div>

				<div className='form-group'>
					<label>Apellido del Desarrollador</label>
					<input
						type='text'
						className='form-control'
						onChange={e => setApellido(e.target.value)}
					/>
				</div>

				<legend className='text-center'>Tipo desarrollador:</legend>
				<div className='text-center'>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='tipoDesarrollador'
							value='Full Stack'
							onChange={leerValorRadio}
						/>
						<label className='form-check-label'>Full Stack</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='tipoDesarrollador'
							value='Front End'
							onChange={leerValorRadio}
						/>
						<label className='form-check-label'>Front end</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='tipoDesarrollador'
							value='Back End'
							onChange={leerValorRadio}
						/>
						<label className='form-check-label'>Back end</label>
					</div>
				</div>

				<input
					type='submit'
					className='font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3'
					value='Agregar Tarea'
				/>
			</form>
		</div>
	);
}

export default AgregarProducto;
