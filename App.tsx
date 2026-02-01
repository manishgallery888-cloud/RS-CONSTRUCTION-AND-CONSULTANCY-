
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// --- Simplified Gemini Logic ---
const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are the RS Construction Assistant. Office: Sector 62, Noida. Owner: Manish Kumar RS. Services: Architectural Design, Civil Construction, Structural Consultancy. Be concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    return "I'm having trouble connecting. Please call us at +91 98765 43210.";
  }
};

// --- Main Application Component ---
const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to RS Construction. I'm Manish Kumar's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const res = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: res || "No response." }]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              RS <span className="text-orange-500">CONSTRUCTION</span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled ? 'text-slate-500' : 'text-orange-200'}`}>
              Consultancy & Engineering
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {['Services', 'Portfolio', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`font-bold hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <button 
              onClick={() => setShowInstallGuide(true)}
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all"
            >
              Get App
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Construction" />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
            Engineering <span className="text-orange-500">Excellence</span> Since 2008
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Led by Principal Engineer <strong>Manish Kumar RS</strong>. We turn architectural visions into structural realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 shadow-2xl transition-all active:scale-95">
              Get Free Estimate
            </a>
            <button onClick={() => setShowInstallGuide(true)} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Direct Link Access
            </button>
          </div>
        </div>
      </header>

      {/* READY ADDRESS & MAPS (QUICK ACCESS) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Visit Our Office</h2>
              <p className="text-slate-400">RS Headquarters, Sector 62, Noida, Uttar Pradesh</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("RS Headquarters, Sector 62, Noida, Uttar Pradesh 201301");
                  alert("Address Copied!");
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10"
              >
                Copy Address
              </button>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=RS+Construction+Sector+62+Noida"
                target="_blank"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                Navigate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Our Capabilities</h3>
            <h2 className="text-4xl font-black text-slate-900">Specialized Engineering Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Civil Construction", desc: "High-rise, residential and industrial structural work.", icon: "🏗️" },
              { title: "Architectural Design", desc: "Modern aesthetics combined with functional efficiency.", icon: "📐" },
              { title: "Structural Consultancy", desc: "Advanced analysis and stability auditing.", icon: "🔬" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & INQUIRY */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">Discuss Your <span className="text-orange-600">Project</span> With Us</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether it's a new commercial building or a residential renovation, our team under Manish Kumar RS is ready to assist.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">📞</div>
                  <p className="font-bold text-slate-800 text-lg">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">📧</div>
                  <p className="font-bold text-slate-800 text-lg">contact@rs-construction.com</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-inner border border-slate-100">
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full bg-white px-6 py-4 rounded-2xl border-none shadow-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-white px-6 py-4 rounded-2xl border-none shadow-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                <textarea rows={4} placeholder="Project Details" className="w-full bg-white px-6 py-4 rounded-2xl border-none shadow-sm outline-none focus:ring-2 focus:ring-orange-500 transition-all"></textarea>
                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black shadow-lg transition-all active:scale-95">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-2xl font-black tracking-tighter block mb-4">RS CONSTRUCTION</span>
          <p className="text-slate-500 mb-8">© 2024 RS Construction & Consultancy. Principal Engineer Manish Kumar RS.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* AI ASSISTANT BUTTON */}
      <button 
        onClick={() => setIsAssistantOpen(!isAssistantOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center z-[100] hover:scale-110 active:scale-90 transition-all"
      >
        {isAssistantOpen ? '✕' : '💬'}
      </button>

      {/* ASSISTANT DRAWER */}
      {isAssistantOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 w-full h-full sm:w-96 sm:h-[500px] bg-white z-[110] shadow-2xl sm:rounded-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="font-bold">RS Project Assistant</div>
            <button onClick={() => setIsAssistantOpen(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-orange-600 text-white rounded-br-none' : 'bg-white text-slate-800 rounded-bl-none shadow-sm'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-slate-400 animate-pulse">Assistant is thinking...</div>}
          </div>
          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question..."
              className="flex-grow bg-slate-100 px-4 py-2 rounded-xl text-sm outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button onClick={handleSendMessage} className="bg-orange-600 text-white px-4 py-2 rounded-xl font-bold">Send</button>
          </div>
        </div>
      )}

      {/* INSTALL GUIDE MODAL */}
      {showInstallGuide && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-2xl">
            <div className="bg-orange-600 p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Direct Link Usage</h3>
              <p className="text-orange-100">No file download required.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <p className="text-slate-700">Open this website in your phone's browser (Chrome or Safari).</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <p className="text-slate-700">Tap the browser menu (3 dots) or Share icon and select <span className="font-bold">"Add to Home Screen"</span>.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <p className="text-slate-700">The RS App icon will appear on your phone instantly!</p>
              </div>
              <button 
                onClick={() => setShowInstallGuide(false)}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all"
              >
                Got it, Start Using
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
