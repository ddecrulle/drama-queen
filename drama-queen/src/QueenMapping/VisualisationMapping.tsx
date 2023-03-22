import { useSearchParams } from "react-router-dom";

function VisualisationMapping() {
  const [searchParams,] = useSearchParams();  // TODO add mapping rules
  console.log(searchParams)
  return searchParams.get("queen-version") === "1" ? <queen-app /> : <queen-v2-app />
}

export default VisualisationMapping
