import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={onClick}
            >
                <span className={clsx("text-lg font-medium transition-colors", isOpen ? "text-primary" : "text-text-main group-hover:text-primary")}>
                    {question}
                </span>
                <span className={clsx("p-2 rounded-full transition-colors", isOpen ? "bg-primary text-white" : "bg-secondary-light text-text-main group-hover:bg-primary/10")}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div
                className={clsx(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <p className="pb-6 text-text-muted leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
