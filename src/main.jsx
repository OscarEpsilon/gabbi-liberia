import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.jsx'
import History from './History.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/section1" element={<nav />} />
        <Route path="/section2" element={<nav />} />
        <Route path="/section3" element={<nav />} />
        <Route path="*" element={<nav />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>);