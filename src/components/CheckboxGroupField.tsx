import { Check } from 'lucide-react';

interface CheckboxGroupFieldProps {
  id: 'Q8';
  questionText: string;
  options: readonly string[];
  selectedValues: string[];
  onToggle: (option: string) => void;
}

export function CheckboxGroupField({
  id,
  questionText,
  options,
  selectedValues,
  onToggle,
}: CheckboxGroupFieldProps) {
  return (
    <fieldset className="m-0 p-0 border-0 min-w-0">
      <legend className="text-[16px] sm:text-[17px] font-semibold leading-snug text-[#191919] mb-4 w-full">
        {questionText}
      </legend>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {options.map((option, index) => {
          const isChecked = selectedValues.includes(option);
          const inputId = `${id}-option-${index}`;
          const isExclusive = option === 'None of these';

          return (
            <label
              key={option}
              htmlFor={inputId}
              className={`relative block cursor-pointer ${
                isExclusive ? 'sm:col-span-2' : ''
              }`}
            >
              <input
                id={inputId}
                type="checkbox"
                name={id}
                value={option}
                checked={isChecked}
                onChange={() => onToggle(option)}
                className="sr-only peer"
              />
              <span
                className={`min-h-[48px] w-full rounded-lg border px-3.5 py-2.5 flex items-center gap-3 text-[16px] transition-colors duration-150 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[#3665F3] peer-focus-visible:ring-offset-2 ${
                  isChecked
                    ? 'bg-[#F5F8FF] border-[#3665F3] text-[#191919] font-medium'
                    : 'bg-[#FFFFFF] border-[#E5E5E5] text-[#191919] hover:border-[#3665F3] hover:bg-[#F5F8FF]/50'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? 'border-[#3665F3] bg-[#3665F3] text-[#FFFFFF]'
                      : 'border-[#707070] bg-[#FFFFFF]'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                </span>
                <span className="leading-snug">{option}</span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
