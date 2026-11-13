import { useState } from 'react';

export function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="bg-[#FFFFFF]">
      <div className="max-w-[640px] mx-auto px-4 py-4 sm:py-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href="https://www.ebay.com"
          className="inline-flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3665F3] focus-visible:ring-offset-2 shrink-0"
          aria-label="eBay home"
        >
          {!logoError ? (
            <img
              src="https://i.ibb.co/4RDMc9Qg/download.png"
              alt="eBay"
              className="h-[40px] w-auto block"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-[28px] font-bold tracking-tight leading-none">
              <span className="text-[#E53238]">e</span>
              <span className="text-[#0064D2]">b</span>
              <span className="text-[#F5AF02]">a</span>
              <span className="text-[#86B817]">y</span>
            </span>
          )}
        </a>
        <h1 className="text-[20px] sm:text-[22px] font-normal tracking-tight text-[#191919] leading-tight">
          Customer Feedback
        </h1>
      </div>

      {/* Subtle four-colour accent bar using eBay's brand colours */}
      <div className="h-[3px] w-full grid grid-cols-4" aria-hidden="true">
        <span className="bg-[#E53238]" />
        <span className="bg-[#0064D2]" />
        <span className="bg-[#F5AF02]" />
        <span className="bg-[#86B817]" />
      </div>
    </header>
  );
}
