import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdventurePage from "./pages/AdventurePage/AdventurePage";
import './styles/global.scss';
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={<HomePage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/adventure' element={<AdventurePage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
