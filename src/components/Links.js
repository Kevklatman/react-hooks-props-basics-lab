import React from "react";

const Links = (props) => {
	console.log(props);
	return (
		<div>
			<h3>Links</h3>
			<h3>
				<a href={props.github}>{props.github}</a>
			</h3>
			<h3>
				<a href={props.linkedin}>{props.linkedin}</a>
			</h3>
		</div>
	);
};

export default Links;