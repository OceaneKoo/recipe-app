/** @format */

import React from "react";
import { dummyData } from "../assets/dummy-data/dummy-data";
//styling
import classes from "./CuisineRecipe.module.css";
//motion
import { motion } from "framer-motion";
//component
import BackArrow from "./BackArrow";
//router
import { Link } from "react-router-dom";
function CuisineRecipe({ id, name }) {
	let info = dummyData.filter((data) => data.name === name);
	const newArray = info[0].dishes;
	const recipe = newArray.filter((reci) => reci.id === id);
	console.log("recipe", recipe);
	const instructionArray = recipe[0].instructions.split(":");
	return (
		<div className={classes["container"]}>
			<Link to={`/${name}`}>
				<BackArrow />
			</Link>
			<div className={classes.grid}>
				<div
					className={classes.content}
					style={{ justifyContent: "flex-start" }}>
					<motion.img
						initial={{ x: 250 }}
						animate={{ x: 0 }}
						transition={{ duration: 1.5, type: "spring" }}
						src={recipe[0].img}
						alt=""
					/>
					<motion.table
						initial={{ x: -250 }}
						animate={{ x: 0 }}
						transition={{ duration: 1.5, type: "spring" }}
						className={classes["table-container"]}>
						<tr className={classes["table-header"]}>
							<th>Ingredients</th>
							<th>Amount</th>
						</tr>
						{recipe[0].ingredients.map((ingredient, index) => (
							<tr key={index}>
								<th>{ingredient.name}</th>
								<th>{ingredient.amount}</th>
							</tr>
						))}
					</motion.table>
				</div>
				<div className={classes.content}>
					<motion.div
						className={classes["recipe-container"]}
						initial={{ y: -250 }}
						animate={{ y: 0 }}
						transition={{ duration: 1.5, type: "spring" }}>
						<h1> {recipe[0].name}</h1>
						<h3>Instructions:</h3>
						<p>
							{instructionArray.map((inst) => (
								<li>{inst}</li>
							))}
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default CuisineRecipe;
