/** @format */

import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CuisineRecipe from "../components/CuisineRecipe";
function RecipePage() {
	const location = useLocation();
	const params = useParams();

	return (
		<CuisineRecipe
			id={params.cuisineId}
			name={location.state.name}
		/>
	);
}

export default RecipePage;
