import React from "react";
import Sidebar from "../commons/Sidebar";
import Barra from "../commons/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

const Reqs = () => {
	return (
		<div className="contenedor-app">
			<Sidebar />
			<div className="seccion-principal">
				<Barra />
				<main>
					<FormTarea />
					<div className="contenedor-tareas">
						<ListadoTareas />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Reqs;
