import React from "react";
import NuevoReq from "../req/NuevoReq";
import ListadoReqs from "../req/ListadoReqs";

function Sidebar() {
	return (
		<aside>
			<h1>
				MERN<span>Tasks</span>
			</h1>
			<NuevoReq />
			<div className="proyectos">
				<h2>Mis pendientes</h2>
				<ListadoReqs />
			</div>
		</aside>
	);
}

export default Sidebar;
