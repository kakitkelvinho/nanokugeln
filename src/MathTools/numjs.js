export function linspace(start, stop, num) {
	// implement endpoint in the future
	if (num <= 0) return [];
	if (num === 1) return [start];
	const dx = (stop - start) / (num - 1);
	return Array.from({ length: num }, (_, i) => start + i * dx)
}


export function arange(start, stop, step = 1) {
	if (step === 0) throw new Error("Step cannot be zero.")
	const a = [];
	let current = start;
	while (step > 0 && current < stop || step < 0 && current > stop) {
		a.push(current);
		current += step;
	}
	return a
}
