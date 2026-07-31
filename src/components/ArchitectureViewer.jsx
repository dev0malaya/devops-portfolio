import React from 'react';

const ArchitectureViewer = ({ flow = [], activeStep, onStepClick }) => {
  if (!flow || flow.length === 0) return null;

  return (
    <div className="w-full my-6 p-4 md:p-5 rounded-2xl bg-black/60 border border-white/10 shadow-inner">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Interactive Architecture Flow
        </span>
        <span className="text-[11px] font-mono text-white/40">Step-by-Step Blueprint</span>
      </div>

      {/* Flow Nodes Pipeline */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {flow.map((step, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => onStepClick && onStepClick(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeStep === idx
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_15px_rgba(255,42,42,0.6)] scale-105 border border-red-400'
                  : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/15 hover:text-white'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-black/40 text-[10px] font-mono flex items-center justify-center font-bold text-white/70">
                {idx + 1}
              </span>
              <span>{step}</span>
            </button>

            {idx < flow.length - 1 && (
              <svg className="w-4 h-4 text-white/30 shrink-0 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureViewer;
