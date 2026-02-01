
import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-orange-100 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-50 rounded-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Manish Kumar RS" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold text-slate-900">Manish Kumar RS</h3>
              <p className="text-orange-600 font-semibold">Principal Engineer & Owner</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">Leadership</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Visionary Engineering by Manish Kumar RS
            </p>
            <div className="mt-6 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                With over 15 years of hands-on experience in structural engineering and urban development, Manish Kumar RS founded RS Construction & Consultancy with a singular vision: to bridge the gap between architectural aesthetics and structural resilience.
              </p>
              <p>
                As our Principal Engineer, Manish personally oversees every complex design phase, ensuring that every project bearing the RS name adheres to the highest standards of safety, innovation, and sustainability.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <blockquote className="italic text-slate-500 border-l-4 border-orange-500 pl-4">
                  "At RS, we don't just build structures; we build legacies. Every project is a testament to our commitment to engineering excellence and client trust."
                </blockquote>
                <p className="mt-4 font-bold text-slate-900">— Manish Kumar RS</p>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl min-w-[120px]">
                 <span className="text-2xl font-bold text-slate-900">15+</span>
                 <span className="text-xs text-slate-500 uppercase tracking-tighter">Years Exp</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl min-w-[120px]">
                 <span className="text-2xl font-bold text-slate-900">B.Tech</span>
                 <span className="text-xs text-slate-500 uppercase tracking-tighter">Structural</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl min-w-[120px]">
                 <span className="text-2xl font-bold text-slate-900">200+</span>
                 <span className="text-xs text-slate-500 uppercase tracking-tighter">Consults</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
