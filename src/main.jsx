import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MathJaxContext } from 'better-react-mathjax';
import App from './App.jsx'
import './index.css'
import CalcAQ from './CalcAQ.jsx'
import FinesseCalc from './FinesseCalc.jsx';

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
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MathJaxContext config={config}>
      <FinesseCalc />
      <CalcAQ />
    </MathJaxContext>
  </StrictMode>,
)
