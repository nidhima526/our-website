import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const analyzeIntentAndEmotion = (input) => {
  const lowerMsg = input.toLowerCase();

  // Emotion Detection
  const isNegative = ['angry', 'bad', 'worst', 'hate', 'slow', 'scam', 'frustrated', 'not working', 'terrible', 'fake'].some(w => lowerMsg.includes(w));
  const isPositive = ['good', 'great', 'awesome', 'nice', 'love', 'thanks', 'thank you', 'amazing', 'happy'].some(w => lowerMsg.includes(w));
  const isConfused = ['how', 'why', 'what', 'confused', 'help', 'don\'t know', 'not sure'].some(w => lowerMsg.includes(w));

  // Service Intent
  const tech = ['website', 'app', 'software', 'develop', 'ecommerce', 'web', 'tech', 'application'].some(w => lowerMsg.includes(w));
  const legal = ['legal', 'law', 'lawyer', 'advocate', 'court', 'case', 'bail', 'notice', 'dispute'].some(w => lowerMsg.includes(w));
  const interior = ['interior', 'design', 'home', 'office', 'space', 'renovate', 'architecture'].some(w => lowerMsg.includes(w));
  const education = ['education', 'course', 'internship', 'learn', 'student', 'java', 'python', 'react', 'training'].some(w => lowerMsg.includes(w));
  const digital = ['digital', 'marketing', 'seo', 'social', 'media', 'youtube', 'grow', 'ads'].some(w => lowerMsg.includes(w));

  let responseText = "";
  let emotionPrefix = "";
  let offerContact = false;

  if (isNegative) {
    emotionPrefix = "I completely understand your frustration, and I apologize for any inconvenience. Let's fix this for you right away. 🙏\n\n";
  } else if (isPositive) {
    emotionPrefix = "Thank you so much for the kind words! We are thrilled to hear that. 😊\n\n";
  } else if (isConfused) {
    emotionPrefix = "Don't worry at all, I am here to guide you step-by-step! 💡\n\n";
  }

  if (tech) {
    responseText = "Building a professional Website or E-Commerce platform is the absolute best investment you can make! 🚀 Having a premium website acts as a 24/7 salesman—it builds extreme trust and generates leads for you even while you sleep.\n\nWe specialize in building exactly this type of high-converting platform here at Ashervision! Would you like to transform your business?";
    offerContact = true;
  } else if (legal) {
    responseText = "Legal peace of mind is crucial for any business or individual. ⚖️ A single consultation with an expert advocate can save you from years of stress and massive financial loss.\n\nAshervision provides top-tier Legal Counsel to handle and resolve your disputes quickly. Let's get our experts on your case!";
    offerContact = true;
  } else if (interior) {
    responseText = "Your environment shapes your success! 🏠 A beautifully designed interior, whether it's your office or home, instantly elevates your brand value and mental peace.\n\nAshervision Interior Design can bring your dream space to life with breathtaking 3D visualization and execution. Ready to start your renovation?";
    offerContact = true;
  } else if (education) {
    responseText = "Upskilling is the only way to stay ahead in today's competitive world! 🎓 Getting hands-on experience through real-world projects and internships is exactly what top companies are looking for.\n\nAshervision Academy offers premium courses and corporate internships to guarantee your success. Want to secure your future today?";
    offerContact = true;
  } else if (digital) {
    responseText = "Attention is the new currency! 📈 If people don't know you exist, you are losing money every single day. A powerful Digital Marketing and SEO strategy will flood your business with organic traffic.\n\nAshervision Digital Creative can scale your brand exponentially. Ready to dominate your market?";
    offerContact = true;
  } else if (!emotionPrefix) {
    responseText = "Welcome to Ashervision! I am your AI Sales Assistant. 🌟\n\nWe provide premium services in Technology (Web/Apps), Legal Counsel, Interior Design, Digital Marketing, and Corporate Education.\n\nTell me, how can I help you grow today?";
  }

  if (offerContact) {
    responseText = emotionPrefix + responseText;
  } else if (emotionPrefix && !responseText) {
    responseText = emotionPrefix + "How else can I assist you today?";
  }

  return { text: responseText, offerContact };
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I am the Ashervision AI. What service are you looking for today? (Tech, Legal, Interior, Education, Digital)", sender: "bot", offerContact: false }
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
    setMessages(prev => [...prev, { text: userMsg, sender: "user", offerContact: false }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const { text, offerContact } = analyzeIntentAndEmotion(userMsg);
      setMessages(prev => [...prev, { text, sender: "bot", offerContact }]);
      
      // Auto-reply with Thank You if contact was offered
      if (offerContact) {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: "Thank you for choosing Ashervision! We look forward to working with you. 🙏", sender: "bot", offerContact: false }]);
        }, 2000);
      }
      
      setIsTyping(false);
    }, 1500); // Simulate realistic AI typing delay
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
        className={`fixed bottom-6 right-6 z-[100] p-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.4)] text-black transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
            className="fixed bottom-6 right-6 z-[100] w-[350px] max-w-[90vw] h-[550px] max-h-[85vh] flex flex-col bg-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
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
                    Sales Agent Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1 bg-white/5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm whitespace-pre-wrap leading-relaxed shadow-md ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-tr-sm font-medium' 
                      : 'bg-[#111] text-gray-200 rounded-tl-sm border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {msg.offerContact && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-2 w-[85%]"
                    >
                      <Link 
                        to="/contact" 
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform text-sm uppercase tracking-widest"
                      >
                        Contact Us Now
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#111] border border-white/10 rounded-2xl rounded-tl-sm p-4 flex gap-1.5 items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-[#0a0a0a]">
              <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full pr-2 pl-4 py-1.5 border border-white/10 focus-within:border-yellow-500/50 transition-all shadow-inner">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about our services..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-500 py-2"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
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
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}} />
    </>
  );
}
