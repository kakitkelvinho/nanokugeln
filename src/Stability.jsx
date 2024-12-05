import CalcAQ from "./CalcAQ";
import MathieuSolver from "./MathieuSolver";

export default function Stability() {
  const [a, setA] = useState(0);
  const [q, setQ] = useState(0);
  const handleCalculate = ({ a, q }) => {
    const result = calc_aq(mass, r0, z0, endcapvolt, rfvolt, trapfreq, Z, 2); // You can change the axis if needed
    return result
  };


  return (
  
  )
}
