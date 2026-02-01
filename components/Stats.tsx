
import React from 'react';

const statsData = [
  { year: '2020', value: 30 },
  { year: '2021', value: 55 },
  { year: '2022', value: 75 },
  { year: '2023', value: 90 },
  { year: '2024', value: 100 },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-slate-900 py-16 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Growth & Impact</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Since our inception, RS Construction has focused on quality and precision. We are now a leading consultancy in Noida.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-extrabold text-orange-500">250+</p>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-orange-500">15+</p>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider">Years</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-white/5">
            <h3 className="text-center font-semibold mb-8 text-slate-300">Annual Project Delivery</h3>
            <div className="flex items-end justify-between h-48 gap-2">
              {statsData.map((item) => (
                <div key={item.year} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-orange-500 rounded-t-lg transition-all duration-1000"
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <span className="text-xs text-slate-500">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
