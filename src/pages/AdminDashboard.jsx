import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ShieldAlert, Search, Calendar, MapPin, User, Mail, Phone, Briefcase } from 'lucide-react';
import CorporateLayout from './CorporateLayout';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'nidhimakalyanam' && password === 'ashervision3') {
      setIsAuthenticated(true);
      setError('');
      fetchData();
    } else {
      setError('Invalid credentials');
    }
  };

  const fetchData = async () => {
    try {
      const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInquiries(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredInquiries = inquiries.filter(inq => 
    inq.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inq.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.service?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <CorporateLayout>
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent pointer-events-none"></div>
          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl relative z-10">
            <div className="flex justify-center mb-6 text-orange-500">
              <ShieldAlert size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-8 font-heading uppercase tracking-widest">Admin Access</h2>
            {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded mb-6 text-sm text-center">{error}</div>}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all">
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </CorporateLayout>
    );
  }

  return (
    <CorporateLayout>
      <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-heading uppercase tracking-widest mb-2">Lead Dashboard</h1>
              <p className="text-gray-400 text-sm">Secure datasheet for all client inquiries and applications.</p>
            </div>
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-full pl-12 pr-6 py-3 text-white focus:outline-none focus:border-orange-500 text-sm shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={18} className="absolute left-5 top-3.5 text-gray-500" />
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-widest text-gray-400 font-bold">
                    <th className="p-5 whitespace-nowrap"><div className="flex items-center gap-2"><Calendar size={14} className="text-orange-500"/> Date & Time</div></th>
                    <th className="p-5 whitespace-nowrap"><div className="flex items-center gap-2"><User size={14} className="text-orange-500"/> Client Name</div></th>
                    <th className="p-5 whitespace-nowrap"><div className="flex items-center gap-2"><Mail size={14} className="text-orange-500"/> Contact Info</div></th>
                    <th className="p-5 whitespace-nowrap"><div className="flex items-center gap-2"><Briefcase size={14} className="text-orange-500"/> Service</div></th>
                    <th className="p-5 whitespace-nowrap"><div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500"/> Location</div></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="p-10 text-center text-gray-500">Loading records securely...</td>
                    </tr>
                  ) : filteredInquiries.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-10 text-center text-gray-500">No records found.</td>
                    </tr>
                  ) : (
                    filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-white/5 transition-colors text-sm text-gray-300">
                        <td className="p-5 whitespace-nowrap">
                          <div className="font-bold text-white mb-1">{inq.date}</div>
                          <div className="text-xs text-gray-500 font-medium">{inq.time}</div>
                        </td>
                        <td className="p-5">
                          <div className="font-bold text-white text-base">{inq.name}</div>
                        </td>
                        <td className="p-5">
                          <div className="text-gray-300 mb-1">{inq.email}</div>
                          <div className="text-gray-500 font-medium">{inq.phone}</div>
                        </td>
                        <td className="p-5">
                          <span className="px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold border border-orange-500/20">
                            {inq.service}
                          </span>
                        </td>
                        <td className="p-5 text-gray-400 font-medium">
                          {inq.location || 'Detecting...'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
};

export default AdminDashboard;
