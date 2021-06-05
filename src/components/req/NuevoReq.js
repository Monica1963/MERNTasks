import React, { useState } from "react";

const NuevoReq = () => {
	const [rq, setRq] = useState({
		título: "",
	});

	const { título } = rq;

	//lee contenido del input
	const onChangeRq = (e) => {
		setRq({
			...rq,
			[e.target.name]: e.target.value,
		});
	};
	//nuevo Rq
	const onSubmitReq = (e) => {
		e.preventDefault();

		//validar el rq

		//agregar al state

		//reiniciar el form
	};

	return (
		<>
			<button type="button" className="btn btn-block btn-primario">
				Nuevo Requerimiento
			</button>

			<form className="formulario-nuevo-proyecto" onSubmit={onSubmitReq}>
				<input
					type="text"
					className="input-text"
					placeholder="Título"
					name="título"
					value={título}
					onChange={onChangeRq}
				/>

				<input
					type="submit"
					className="btn btn-block btn-primario"
					value="Agregar requerimiento"
				/>
			</form>
		</>
	);
};

export default NuevoReq;
