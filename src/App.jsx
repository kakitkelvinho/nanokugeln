import './App.css'
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CalcAQ from './CalcAQ.jsx'
import FinesseCalc from './FinesseCalc.jsx';
import Navbar from './components/Navbar.jsx';

const config = {
  "fast-preview": {
    disabled: true
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  messageStyle: "none"
};

function App() {

  return (
    <MathJaxContext config={config}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finesse" element={<FinesseCalc />} />
          <Route path="/stability" element={<CalcAQ />} />
        </Routes>
      </Router>
    </MathJaxContext>
  );
}

function Home() {
  return <h2>Welcome!</h2>;
}
export default App
