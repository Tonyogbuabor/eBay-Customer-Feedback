import { AlertCircle } from 'lucide-react';
import { FocusEvent, RefObject } from 'react';
import { Q5Option } from '../types/survey';

interface RadioGroupFieldProps {
  id: 'Q5';
  questionText: string;
  required?: boolean;
  options: readonly Q5Option[];
  value: Q5Option | '';
  error?: string;
  firstInputRef?: RefObject<HTMLInputElement | null>;
  onChange: (value: Q5Option) => void;
  onBlurValidate: () => void;
}

export function RadioGroupField({
  id,
  questionText,
  required = true,
  options,
  value,
  error,
  firstInputRef,
  onChange,
  onBlurValidate,
}: RadioGroupFieldProps) {
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

      <div className="space-y-2.5">
        {options.map((option, index) => {
          const isSelected = value === option;
          const inputId = `${id}-option-${index}`;

          return (
            <label
              key={option}
              htmlFor={inputId}
              className="relative block cursor-pointer"
            >
              <input
                ref={index === 0 ? firstInputRef : undefined}
                id={inputId}
                type="radio"
                name={id}
                value={option}
                checked={isSelected}
                onChange={() => onChange(option)}
                className="sr-only peer"
              />
              <span
                className={`min-h-[48px] w-full rounded-lg border px-4 py-3 flex items-center gap-3 text-[16px] font-medium transition-colors duration-150 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[#3665F3] peer-focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'bg-[#F5F8FF] border-[#3665F3] text-[#191919]'
                    : 'bg-[#FFFFFF] border-[#E5E5E5] text-[#191919] hover:border-[#3665F3] hover:bg-[#F5F8FF]/50'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'border-[#3665F3] bg-[#FFFFFF]'
                      : 'border-[#707070] bg-[#FFFFFF]'
                  }`}
                >
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3665F3]" />
                  )}
                </span>
                <span>{option}</span>
              </span>
            </label>
          );
        })}
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
