import { useParams } from 'react-router-dom'


function IntegratedMapping() {
  const { campaignId } = useParams()
  return campaignId && import.meta.env.VITE_CAMPAIGN_ID_V2.includes(campaignId) ? <queen-v2-app /> : <queen-app />
}

export default IntegratedMapping
