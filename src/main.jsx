import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.jsx'
import History from './History.jsx'
import FourOhFour from './FourOhFour.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/section1" element={<nav />} />
        <Route path="/section2" element={<nav />} />
        <Route path="/section3" element={<nav />} />
        <Route path="/landing" element={<nav />} />
        <Route path="/sources" element={<nav />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>);