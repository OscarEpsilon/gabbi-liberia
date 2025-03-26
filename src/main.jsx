import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.jsx'
import History from './History.jsx'
import FourOhFour from './FourOhFour.jsx';
import Sources from './Sources.jsx';
import Landing from './Landing.jsx'

export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/section1" element={<nav />} />
        <Route path="/section2" element={<nav />} />
        <Route path="/section3" element={<nav />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>);