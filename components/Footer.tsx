
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tighter">
              RS <span className="text-orange-500">CONSTRUCTION</span>
            </span>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Founded by Manish Kumar RS. Pioneering sustainable infrastructure solutions since 2008. Dedicated to quality, safety, and innovation in every brick we lay.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#leadership" className="hover:text-orange-500 transition-colors">Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Architectural Design</li>
              <li>Project Management</li>
              <li>Structural Analysis</li>
              <li>Interior Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get latest project updates from Manish Kumar RS.</p>
            <form className="flex">
              <input type="email" placeholder="Email" className="flex-grow bg-slate-800 border-none rounded-l-lg px-4 py-2 outline-none focus:ring-1 focus:ring-orange-500" />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; 2024 RS Construction & Consultancy. Lead Engineer Manish Kumar RS.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
