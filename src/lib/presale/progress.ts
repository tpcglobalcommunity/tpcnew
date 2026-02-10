import { PRESALE_CONFIG } from './config';

export function getPresaleProgress() {
  const { totalSupply, soldTotalTpc, currentStageIndex, supplyPerStage } = PRESALE_CONFIG;

  // Clamp sold to valid range
  const sold = Math.max(0, Math.min(soldTotalTpc, totalSupply));
  const remaining = totalSupply - sold;

  // Current stage sold estimation (UI-only)
  const soldBeforeCurrentStage = (currentStageIndex - 1) * supplyPerStage;
  const soldInCurrentStage = Math.max(0, Math.min(soldTotalTpc - soldBeforeCurrentStage, supplyPerStage));
  const remainingInCurrentStage = supplyPerStage - soldInCurrentStage;
  const pctCurrentStage = soldInCurrentStage / supplyPerStage;

  return {
    sold,
    remaining,
    pctTotal: totalSupply === 0 ? 0 : sold / totalSupply,
    currentStageIndex,
    supplyPerStage,
    soldInCurrentStage,
    remainingInCurrentStage,
    pctCurrentStage,
  };
}
