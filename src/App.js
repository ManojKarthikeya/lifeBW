import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import BRPage from "./Components/BRPage/BRpage";
import Cepage from "./Components/Contribute/Cepage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/blue-revolution" element={<BRPage />} />
				<Route path="/contribute" element={<Cepage />} />
			</Routes>
			<p>
				Delevoped by Sai Vishal, Sai Supreeth, Abdul Rahil, Rushi
				Bhargav - IT Second year
			</p>
		</div>
	);
}

export default App;
