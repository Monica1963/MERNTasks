import React from "react";
import Tarea from "../tareas/Tarea";

const ListadoTareas = () => {
	const tareasProyectos = [
		{ nombre: "Elegir Color", estado: true },
		{ nombre: "Elegir Forma de pago", estado: true },
		{ nombre: "Elegir Hosting", estado: false },
		{ nombre: "Elegir Precio", estado: true },
	];
	return (
		<>
			<h2>Proyecto: Tienda Virtual</h2>
			<ul className="listado-tareas">
				{tareasProyectos.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasProyectos.map((tarea) => <Tarea tarea={tarea} />)
				)}
			</ul>

			<button type="button" className="btn btn-eliminar">
				Eliminar Proyecto &times;
			</button>
		</>
	);
};

export default ListadoTareas;
