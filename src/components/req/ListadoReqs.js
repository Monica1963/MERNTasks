import React from "react";
import Req from "./Req";

const Listado = () => {
	const reqs = [
		{ nombre: "Tienda", id: "1" },
		{ nombre: "dklafjd", id: "2" },
		{ nombre: "aaaaaa", id: "3" },
	];
	return (
		<ul className="listado-proyectos">
			{reqs.map((req, i) => (
				<Req key={i} req={req} />
			))}
		</ul>
	);
};

export default Listado;
