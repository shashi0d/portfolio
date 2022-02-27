import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/portfolio" element={<Homepage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;
