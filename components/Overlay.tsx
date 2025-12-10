
import React from 'react';
import { Lightbulb, Sparkles, Wand2 } from 'lucide-react';

interface OverlayProps {
  lightsOn: boolean;
  toggleLights: () => void;
  isAssembled: boolean;
  toggleAssemble: () => void;
  rotationSpeed: number;
  setRotationSpeed: (val: number) => void;
}

export const Overlay: React.FC<OverlayProps> = ({ 
  lightsOn, 
  toggleLights, 
  isAssembled,
  toggleAssemble,
  rotationSpeed, 
  setRotationSpeed 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12">
      
      {/* Floating Merry Christmas Title - Replaces 3D Text */}
      <div 
        className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 ease-in-out ${isAssembled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
      >
         <h1 className="text-5xl md:text-8xl text-[#FFD700] font-serif tracking-tighter drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] animate-pulse">
          Merry Christmas
        </h1>
        <p className="text-[#FFD700]/60 font-serif italic text-xl mt-2 tracking-widest">
           from Arix Signature
        </p>
      </div>

      {/* Header */}
      <header className="flex flex-col items-center md:items-start space-y-2 pointer-events-auto z-20">
        <h1 className="text-2xl md:text-4xl text-[#FFD700] font-serif tracking-widest drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
          ARIX
        </h1>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
      </header>

      {/* Controls */}
      <footer className="flex flex-col items-center md:flex-row md:justify-between w-full pointer-events-auto gap-6 z-20">
        
        {/* Interaction Panel */}
        <div className="glass-panel rounded-full px-8 py-4 flex items-center gap-8 transition-all hover:bg-black/40">
          
          <button 
            onClick={toggleAssemble}
            className={`group flex flex-col items-center gap-1 transition-all duration-500 ${isAssembled ? 'text-[#FFD700]' : 'text-white/40'}`}
          >
            <div className={`p-3 rounded-full border border-current transition-all duration-500 ${isAssembled ? 'bg-[#FFD700]/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]' : ''}`}>
              <Wand2 size={24} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Morph</span>
          </button>

          <div className="h-10 w-[1px] bg-white/10"></div>

          <button 
            onClick={toggleLights}
            className={`group flex flex-col items-center gap-1 transition-all duration-500 ${lightsOn ? 'text-[#FFD700]' : 'text-white/40'}`}
          >
            <div className={`p-3 rounded-full border border-current transition-all duration-500 ${lightsOn ? 'bg-[#FFD700]/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]' : ''}`}>
              <Lightbulb size={24} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Lumos</span>
          </button>

          <div className="h-10 w-[1px] bg-white/10"></div>

          <button 
            onClick={() => setRotationSpeed(rotationSpeed > 0 ? 0 : 0.5)}
            className={`group flex flex-col items-center gap-1 transition-all duration-500 ${rotationSpeed > 0 ? 'text-[#FFD700]' : 'text-white/40'}`}
          >
            <div className={`p-3 rounded-full border border-current transition-all duration-500 ${rotationSpeed > 0 ? 'bg-[#FFD700]/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]' : ''}`}>
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Spin</span>
          </button>
        </div>

        {/* Message */}
        <div className="text-center md:text-right hidden md:block">
          <p className="text-[#FFD700]/80 font-serif text-sm tracking-[0.2em] mb-1">
            EST. 2024
          </p>
          <p className="text-white/40 text-xs font-serif italic">
            "Opulence in every pixel"
          </p>
        </div>

      </footer>
    </div>
  );
};
