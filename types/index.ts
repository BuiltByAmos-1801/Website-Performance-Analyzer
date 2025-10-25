export interface PageSpeedResult {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  url: string;
  loadingExperience?: {
    overall_category: string;
    metrics: {
      FIRST_CONTENTFUL_PAINT_MS: {
        percentile: number;
        category: string;
      };
      FIRST_INPUT_DELAY_MS: {
        percentile: number;
        category: string;
      };
    };
  };
}

export interface MetricCardProps {
  title: string;
  score: number;
  description: string;
  className?: string;
}

export interface AnalyzeResponse {
  success: boolean;
  data?: PageSpeedResult;
  error?: string;
}