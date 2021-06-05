import React from "react";

const req = ({ req }) => {
	return (
		<li>
			<button type="button" className="btn btn-blank">
				{req.nombre}
			</button>
		</li>
	);
};

export default req;
