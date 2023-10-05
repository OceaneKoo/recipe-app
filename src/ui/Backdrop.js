/** @format */
import React from "react";
import classes from "./Backdrop.module.css";
function Backdrop(props) {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>{props.children}</div>
		</div>
	);
}

export default Backdrop;
