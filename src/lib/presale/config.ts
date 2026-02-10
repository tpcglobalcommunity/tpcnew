export const PRESALE_CONFIG = {
  totalSupply: 500_000_000,
  stagesCount: 20,
  supplyPerStage: 25_000_000,
  priceStartUsd: 0.0010,
  priceStepUsd: 0.0001,
  usdToIdrDisplay: 17000,
  // UI-only status (manual config for now)
  currentStageIndex: 1,          // LOCK manual for now (can be env later)
  soldTotalTpc: 0,               // LOCK manual for now (can be backend later)
} as const;
