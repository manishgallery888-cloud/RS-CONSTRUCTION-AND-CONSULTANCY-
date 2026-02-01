
import React from 'react';

interface InstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallGuide: React.FC<InstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6 bg-orange-600 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Instant App Installation</h3>
            <p className="text-orange-100 text-xs">No file download required</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">
              💡 <span className="underline">Notice:</span> You don't need to download any files. This app runs directly in your browser and stays on your home screen like a normal app.
            </p>
          </div>

          {isIOS ? (
            <div className="space-y-6">
              <p className="text-slate-600">On your <span className="font-bold text-slate-900">iPhone/iPad</span>:</p>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0 font-bold">1</div>
                <p className="text-slate-700">Tap the <span className="font-bold inline-flex items-center mx-1">Share <svg className="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684m0 2.684l6.632-3.316m-6.632 6a3 3 0 100 2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 110-2.684m0 2.684l6.632 3.316M13 5h8m-8 4h8m-8 4h8m-8 4h8" /></svg></span> button.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0 font-bold">2</div>
                <p className="text-slate-700">Select <span className="font-bold">"Add to Home Screen"</span> from the list.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-slate-600">On <span className="font-bold text-slate-900">Android/Chrome</span>:</p>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
                <p className="text-slate-700">Tap the <span className="font-bold italic">Three Dots (⋮)</span> in the browser menu.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
                <p className="text-slate-700">Select <span className="font-bold">"Install App"</span> or <span className="font-bold">"Add to Home Screen"</span>.</p>
              </div>
            </div>
          )}
          
          <div className="pt-6 border-t border-slate-100">
            <button 
              onClick={onClose}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
            >
              OK, I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallGuide;
