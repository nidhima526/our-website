import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, GraduationCap, Scale, Briefcase, Mail, Lock, User, Phone,
  Eye, EyeOff, CheckCircle2, ChevronLeft, ArrowRight, ShieldCheck,
  AlertCircle, AlertTriangle, Key, Search, Monitor, X, Clock
} from 'lucide-react';
import './Auth.css';

const Auth = () => {
  const [activeView, setActiveView] = useState('login'); // login, register, email-verify, otp, forgot, reset, success, expired, denied, 404
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Reset Password State
  const [password, setPassword] = useState('');
  const [pwdStrength, setPwdStrength] = useState(0);

  // OTP State
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const otpRefs = useRef([]);

  // Check password strength
  useEffect(() => {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    setPwdStrength(score);
  }, [password]);

  // OTP Timer
  useEffect(() => {
    if (activeView === 'otp' && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [activeView, timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < 5) otpRefs.current[index + 1].focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const simulateLoading = (nextView) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setActiveView(nextView);
    }, 1200);
  };

  const SocialButtons = () => (
    <div className="auth-social-grid">
      <button className="auth-social-btn"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5"/> Google</button>
      <button className="auth-social-btn"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" className="w-5 h-5 dark:invert"/> Apple</button>
      <button className="auth-social-btn"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 dark:invert"/> GitHub</button>
      <button className="auth-social-btn"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" alt="Microsoft" className="w-5 h-5"/> Microsoft</button>
    </div>
  );

  return (
    <div className="auth-layout bg-background min-h-screen flex">
      {/* Left Panel: Illustration & Dashboard Mock */}
      <div className="hidden lg:flex w-[45%] bg-slate-900 relative flex-col justify-center overflow-hidden p-12">
        <div className="absolute top-0 left-0 w-full h-full auth-hero-gradient"></div>
        
        <div className="relative z-10 max-w-md mx-auto text-white mt-[-80px]">
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold mb-12 hover:text-primary transition-colors">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">
              <span className="font-bold font-serif">M</span>
            </div>
            ASHERVISION
          </Link>
          
          <h2 className="text-4xl font-bold mb-4 leading-tight">Welcome to your secure command center.</h2>
          <p className="text-slate-400 text-lg mb-12">Manage your education, legal services, projects, and business from one premium platform.</p>
          
          {/* Floating Dashboard Cards */}
          <div className="relative h-[300px] w-full">
            <div className="auth-float-card auth-card-1 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white absolute top-0 left-0 w-64 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-primary/30 text-blue-200 px-2 py-1 rounded">Legal Services</span>
                <Scale size={16}/>
              </div>
              <div className="text-sm font-bold line-clamp-1 mb-1">NDA Draft Reviewed</div>
              <div className="text-xs text-slate-300">Status: Completed</div>
            </div>

            <div className="auth-float-card auth-card-2 bg-slate-800 border border-slate-700 p-4 rounded-xl text-white absolute top-20 right-0 w-56 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">Education</span>
                <GraduationCap size={16}/>
              </div>
              <div className="text-sm font-bold line-clamp-1 mb-1">Python Masterclass</div>
              <div className="w-full h-1.5 bg-slate-700 rounded-full mt-2"><div className="w-[80%] h-full bg-emerald-400 rounded-full"></div></div>
            </div>

            <div className="auth-float-card auth-card-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white absolute bottom-10 left-10 w-64 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-1 rounded">Project</span>
                <Monitor size={16}/>
              </div>
              <div className="text-sm font-bold line-clamp-1 mb-1">E-commerce Website</div>
              <div className="text-xs text-slate-300">Milestone 3 Delivered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Forms */}
      <div className="w-full lg:w-[55%] flex flex-col min-h-screen bg-white relative overflow-y-auto">
        <div className="p-6 lg:p-8 flex justify-between items-center absolute top-0 left-0 w-full">
          <Link to="/" className="lg:hidden inline-flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">M</div>
          </Link>
          <Link to="/" className="text-sm font-bold text-muted hover:text-primary flex items-center gap-1 transition-colors ml-auto z-10"><X size={16}/> Close</Link>
        </div>

        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 max-w-xl mx-auto w-full mt-12 lg:mt-0 relative">
          
          {/* ============================== SCREEN 1: LOGIN ============================== */}
          {activeView === 'login' && (
            <div className="auth-animate-in">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted text-sm mb-8">Enter your credentials to access your account.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); simulateLoading('success'); }} className="space-y-4">
                <div className="auth-input-group">
                  <Mail size={18} className="auth-input-icon"/>
                  <input type="email" placeholder="Email address" className="auth-input" required />
                </div>
                
                <div className="auth-input-group">
                  <Lock size={18} className="auth-input-icon"/>
                  <input type={showPassword ? "text" : "password"} placeholder="Password" className="auth-input pr-10" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                  </button>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                      <CheckCircle2 size={12} className="text-transparent group-hover:text-primary/50 transition-colors"/>
                    </div>
                    <span className="text-slate-600 font-medium">Remember me</span>
                  </label>
                  <button type="button" onClick={() => setActiveView('forgot')} className="font-bold text-primary hover:underline">Forgot Password?</button>
                </div>
                
                <button type="submit" className="btn btn-primary w-full h-12 text-base mt-2 relative overflow-hidden" disabled={isLoading}>
                  {isLoading ? <span className="auth-spinner"></span> : "Sign In"}
                </button>
              </form>
              
              <div className="auth-divider"><span>OR CONTINUE WITH</span></div>
              <SocialButtons />
              
              <p className="text-center text-sm text-muted mt-8 font-medium">
                Don't have an account? <button onClick={() => setActiveView('register')} className="text-primary font-bold hover:underline">Create Account</button>
              </p>
            </div>
          )}

          {/* ============================== SCREEN 2: REGISTER ============================== */}
          {activeView === 'register' && (
            <div className="auth-animate-in">
              <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-muted text-sm mb-8">Join the ASHERVISION platform to get started.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); simulateLoading('email-verify'); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="auth-input-group">
                    <User size={18} className="auth-input-icon"/>
                    <input type="text" placeholder="First Name" className="auth-input" required />
                  </div>
                  <div className="auth-input-group">
                    <User size={18} className="auth-input-icon"/>
                    <input type="text" placeholder="Last Name" className="auth-input" required />
                  </div>
                </div>
                
                <div className="auth-input-group">
                  <Mail size={18} className="auth-input-icon"/>
                  <input type="email" placeholder="Email address" className="auth-input" required />
                </div>
                
                <div className="auth-input-group">
                  <Phone size={18} className="auth-input-icon"/>
                  <input type="tel" placeholder="Phone Number" className="auth-input" required />
                </div>

                <div className="auth-input-group">
                  <Briefcase size={18} className="auth-input-icon"/>
                  <select className="auth-input text-muted bg-white appearance-none" required defaultValue="">
                    <option value="" disabled>Select Your Role</option>
                    <option value="student">Student</option>
                    <option value="business">Business Client</option>
                    <option value="legal">Legal Client</option>
                    <option value="intern">Intern</option>
                    <option value="advocate">Advocate</option>
                  </select>
                </div>
                
                <div className="auth-input-group">
                  <Lock size={18} className="auth-input-icon"/>
                  <input type={showPassword ? "text" : "password"} placeholder="Create Password" className="auth-input pr-10" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                  </button>
                </div>
                
                <label className="flex items-start gap-2 cursor-pointer group mt-4">
                  <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors mt-0.5 flex-shrink-0">
                    <CheckCircle2 size={12} className="text-transparent group-hover:text-primary/50 transition-colors"/>
                  </div>
                  <span className="text-slate-600 text-xs leading-relaxed">I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a>, <a href="#" className="text-primary hover:underline">Privacy Policy</a>, and secure data handling guidelines.</span>
                </label>
                
                <button type="submit" className="btn btn-primary w-full h-12 text-base mt-2 relative" disabled={isLoading}>
                  {isLoading ? <span className="auth-spinner"></span> : "Create Account"}
                </button>
              </form>
              
              <div className="auth-divider"><span>OR CONTINUE WITH</span></div>
              <SocialButtons />
              
              <p className="text-center text-sm text-muted mt-8 font-medium">
                Already have an account? <button onClick={() => setActiveView('login')} className="text-primary font-bold hover:underline">Sign In</button>
              </p>
            </div>
          )}

          {/* ============================== SCREEN 3: EMAIL VERIFICATION ============================== */}
          {activeView === 'email-verify' && (
            <div className="auth-animate-in text-center">
              <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32}/>
              </div>
              <h1 className="text-3xl font-bold mb-4">Verify Your Email</h1>
              <p className="text-muted text-sm mb-8 max-w-sm mx-auto">We've sent a verification email to your inbox. Please click the link inside to verify your account.</p>
              
              <div className="space-y-3">
                <button onClick={() => simulateLoading('otp')} className="btn btn-primary w-full h-12 text-base" disabled={isLoading}>
                  {isLoading ? <span className="auth-spinner"></span> : "Open Gmail"}
                </button>
                <button className="btn btn-outline w-full h-12 text-base">Resend Email</button>
                <button onClick={() => setActiveView('register')} className="text-sm font-bold text-muted hover:text-primary transition-colors mt-4 inline-block">Change Email Address</button>
              </div>
            </div>
          )}

          {/* ============================== SCREEN 4: OTP VERIFICATION ============================== */}
          {activeView === 'otp' && (
            <div className="auth-animate-in text-center">
              <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32}/>
              </div>
              <h1 className="text-3xl font-bold mb-2">Two-Factor Authentication</h1>
              <p className="text-muted text-sm mb-8">Enter the 6-digit code sent to your phone/email.</p>
              
              <div className="flex justify-center gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => otpRefs.current[index] = el}
                    type="text"
                    maxLength="1"
                    className="w-12 h-14 text-center text-xl font-bold border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  />
                ))}
              </div>
              
              <button onClick={() => simulateLoading('success')} className="btn btn-primary w-full h-12 text-base mb-6" disabled={isLoading}>
                {isLoading ? <span className="auth-spinner"></span> : "Verify & Login"}
              </button>
              
              <p className="text-sm text-muted font-medium">
                Didn't receive the code? <button className={`font-bold ${timer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-primary hover:underline'}`} disabled={timer > 0}>Resend {timer > 0 && `(${timer}s)`}</button>
              </p>
            </div>
          )}

          {/* ============================== SCREEN 5: FORGOT PASSWORD ============================== */}
          {activeView === 'forgot' && (
            <div className="auth-animate-in">
              <button onClick={() => setActiveView('login')} className="flex items-center gap-1 text-sm font-bold text-muted hover:text-primary transition-colors mb-8"><ChevronLeft size={16}/> Back to Login</button>
              <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
              <p className="text-muted text-sm mb-8">Enter your email address and we'll send you a link to reset your password.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); simulateLoading('reset'); }} className="space-y-4">
                <div className="auth-input-group">
                  <Mail size={18} className="auth-input-icon"/>
                  <input type="email" placeholder="Email address" className="auth-input" required />
                </div>
                
                <button type="submit" className="btn btn-primary w-full h-12 text-base mt-2 relative" disabled={isLoading}>
                  {isLoading ? <span className="auth-spinner"></span> : "Send Reset Link"}
                </button>
              </form>
            </div>
          )}

          {/* ============================== SCREEN 6: RESET PASSWORD ============================== */}
          {activeView === 'reset' && (
            <div className="auth-animate-in">
              <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
              <p className="text-muted text-sm mb-8">Please choose a new, strong password for your account.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); simulateLoading('success'); }} className="space-y-6">
                <div>
                  <div className="auth-input-group mb-2">
                    <Key size={18} className="auth-input-icon"/>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="New Password" 
                      className="auth-input pr-10" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                    </button>
                  </div>
                  
                  {/* Password Strength Meter */}
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full transition-all duration-300 flex-1 ${pwdStrength > 0 ? (pwdStrength <= 25 ? 'bg-red-500' : pwdStrength <= 50 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-transparent'}`}></div>
                    <div className={`h-full transition-all duration-300 flex-1 ${pwdStrength > 25 ? (pwdStrength <= 50 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-transparent'}`}></div>
                    <div className={`h-full transition-all duration-300 flex-1 ${pwdStrength > 50 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                    <div className={`h-full transition-all duration-300 flex-1 ${pwdStrength > 75 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-medium text-slate-500">
                    <span className={`flex items-center gap-1 ${password.length >= 8 ? 'text-emerald-600' : ''}`}><CheckCircle2 size={12}/> Min 8 characters</span>
                    <span className={`flex items-center gap-1 ${/[A-Z]/.test(password) ? 'text-emerald-600' : ''}`}><CheckCircle2 size={12}/> 1 Uppercase</span>
                    <span className={`flex items-center gap-1 ${/[0-9]/.test(password) ? 'text-emerald-600' : ''}`}><CheckCircle2 size={12}/> 1 Number</span>
                    <span className={`flex items-center gap-1 ${/[^A-Za-z0-9]/.test(password) ? 'text-emerald-600' : ''}`}><CheckCircle2 size={12}/> 1 Symbol</span>
                  </div>
                </div>

                <div className="auth-input-group">
                  <Lock size={18} className="auth-input-icon"/>
                  <input type="password" placeholder="Confirm New Password" className="auth-input" required />
                </div>
                
                <button type="submit" className="btn btn-primary w-full h-12 text-base relative" disabled={isLoading || pwdStrength < 100}>
                  {isLoading ? <span className="auth-spinner"></span> : "Reset Password"}
                </button>
              </form>
            </div>
          )}

          {/* ============================== SCREEN 7: SUCCESS ============================== */}
          {activeView === 'success' && (
            <div className="auth-animate-in text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 auth-success-pop">
                <CheckCircle2 size={48}/>
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome to ASHERVISION</h1>
              <p className="text-muted text-sm mb-8 max-w-sm mx-auto">Your account has been successfully secured and verified. You are now ready to explore.</p>
              
              <div className="w-full space-y-3">
                <button onClick={() => navigate('/')} className="btn btn-primary w-full h-12 text-base">Go to Dashboard</button>
                <button onClick={() => navigate('/')} className="btn btn-outline w-full h-12 text-base">Browse Services</button>
              </div>
            </div>
          )}

          {/* ============================== SCREEN 8: SESSION EXPIRED ============================== */}
          {activeView === 'expired' && (
            <div className="auth-animate-in text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                <Clock size={48}/>
              </div>
              <h1 className="text-3xl font-bold mb-2">Session Expired</h1>
              <p className="text-muted text-sm mb-8 max-w-sm mx-auto">For your security, you have been automatically logged out due to inactivity.</p>
              <button onClick={() => setActiveView('login')} className="btn btn-primary w-full h-12 text-base">Login Again</button>
            </div>
          )}

          {/* ============================== SCREEN 9: ACCESS DENIED ============================== */}
          {activeView === 'denied' && (
            <div className="auth-animate-in text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle size={48}/>
              </div>
              <h1 className="text-3xl font-bold mb-2">Access Restricted</h1>
              <p className="text-muted text-sm mb-8 max-w-sm mx-auto">You do not have permission to view this resource. This area requires administrator or specific client access.</p>
              <div className="w-full space-y-3">
                <button onClick={() => navigate('/')} className="btn btn-primary w-full h-12 text-base">Return Home</button>
                <button onClick={() => navigate('/contact')} className="btn btn-outline w-full h-12 text-base">Contact Support</button>
              </div>
            </div>
          )}

          {/* ============================== SCREEN 10: 404 AUTH ============================== */}
          {activeView === '404' && (
            <div className="auth-animate-in text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-6">
                <Search size={48}/>
              </div>
              <h1 className="text-5xl font-bold mb-2 text-slate-800">404</h1>
              <p className="text-muted text-sm mb-8 max-w-sm mx-auto">The authentication page you are looking for does not exist or has been moved.</p>
              <div className="w-full space-y-3">
                <button onClick={() => setActiveView('login')} className="btn btn-primary w-full h-12 text-base">Go to Login</button>
                <button onClick={() => navigate('/')} className="btn btn-outline w-full h-12 text-base">Return Home</button>
              </div>
            </div>
          )}

          {/* Quick debug toggles for testing requested screens (remove in prod) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 flex-wrap px-4 opacity-30 hover:opacity-100 transition-opacity">
            {['login', 'register', 'email-verify', 'otp', 'forgot', 'reset', 'success', 'expired', 'denied', '404'].map(v => (
              <button key={v} onClick={() => setActiveView(v)} className="text-[9px] font-mono bg-gray-100 px-2 py-1 rounded border border-gray-200">{v}</button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
