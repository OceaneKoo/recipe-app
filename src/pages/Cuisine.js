/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import CuisineList from "../components/CuisineList";
function Cuisine() {
	const params = useParams();
	return <CuisineList name={params.cuisines} />;
}

export default Cuisine;
