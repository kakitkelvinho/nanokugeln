import { odeint } from "./MathTools/odesolver";
import { linspace, arange } from "./MathTools/numjs";
import Plot from "react-plotly.js";
import { useState, useEffect } from "react";

function MathieuSolver({ a, q }) {

  const n = 100; // resolution
  const y0_1 = [1, 0];
  const y0_2 = [0, 1];
  const [solution1, setSolution1] = useState([[new Array(n).fill(0)], [new Array(n).fill(0)]])
  const [solution2, setSolution2] = useState([[new Array(n).fill(0)], [new Array(n).fill(0)]])

  console.log(`new a=${a} and q=${q}`);


  const t = linspace(0, Math.PI, n);

  function dydt(t, y, a, q) {
    return [y[1], -(a - 2 * q * Math.cos(2 * t)) * y[0]];
  }


  useEffect(() => {
    console.log("Recomputing solution with a =", a, "and q =", q);
    setSolution1(odeint(dydt, y0_1, t, [a, q]));
    setSolution2(odeint(dydt, y0_2, t, [a, q]));
    console.log(`Solution 1: ${solution1}`);
    console.log(`Solution 2: ${solution2}`);
  }, [a, q]);

  return (
    <div>
      <Plot
        data={
          [
            {
              x: t,
              y: solution1[0],
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
