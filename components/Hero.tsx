
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onShowInstall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowInstall }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallAction = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      onShowInstall();
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541915314065-24a862787f3c?auto=format&fit=crop&q=80&w=2000"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">
            RS Construction & Consultancy
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Building The <span className="text-orange-500 underline decoration-4 underline-offset-8">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            By Principal Engineer <strong>Manish Kumar RS</strong>. Leading civil engineering and architectural consultancy in Noida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleInstallAction}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-orange-500/20 flex flex-col items-center"
            >
              <span>Download & Install App</span>
              <span className="text-[10px] opacity-70 font-normal uppercase tracking-tighter">(Instant Cloud App - No Files Needed)</span>
            </button>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center"
            >
              Get Ready Address
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </div>
  );
};

export default Hero;
