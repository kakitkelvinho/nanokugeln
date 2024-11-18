import React from "react";
import { useState } from 'react'
import { MathJax } from 'better-react-mathjax';
import MathieuSolver from "./MathieuSolver";

const prefactor = [1, 1, -2]

const calc_aq = (mass, r0, z0, endcapvolt, rfvolt, trapfreq, Z, axis) => {
  if (axis < 0 || axis > 2) {
    throw new Error('Invalid axis value. Must be 0, 1, or 2.');
  }

  const e = 1.60217662e-19;
  const a = prefactor[axis] * (8 * e * Z * endcapvolt) / (mass * (trapfreq ** 2) * (r0 ** 2 + 2 * z0 ** 2));
  const q = prefactor[axis] * (-4 * e * Z * rfvolt) / (mass * (trapfreq ** 2) * (r0 ** 2 + 2 * z0 ** 2));
  console.log(a)
  console.log(q)
  return { a, q }
}

function CalcAQ() {
  const [mass, setMass] = useState(1.8e-18); // mass of particle, in kg
  //const [radius, setRadius] = useState(150e-9) // radius of particle, in mm
  const [r0, setR0] = useState(0.25e-3); // center of trap to electrode
  const [z0, setZ0] = useState(2e-3); // center of trap to endcap
  const [Z, setZ] = useState(100); // charge of particle, integer
  const [trapfreq, setTrapfreq] = useState(18e3); // Trap drive freq, in Hz
  const [endcapvolt, setEndcapvolt] = useState(50); // end cap voltage
  const [rfvolt, setRfvolt] = useState(200); // rf voltage
  const [a, setA] = useState(0);
  const [q, setQ] = useState(0);

  // Function to calculate a and q when button is pressed
  const handleCalculate = () => {
    const result = calc_aq(mass, r0, z0, endcapvolt, rfvolt, trapfreq, Z, 2); // You can change the axis if needed
    setA(result.a);
    setQ(result.q);
    console.log("button clicked!");
  };

  return (
    <>
      <h1>Stability variables calculator</h1>
      <div>
        <label>Particle mass: <input type="number" step="any" value={mass} onChange={e => setMass(parseFloat(e.target.value))} /></label>
        <label>Trap frequency: <input type="number" value={trapfreq} onChange={e => setTrapfreq(parseFloat(e.target.value))} /></label>
        <label><MathJax>{`$r_0$ (trap center to electrode):`}<input type="number" value={r0} onChange={e => setR0(parseFloat(e.target.value))} /></MathJax></label>
        <label>z_0 (trap center to endcap): <input type="number" value={z0} onChange={e => setZ0(parseFloat(e.target.value))} /></label>
        <label>Number of charges:  <input type="number" value={Z} onChange={e => setZ(parseFloat(e.target.value))} /></label>
        <label>Endcap voltage:  <input type="number" value={endcapvolt} onChange={e => setEndcapvolt(parseFloat(e.target.value))} /></label>
        <label>Drive amplitude voltage:  <input type="number" value={rfvolt} onChange={e => setRfvolt(parseFloat(e.target.value))} /></label>
      </div >

      <div>
        <button onClick={handleCalculate}>Calculate!</button>
      </div>

      <div>
        <p><MathJax>{`\\(a: ${a}\\)`}</MathJax></p>
        <p><MathJax>{`\\(q: ${q}\\)`}</MathJax></p>
      </div>

      <MathieuSolver a={a} q={q} />
    </>
  )
}

export default CalcAQ
