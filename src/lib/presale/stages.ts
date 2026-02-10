import { PRESALE_CONFIG } from './config';

export { PRESALE_CONFIG };

export interface PresaleStage {
  index: number;
  stage: string;
  priceUsd: string;
  priceIdr: number;
  supply: number;
  status: string;
}

export function getPresaleStages(usdToIdr: number = PRESALE_CONFIG.usdToIdrDisplay): PresaleStage[] {
  const { stagesCount, supplyPerStage, priceStartUsd, priceStepUsd, currentStageIndex } = PRESALE_CONFIG;
  
  return Array.from({ length: stagesCount }, (_, i) => {
    const stageNumber = i + 1;
    const priceUsd = priceStartUsd + (stageNumber - 1) * priceStepUsd;
    const priceIdr = Math.round(priceUsd * usdToIdr);
    
    // Status based on current stage index
    let status: string;
    if (stageNumber < currentStageIndex) {
      status = 'Completed';
    } else if (stageNumber === currentStageIndex) {
      status = 'Active';
    } else {
      status = 'Coming Soon';
    }
    
    return {
      index: stageNumber,
      stage: `Stage ${stageNumber}`,
      priceUsd: priceUsd.toFixed(4),
      priceIdr,
      supply: supplyPerStage,
      status
    };
  });
}

export const PRESALE_CONSTANTS = {
  TOTAL_SUPPLY: PRESALE_CONFIG.totalSupply,
  SUPPLY_PER_STAGE: PRESALE_CONFIG.supplyPerStage,
  BASE_PRICE_USD: PRESALE_CONFIG.priceStartUsd,
  FINAL_PRICE_USD: PRESALE_CONFIG.priceStartUsd + (PRESALE_CONFIG.stagesCount - 1) * PRESALE_CONFIG.priceStepUsd,
  USD_TO_IDR_RATE: PRESALE_CONFIG.usdToIdrDisplay
};
