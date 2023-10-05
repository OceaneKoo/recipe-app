/** @format */

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//styling
import classes from "./BackArrow.module.css";
function BackArrow() {
	return (
		<div className={classes["container"]}>
			<ArrowBackIcon className={classes["icon"]} />
		</div>
	);
}

export default BackArrow;
