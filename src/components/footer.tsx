import React from "react";
import { FOOTER_SECTION_DATA as sections } from "../data/footer-sections.data";
import { StarbucksLogo } from "./starbucks-logo";

type Props = {
};

/**
 * Le footer du site
 */
export const Footer: React.FC<Props> = function () {
  return (
    <footer className="kit-bg-green-600 kit-pb-[100px] kit-text-white kit-relative kit-overflow-hidden">
      <div className="kit-text-center lg:kit-text-left kit-text-xl lg:kit-text-3xl kit-uppercase kit-font-bold kit-tracking-widest kit-container kit-mx-auto kit-p-8">
        Starbucks
      </div>

      <StarbucksLogo
        monochrome
        className="kit-opacity-[0.05] kit-absolute kit-left-0 kit-top-8 lg:kit-top-1/2 lg:-kit-translate-y-1/2 -kit-translate-x-1/2 kit-select-none kit-pointer-events-none"
        size={800}
      />

      <div className="kit-p-8 kit-bg-brand">
        <div className="kit-grid sm:kit-grid-cols-2 md:kit-grid-cols-3 lg:kit-grid-cols-4 kit-gap-8 kit-container kit-mx-auto">
          {/* Col #1 */}
          <div className="kit-hidden lg:kit-block"></div>

          {/* Col #2 */}
          {sections.map((col, colKey) => (
            <div key={colKey} className="kit-space-y-12">
              {col.map((section, sectionKey) => (
                <div key={sectionKey}>
                  <h2 className="kit-font-medium kit-text-2xl kit-tracking-wide kit-mb-4">
                    {section.heading}
                  </h2>
                  <ul className="kit-space-y-2 kit-text-sm">
                    {section.items.map((item, key) => (
                      <li key={key} className="kit-text-white/50 hover:kit-text-white kit-transition-colors kit-cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

