import "./App.css";
import Homepage from "./Components/Homepage/Homepage";

import {Route, Routes} from 'react-router';
import Header from "./Components/Header/Header";
import BRPage from "./Components/BRPage/BRpage";

function App() {
	return <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/blue-revolution" element={<BRPage />} />
    </Routes>
  </div>;
}

export default App;
