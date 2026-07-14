import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOT_RESPONSES = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskaram', 'swagatham', 'help'],
    response: "Hello! / నమస్కారం! / नमस्ते!\nWelcome to Ashervision. I am your virtual assistant.\nWe offer services in: \n1. Technology (Web/Apps)\n2. Legal Services\n3. Interior Design\n4. Digital Marketing\n5. Education & Internships\n\nHow can I help you today? (Meeku em kavali?)"
  },
  {
    keywords: ['legal', 'law', 'lawyer', 'advocate', 'court', 'case', 'bail', 'notice'],
    response: "⚖️ **Ashervision Legal Services**\nWe have top-tier advocates dealing in:\n- Corporate Law\n- Criminal & Civil Cases\n- Family Law\n- Property Disputes\n\nWould you like to book a consultation with our lawyers?"
  },
  {
    keywords: ['tech', 'website', 'app', 'software', 'develop', 'kavali', 'chahiye', 'ecommerce', 'web'],
    response: "💻 **Ashervision Technology**\nWe build highly premium, scalable, and secure:\n- Websites & Web Apps\n- Mobile Applications\n- E-Commerce Platforms\n- Custom Software\n\nLet's discuss your project requirements!"
  },
  {
    keywords: ['interior', 'design', 'home', 'office', 'space', 'renovate'],
    response: "🏠 **Ashervision Interior Design**\nWe transform spaces into masterpieces! Services include:\n- Residential & Commercial Design\n- 3D Visualization\n- Renovation & Planning\n\nDo you want to see our portfolio?"
  },
  {
    keywords: ['education', 'course', 'internship', 'learn', 'student', 'java', 'python', 'react'],
    response: "🎓 **Ashervision Education**\nEmpowering students with real-world skills!\n- Premium Tech Courses (React, Java, Python)\n- Live Internships\n- Real-world Projects & Placements\n\nCheckout our Courses section for more details."
  },
  {
    keywords: ['digital', 'marketing', 'seo', 'social', 'media', 'youtube', 'grow'],
    response: "🚀 **Ashervision Digital Creative**\nGrow your brand exponentially!\n- SEO & Content Marketing\n- Social Media Management\n- YouTube Growth & Editing\n\nReady to scale your business?"
  },
  {
    keywords: ['contact', 'phone', 'number', 'call', 'whatsapp', 'reach'],
    response: "📞 **Contact Us**\nYou can click the WhatsApp button on the bottom left, or reach out to us directly!\n(Let us know if you need Kalyan's direct number)."
  }
];

const DEFAULT_RESPONSE = "I'm sorry, I didn't quite catch that. / క్షమించండి, నాకు అర్థం కాలేదు. / माफ़ करें, मैं समझ नहीं पाया।\nCould you please mention if you need help with Tech, Legal, Interior, Digital, or Education?";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I am the Ashervision AI. How can I help you today? (Tech, Legal, Interior, Education, Digital)", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInput('');
    setIsTyping(true);

    // Smart Keyword Matching Logic
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let foundResponse = DEFAULT_RESPONSE;

      for (const item of BOT_RESPONSES) {
        if (item.keywords.some(kw => lowerInput.includes(kw))) {
          foundResponse = item.response;
          break;
        }
      }

      setMessages(prev => [...prev, { text: foundResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Simulate realistic AI typing delay
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.4)] text-black transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <img loading="lazy" src="/ashervisionlogo.png" alt="Ashervision AI" className="w-12 h-12 rounded-full object-cover bg-black p-1" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[90vw] h-[500px] max-h-[80vh] flex flex-col bg-black/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-black via-zinc-900 to-black border-b border-yellow-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center p-1 border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                  <img loading="lazy" src="/ashervisionlogo.png" alt="Ashervision" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wider">ASHERVISION AI</h3>
                  <p className="text-yellow-500/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-yellow-500 text-black rounded-tr-sm' 
                      : 'bg-zinc-800 text-gray-200 rounded-tl-sm border border-zinc-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 border border-zinc-700 rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-zinc-800 bg-black">
              <div className="flex items-center gap-2 bg-zinc-900 rounded-full pr-2 pl-4 py-1 border border-zinc-700 focus-within:border-yellow-500/50 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-500 py-2"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-yellow-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }
      `}} />
    </>
  );
}

