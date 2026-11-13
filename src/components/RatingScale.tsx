import { AlertCircle } from 'lucide-react';
import { FocusEvent, RefObject } from 'react';

interface RatingScaleProps {
  id: 'Q1' | 'Q7';
  questionText: string;
  required?: boolean;
  value: number | null;
  minLabel: string;
  maxLabel: string;
  error?: string;
  firstInputRef?: RefObject<HTMLInputElement | null>;
  onChange: (value: number) => void;
  onBlurValidate: () => void;
}

const RATINGS = [1, 2, 3, 4, 5];

export function RatingScale({
  id,
  questionText,
  required = true,
  value,
  minLabel,
  maxLabel,
  error,
  firstInputRef,
  onChange,
  onBlurValidate,
}: RatingScaleProps) {
  const errorId = `${id}-error`;

  const handleFieldsetBlur = (e: FocusEvent<HTMLFieldSetElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      onBlurValidate();
    }
  };

  return (
    <fieldset
      onBlur={handleFieldsetBlur}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? errorId : undefined}
      className="m-0 p-0 border-0 min-w-0"
    >
      <legend className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#191919] mb-4 w-full">
        {questionText}
        {required && (
          <>
            <span className="text-[#C6393B] ml-1" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </legend>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
        {RATINGS.map((rating, index) => {
          const isSelected = value === rating;
          const inputId = `${id}-option-${rating}`;

          return (
            <label
              key={rating}
              htmlFor={inputId}
              className="relative block cursor-pointer"
            >
              <input
                ref={index === 0 ? firstInputRef : undefined}
                id={inputId}
                type="radio"
                name={id}
                value={rating}
                checked={isSelected}
                onChange={() => onChange(rating)}
                className="sr-only peer"
              />
              <span
                className={`min-h-[48px] min-w-[44px] w-full rounded-lg border text-base font-semibold tabular-nums flex items-center justify-center select-none transition-colors duration-150 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[#3665F3] peer-focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'bg-[#3665F3] border-[#3665F3] text-[#FFFFFF]'
                    : 'bg-[#FFFFFF] border-[#E5E5E5] text-[#191919] hover:border-[#3665F3] hover:bg-[#F5F8FF]'
                }`}
              >
                {rating}
              </span>
            </label>
          );
        })}
      </div>

      <div className="flex items-start justify-between gap-4 mt-2.5 text-xs sm:text-sm text-[#707070]">
        <span>1 = {minLabel}</span>
        <span className="text-right">5 = {maxLabel}</span>
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2.5 text-sm font-medium text-[#C6393B] flex items-center gap-1.5"
        >
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </fieldset>
  );
}
