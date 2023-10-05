/** @format */
import Home from "./pages/Home";
//component
import Cuisine from "./pages/Cuisine";
import RecipePage from "./pages/RecipePage";
//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/:cuisines",
			element: <Cuisine />,
		},
		{
			path: "/:cuisines/:cuisineId",
			element: <RecipePage />,
		},
	]);
	return <RouterProvider router={route}></RouterProvider>;
}

export default App;
