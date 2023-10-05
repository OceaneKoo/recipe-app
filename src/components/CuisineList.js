/** @format */

import React from "react";
//data
import { dummyData } from "../assets/dummy-data/dummy-data";
//styling
import classes from "./CuisineList.module.css";
//router
import { Link } from "react-router-dom";
//framer motion
import { motion } from "framer-motion";
//commponent
import BackArrow from "./BackArrow";
function CuisineList({ name }) {
	const cuisineArray = dummyData.filter((data) => data.name === name);

	return (
		<section>
			<Link to="/">
				<BackArrow />
			</Link>
			<div className={classes["wrapper"]}>
				<div className={classes["container"]}>
					{cuisineArray[0].dishes.map((dish, index) => (
						<div key={index}>
							<motion.div className={classes["image"]}>
								<motion.div
									whileHover={{ scale: 1.08, backgroundColor: "#fffcf2" }}
									className={classes["image-container"]}>
									<motion.img
										initial={{ x: 200 }}
										animate={{ x: 0 }}
										transition={{ duration: 1.2, type: "spring" }}
										src={dish.img}
										alt=""
									/>
									<div className={classes["about-cuisine"]}>
										<h1>{dish.name}</h1> <p>{dish.about}</p>
										<div className={classes["info"]}>
											<div>
												<p>{`calories : ${dish.calories}kcal`}</p>
												<p>{`time : ${dish.time}`}</p>
											</div>
											<div>
												<p>{`${dish.difficulty}`}</p>
												<p>{`rating(${dish.rating})`}</p>
											</div>
										</div>
										<Link
											to={`${dish.id}`}
											state={{ name: `${cuisineArray[0].name}` }}>
											<motion.button
												whileHover={{ backgroundColor: "#457b9d" }}>
												See Recipes
											</motion.button>
										</Link>
									</div>
								</motion.div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default CuisineList;
