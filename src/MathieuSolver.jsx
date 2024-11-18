import { odeint } from "./MathTools/odesolver";
import { linspace, arange } from "./MathTools/numjs";
import Plot from "react-plotly.js";
import { useState, useEffect } from "react";

function MathieuSolver({ a, q }) {

  const n = 100; // resolution
  const y0_1 = [1, 0];
  const y0_2 = [0, 1];

  console.log(`new a=${a} and q=${q}`);


  const t = linspace(0, Math.PI, n);

  function dydt(t, y, a, q) {
    return [y[1], -(a - 2 * q * Math.cos(2 * t))];
  }


  useEffect(() => {
    console.log("Recomputing solution with a =", a, "and q =", q);
    if (a !== 0 || q !== 0) { // Optional check for valid inputs
      const sol1 = odeint(dydt, y0_1, t, [a, q]);
      setSolution(sol1.map((arr) => arr[0])); // Extract the first component (y values)
    }
  }, [a, q]);

  return (
    <div>
      <Plot
        data={
          [
            {
              x: t,
              y: sol1[0],
              mode: "lines+markers"
            }
          ]
        }
        layout={{ title: "Solution" }}
      />
    </div>
  )
}

export default MathieuSolver
