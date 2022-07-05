
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      < Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="favorites" element={<Favorites />} />
        </Routes>
    </>
  );
}

export default App;
