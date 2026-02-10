'use client';

import { ReactNode, useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-3 text-left bg-[#1A1F2E] hover:bg-[#2A2F3E] transition-colors duration-200 flex justify-between items-center"
          >
            <span className="text-white font-medium">{item.title}</span>
            <span className="text-gray-400">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-[#0B0E11] border-t border-gray-700">
              {item.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
