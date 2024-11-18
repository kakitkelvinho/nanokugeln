export function RungeKutta4(x, y, dx, dydx) {
	// Calculates the next timestep using the RK4 algorithm
	// Returns y
	const k1 = dydx(x, y).map(d => d * dx);
	const k2 = dydx(x + dx / 2, y.map((yi, i) => yi + k1[i] / 2)).map(d => d * dx);
	const k3 = dydx(x + dx / 2, y.map((yi, i) => yi + k2[i] / 2)).map(d => d * dx);
	const k4 = dydx(x + dx, y.map((yi, i) => yi + k3[i])).map(d => d * dx);

	y.map((yi, i) => yi + (1 / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
	return y;
}

export function odeint(dydt, y0, t, args = []) {
	// Based on the scipy odeint solver
	// dydt: computes derivative of y at t
	// y0: initial condition
	// t: sequence of timepoints to solve
	// Note: How to check whether dydt is able to act on the same dimension as y0? Is this needed?
	const dt = t[1] - t[0];
	const n = t.length;
	const y = [y0,];
	for (let i = 1; i < n; i++) {
		let yNext = RungeKutta4(t[i - 1], y[i - 1], dt, (t, y) => dydt(t, y, ...args));
		y.push(yNext);
	}
	// Finally we transpose the solution
	const sol = [];
	y0.forEach(() => sol.push([]));
	sol.forEach((row, i) => y.forEach(element => row.push(element[i])));
	return sol
}
// To use, define the y function and the dydx function
