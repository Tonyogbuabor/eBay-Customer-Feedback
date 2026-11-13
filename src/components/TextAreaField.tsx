import { AlertCircle } from 'lucide-react';
import { RefObject } from 'react';

interface TextAreaFieldProps {
  id: 'Q2' | 'Q4' | 'Q6' | 'Q9' | 'Q11';
  questionText: string;
  required?: boolean;
  value: string;
  maxLength?: number;
  showCounter?: boolean;
  error?: string;
  textareaRef?: RefObject<HTMLTextAreaElement | null>;
  onChange: (value: string) => void;
  onBlurValidate: () => void;
}

export function TextAreaField({
  id,
  questionText,
  required = false,
  value,
  maxLength = 1000,
  showCounter = false,
  error,
  textareaRef,
  onChange,
  onBlurValidate,
}: TextAreaFieldProps) {
  const errorId = `${id}-error`;
  const counterId = `${id}-counter`;

  const describedBy = [
    showCounter ? counterId : null,
    error ? errorId : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[16px] sm:text-[17px] font-semibold leading-snug text-[#191919] mb-3"
      >
        {questionText}
        {required && (
          <>
            <span className="text-[#C6393B] ml-1" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>

      <textarea
        ref={textareaRef}
        id={id}
        name={id}
        rows={4}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlurValidate}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        placeholder="Share your thoughts here..."
        className={`w-full rounded-lg border bg-[#FFFFFF] px-3.5 py-3 text-[16px] leading-relaxed text-[#191919] placeholder:text-[#707070]/80 resize-y min-h-[112px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3665F3] focus-visible:ring-offset-2 ${
          error
            ? 'border-[#C6393B] focus-visible:border-[#C6393B]'
            : 'border-[#E5E5E5] hover:border-[#707070] focus-visible:border-[#3665F3]'
        }`}
      />

      <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          {error && (
            <p
              id={errorId}
              role="alert"
              className="text-sm font-medium text-[#C6393B] flex items-center gap-1.5"
            >
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
        </div>
        {showCounter && (
          <p
            id={counterId}
            className="text-xs text-[#707070] tabular-nums shrink-0 ml-auto"
          >
            {value.length} / {maxLength} characters
          </p>
        )}
      </div>
    </div>
  );
}
