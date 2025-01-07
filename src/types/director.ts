export interface DirectorProfile {
  tokenId: string;
  boardPosition: number;
  trustScore: number;
  metrics: {
    transactionSuccess: number;
    delegationStability: number;
    governanceParticipation: number;
    valueManagement: number;
    communityTrust: number;
    proposalQuality: number;
  };
  activities: Activity[];
}

export interface Activity {
  id: string;
  type: 'transaction' | 'delegation' | 'vote';
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface TrustMetric {
  label: string;
  value: number;
  percentage: number;
  description: string;
}
