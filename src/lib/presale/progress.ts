import { PRESALE_CONFIG } from './config';

export function getPresaleProgress() {
  const { totalSupply, soldTotalTpc, currentStageIndex, supplyPerStage } = PRESALE_CONFIG;

  // Clamp sold to valid range
  const sold = Math.max(0, Math.min(Number(soldTotalTpc), Number(totalSupply)));
  const remaining = Number(totalSupply) - sold;

  // Current stage sold estimation (UI-only)
  const soldBeforeCurrentStage = (currentStageIndex - 1) * Number(supplyPerStage);
  const soldInCurrentStage = Math.max(0, Math.min(Number(soldTotalTpc) - soldBeforeCurrentStage, Number(supplyPerStage)));
  const remainingInCurrentStage = Number(supplyPerStage) - soldInCurrentStage;
  const pctCurrentStage = soldInCurrentStage / Number(supplyPerStage);

  return {
    sold,
    remaining,
    pctTotal: Number(totalSupply) === 0 ? 0 : sold / Number(totalSupply),
    currentStageIndex,
    supplyPerStage,
    soldInCurrentStage,
    remainingInCurrentStage,
    pctCurrentStage,
  };
}
