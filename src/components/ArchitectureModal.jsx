import React, { useState } from 'react';
import ArchitectureViewer from './ArchitectureViewer';

const ArchitectureModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div 
      className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-gray-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-black/40">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
              {project.badge || "Architecture Blueprint"}
            </span>
            <h4 className="text-white text-lg md:text-xl font-black truncate pr-4">
              {project.title}
            </h4>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 font-bold"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 bg-black/60">
          {/* Interactive Flow Step Viewer inside Modal */}
          {project.architectureFlow && (
            <ArchitectureViewer 
              flow={project.architectureFlow} 
              activeStep={activeStep} 
              onStepClick={(idx) => setActiveStep(idx)}
            />
          )}

          {/* High-Resolution Diagram Preview */}
          {project.architectureImage && (
            <div className="flex flex-col items-center justify-center bg-black/80 rounded-xl p-4 border border-white/10 overflow-auto">
              <img 
                src={project.architectureImage} 
                alt={`${project.title} Architecture Diagram`} 
                className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Project Summary Description */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Technical Summary</h5>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-black/40 flex justify-between items-center text-xs text-white/60">
          <span className="font-mono">GitHub Repository Linked</span>
          <a 
            href={project.links?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-[#ff2a2a] text-white font-bold text-xs hover:bg-red-600 transition-colors"
          >
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;
