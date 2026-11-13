interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredCount: number;
}

export function ProgressBar({
  currentQuestion,
  totalQuestions,
  answeredCount,
}: ProgressBarProps) {
  const clampedCurrent = Math.min(Math.max(currentQuestion, 1), totalQuestions);
  const progressPercent = (clampedCurrent / totalQuestions) * 100;

  return (
    <div className="sticky top-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E5E5E5]">
      <div className="max-w-[640px] mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <span className="text-xs font-semibold text-[#191919] tabular-nums">
            Question {clampedCurrent} of {totalQuestions}
          </span>
          <span className="text-xs text-[#707070] tabular-nums">
            {answeredCount} of {totalQuestions} answered
          </span>
        </div>
        <div
          role="progressbar"
          aria-label="Survey progress"
          aria-valuenow={clampedCurrent}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          className="h-1.5 w-full bg-[#E5E5E5] rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-[#3665F3] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
