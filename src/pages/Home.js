/** @format */

import React from "react";
import classes from "./Home.module.css";
import Backdrop from "../ui/Backdrop";
import { GiCook } from "react-icons/gi";
//framer motion
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
	return (
		<Backdrop>
			<div className={classes["container"]}>
				<div className={classes["wrapper"]}>
					<GiCook className={classes["logo"]} />
					<div className={classes["title"]}>
						<h1>RecipeRise</h1>
						<p>Effortless and Tasty Recipes</p>
					</div>
				</div>
				<div className={classes["grid"]}>
					<div className={`${classes["content"]} ${classes["first-grid"]}`}>
						<div className={classes["text"]}>
							<h1>Italian Cuisines</h1>
							<p>
								Italian cuisine is a celebration of simplicity, quality,and the
								joy of savoring good food with loved ones
							</p>
							<Link to="/italian">
								<motion.button whileHover={{ scale: 1.3 }}>
									Discover more
								</motion.button>
							</Link>
						</div>
					</div>
					<div className={`${classes["content"]} ${classes["second-grid"]}`}>
						<div className={classes["text"]}>
							<h1>Thai Cuisines</h1>
							<p>
								Thai cuisine is a delightful mix of flavors, aromas, and
								textures, making it a favorite among food enthusiasts around the
								world.
							</p>
							<Link to="/thai">
								<motion.button whileHover={{ scale: 1.3 }}>
									Discover more
								</motion.button>
							</Link>
						</div>
					</div>
					<div className={`${classes["content"]} ${classes["third-grid"]}`}>
						<div className={classes["text"]}>
							<h1>French Cuisines</h1>
							<p>
								French cuisine is known for its emphasis on quality, tradition,
								and attention to detail. It has earned a reputation as one of
								the cornerstones of global gastronomy.
							</p>

							<Link to="/french">
								<motion.button whileHover={{ scale: 1.3 }}>
									Discover more
								</motion.button>
							</Link>
						</div>
					</div>
					<div className={`${classes["content"]} ${classes["fourth-grid"]}`}>
						<div className={classes["text"]}>
							<h1>Japanese Cuisines</h1>
							<p>
								Japanese cuisine is not only about taste; it's an art form that
								emphasizes balance, harmony, and appreciation for nature's
								bounty.
							</p>
							<Link to="/japanese">
								<motion.button whileHover={{ scale: 1.3 }}>
									Discover more
								</motion.button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Backdrop>
	);
}

export default Home;
