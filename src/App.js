import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './styles/global.scss';
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
