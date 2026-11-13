import { CheckCircle2 } from 'lucide-react';

export function ThankYouScreen() {
  return (
    <section
      aria-labelledby="thank-you-heading"
      className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg px-6 py-10 sm:px-10 sm:py-12 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-[#86B817]/15 mx-auto flex items-center justify-center">
        <CheckCircle2
          className="w-9 h-9 text-[#5C820C]"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </div>

      <h2
        id="thank-you-heading"
        className="mt-5 text-2xl sm:text-[28px] font-bold tracking-tight text-[#191919]"
      >
        Thank you for your feedback!
      </h2>

      <p className="mt-3 text-base text-[#707070] max-w-md mx-auto leading-relaxed">
        Your response helps us make eBay better for everyone.
      </p>

      <div className="mt-8">
        <a
          href="https://www.ebay.com"
          className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-[#3665F3] hover:bg-[#2B50C5] text-[#FFFFFF] text-base font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3665F3] focus-visible:ring-offset-2"
        >
          Back to eBay
        </a>
      </div>
    </section>
  );
}
