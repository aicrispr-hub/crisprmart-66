export type DomainType = 'crisprmart' | 'aicrispr' | 'crisprtech';

export type MainTab = 
  | 'overview'
  | 'marketplace' 
  | 'ai-agents' 
  | 'digital-library' 
  | 'edtech-analysis' 
  | 'viral-scriptwriter' 
  | 'sgrna-tool' 
  | 'agro-simulator' 
  | 'vet-diagnostics' 
  | 'subscriptions';

export interface ProductKit {
  id: string;
  title: string;
  titleFa: string;
  domain: 'crisprmart';
  category: 'kits' | 'reagents' | 'software-license' | 'diagnostic-strips' | 'educational-pack';
  priceToman: number;
  originalPriceToman?: number;
  inStock: boolean;
  leadTimeDays: number;
  description: string;
  specifications: string[];
  applications: string[];
  eNamadApproved: boolean;
  biosafetyCategory: 'Class-I Exempt' | 'Class-II Research' | 'Diagnostic Only';
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
}

export interface AIAgentDefinition {
  id: string;
  name: string;
  codeName: string;
  specialty: string;
  description: string;
  targetOrganisms: string[];
  offlinePwaSupport: boolean;
  systemPromptPreset: string;
  sampleInput: string;
  sampleOutput: string;
  tokenCostPerRun: number;
  monthlySubscriptionTier: 'free' | 'pro' | 'enterprise';
  capabilities: string[];
}

export interface ResearchDocument {
  id: string;
  title: string;
  titleFa: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  category: 'agricultural-genetics' | 'veterinary-crispr' | 'regulatory-biosafety' | 'bioinformatics';
  abstractEn: string;
  abstractFa: string;
  keyFindings: string[];
  offlineAvailable: boolean;
  downloadUrl: string;
}

export interface CourseModule {
  number: number;
  title: string;
  titleFa: string;
  durationHours: number;
  learningOutcomes: string[];
  practicalDeliverable: string;
  dryLabTool: string;
  wetLabKitLink: string;
}

export interface InternationalCourseComparison {
  courseName: string;
  institution: string;
  platform: string;
  costUsd: number;
  iranianAccessibilityScore: number; // 0-10
  strengths: string[];
  criticalLimitationsForIran: string[];
}

export interface ViralScriptConcept {
  id: string;
  topicTitle: string;
  topicTitleFa: string;
  targetAudience: string;
  persianMetaphor: string;
  hookEn: string;
  hookFa: string;
  problemEn: string;
  problemFa: string;
  solutionEn: string;
  solutionFa: string;
  ctaEn: string;
  ctaFa: string;
  visualDirections: { timestamp: string; visual: string; textOverlay: string; audioCue: string }[];
}

export interface SgRnaTargetResult {
  id: string;
  sequence: string;
  pam: string;
  position: number;
  strand: '+' | '-';
  gcContent: number;
  onTargetScore: number;
  offTargetRisk: 'Low' | 'Moderate' | 'High';
  forwardOligo: string;
  reverseOligo: string;
  targetGene: string;
  organism: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  nameFa: string;
  priceTomanMonthly: number;
  priceTomanAnnual: number;
  description: string;
  targetUser: string;
  features: string[];
  popular?: boolean;
  apiTokensPerMonth: number;
  pwaOfflineAccess: boolean;
  crisprmartKitDiscountPct: number;
}
