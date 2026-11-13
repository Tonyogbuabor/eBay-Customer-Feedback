import { ReactNode } from 'react';

interface QuestionCardProps {
  questionNumber: number;
  hasError?: boolean;
  onActivate?: (questionNumber: number) => void;
  cardRef?: (el: HTMLElement | null) => void;
  children: ReactNode;
}

export function QuestionCard({
  questionNumber,
  hasError = false,
  onActivate,
  cardRef,
  children,
}: QuestionCardProps) {
  return (
    <section
      ref={cardRef}
      data-question-number={questionNumber}
      onFocusCapture={() => onActivate?.(questionNumber)}
      className={`bg-[#FFFFFF] border rounded-lg p-4 sm:p-6 scroll-mt-20 transition-colors duration-150 ${
        hasError ? 'border-[#C6393B]' : 'border-[#E5E5E5]'
      }`}
    >
      {children}
    </section>
  );
}
