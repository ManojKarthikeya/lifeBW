import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import BRPage from "./Components/BRPage/BRpage";
import Cepage from "./Components/Contribute/Cepage";
import Wcr from "./Components/WCR/Wcr";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/blue-revolution" element={<BRPage />} />
				<Route path="/contribute" element={<Cepage />} />
				<Route path='/AWCR' element={<Wcr/>}/>
			</Routes>
		</div>
	);
}

export default App;
