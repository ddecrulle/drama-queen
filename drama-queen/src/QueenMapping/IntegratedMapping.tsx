import { useParams } from 'react-router-dom'


function IntegratedMapping() {
  const { surveyId, campaignId } = useParams()
  // TODO add mapping rules
  return surveyId === "simpsons" ? <queen-app /> : <queen-v2-app />
}

export default IntegratedMapping
