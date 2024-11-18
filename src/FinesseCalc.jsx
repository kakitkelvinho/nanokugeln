import React from "react";
import { useState } from 'react'
import { MathJax } from 'better-react-mathjax';



function FinesseCalc() {
  const c = 299792458;

  const [cavlength, setCavlength] = useState(20e-3);
  const [tau, setTau] = useState(2e-6);
  const [finesse, setFinesse] = useState(0);
  const [tauUnc, setTauUnc] = useState(0);
  const [fErr, setFerr] = useState(0);

  const handleCalculate = () => {
    const parsedLength = parseFloat(cavlength);
    const parsedTau = parseFloat(tau);
    const parsedTauUnc = parseFloat(tauUnc);
    const f = Math.PI * c * tau / cavlength;
    const ferr = (tauUnc / tau) * f
    setFinesse(f);
    setFerr(ferr);
  }


  return (
    <div>
      <h1>Finesse from decay time</h1>
      <div>
        <MathJax>
          {`The finesse is calculated by: \\[F = \\frac{\\pi c l}{\\tau},\\] where \\(c, l, \\tau\\) are the speed of light, the cavity length and the decay time respectively.`}
        </MathJax>
      </div>
      <label>Cavity Length: <input type="text" value={cavlength} onChange={e => setCavlength(e.target.value)} /> </label>
      <label>Decay time: <input type="text" value={tau} onChange={e => setTau(e.target.value)} /> </label>
      <label>Decay time uncertainty: <input type="text" value={tauUnc} onChange={e => setTauUnc(e.target.value)} /> </label>
      <button onClick={handleCalculate}>Calculate Finesse</button>
      <p>Finesse: {finesse} </p>
      <p>Error: {fErr} ({100 * fErr / finesse}%)</p>
      <p>Uncertainty calculated by using the fractional error of the decay time, not quoted to the right significant figures so please do it yourself.</p>
    </div>
  )
}

export default FinesseCalc




