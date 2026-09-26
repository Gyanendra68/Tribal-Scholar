import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { UserCheck, ShieldAlert, Award, AlertCircle, Check, X, LogIn, UserPlus, KeyRound } from 'lucide-react';

interface DemoLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'demo' | 'signin' | 'register';
}

export const DemoLoginModal: React.FC<DemoLoginModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'demo'
}) => {
  const { demoLogin, login, register } = useAuth();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'demo' | 'signin' | 'register'>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setError(null);
    }
  }, [isOpen, initialTab]);

  // Sign In Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form States
  const [regData, setRegData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    role: 'STUDENT',
    category: 'ST',
    stCertificateNo: '',
    pvtgStatus: false,
    pvtgGroup: '',
    state: 'Jharkhand',
    district: 'Ranchi',
    institutionName: '',
    institutionType: 'STATE_UNIVERSITY',
    courseName: '',
    courseLevel: 'UNDERGRADUATE',
    classYear: '1st Year',
    familyAnnualIncome: 150000
  });

  const [error, setError] = useState<string | null>(null);
  const [loadingEmail, setLoadingEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const demoAccounts = [
    {
      role: 'STUDENT',
      name: 'Sunita Bai Munda',
      email: 'student@example.com',
      password: 'Student@123',
      badge: lang === 'hi' ? 'सत्यापित आवेदन' : 'Verified Applicant',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: lang === 'hi'
        ? 'झारखंड की एसटी छात्रा। पोस्ट-मैट्रिक आवेदन "सत्यापित" (VERIFIED) चरण पर है, स्वीकृति आदेश प्रतीक्षित।'
        : 'ST student from Jharkhand. Holds an active Post-Matric application at "VERIFIED" stage awaiting sanction.'
    },
    {
      role: 'STUDENT',
      name: 'Birsa Soren',
      email: 'deficiency.student@example.com',
      password: 'Student@123',
      badge: lang === 'hi' ? 'कमी निवारण (Deficiency)' : 'Deficiency Resolution',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      description: lang === 'hi'
        ? 'ओडिशा के छात्र। आय प्रमाण पत्र पर अधिकारी द्वारा आपत्ति दर्ज की गई है। सुधार व पुनः प्रस्तुति का डेमो।'
        : 'Student with active DEFICIENCY on Income Certificate. Perfect for demonstrating student correction & resubmission workflow.'
    },
    {
      role: 'STUDENT',
      name: 'Kavita Gond (PVTG)',
      email: 'fresh.student@example.com',
      password: 'Student@123',
      badge: lang === 'hi' ? 'नवीन आवेदन डेमो' : 'Fresh Application',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      description: lang === 'hi'
        ? 'छत्तीसगढ़ की पीवीटीजी (माड़िया गोंड) छात्रा। एनआईटी रायपुर में अध्ययनरत। पात्रता जांच व नए आवेदन हेतु उपयुक्त।'
        : 'PVTG (Maria Gond) student at NIT Raipur. Ideal for demonstrating the rule-based Eligibility Checker and 9-step Application submission.'
    },
    {
      role: 'OFFICER',
      name: 'Dr. Rameshwar Oraon',
      email: 'officer@example.com',
      password: 'Officer@123',
      badge: lang === 'hi' ? 'सत्यापन अधिकारी' : 'Verification Officer',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      description: lang === 'hi'
        ? 'जिला सत्यापन अधिकारी। आवेदन जांच, आपत्ति दर्ज, स्वीकृति (Sanction) एवं मॉक डीबीटी भुगतान का अधिकार।'
        : 'District Verification Officer. Has complete controls: Verify, Approve, Reject, Raise Deficiency, Issue Sanction, and Disburse DBT.'
    },
    {
      role: 'ADMIN',
      name: 'Shri Arjun Meena, IAS',
      email: 'admin@example.com',
      password: 'Admin@123',
      badge: lang === 'hi' ? 'मंत्रालय प्रशासक' : 'MoTA Central Admin',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      description: lang === 'hi'
        ? 'जनजातीय कार्य मंत्रालय। राष्ट्रीय विश्लेषण, यूडीआईएसई+/अपार स्वचालित छात्र पहचान इंजन एवं सिस्टम स्वास्थ्य।'
        : 'MoTA Central Administrator. Access to National Analytics, UDISE+/APAAR/OTR Outreach identification, and integration monitors.'
    }
  ];

  const handleSelectDemo = async (email: string) => {
    setLoadingEmail(email);
    setError(null);
    const success = await demoLogin(email);
    setLoadingEmail(null);
    if (success) {
      onClose();
    } else {
      setError('Login failed. Please retry.');
    }
  };

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const res = await login(loginEmail, loginPassword);
    setIsSubmitting(false);
    if (res.success) {
      onClose();
    } else {
      setError(res.error || 'Invalid credentials');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (regData.password !== regData.confirmPassword) {
      setError(lang === 'hi' ? 'पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते हैं।' : 'Passwords do not match.');
      return;
    }

    if (regData.password.length < 6) {
      setError(lang === 'hi' ? 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।' : 'Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);
    const res = await register(regData);
    setIsSubmitting(false);

    if (res.success) {
      onClose();
    } else {
      setError(res.error || 'Registration failed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0b3c5d] px-6 py-4 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
              Ministry of Tribal Affairs • Government of India
            </span>
            <h2 className="text-lg font-bold">
              {activeTab === 'register'
                ? (lang === 'hi' ? 'नया छात्र खाता बनाएं (पंजीकरण)' : 'Create Student Account / Register')
                : activeTab === 'signin'
                ? (lang === 'hi' ? 'खाते में प्रवेश करें (लॉगिन)' : 'Sign In to Your Account')
                : (lang === 'hi' ? 'त्वरित डेमो भूमिका चयन' : 'Demo Account Selector')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3">
          <button
            onClick={() => { setActiveTab('demo'); setError(null); }}
            className={`pb-2 text-xs font-bold transition border-b-2 mr-5 flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? '1-क्लिक डेमो' : '1-Click Demo'}</span>
          </button>

          <button
            onClick={() => { setActiveTab('signin'); setError(null); }}
            className={`pb-2 text-xs font-bold transition border-b-2 mr-5 flex items-center gap-1.5 ${
              activeTab === 'signin'
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'लॉगिन' : 'Sign In'}</span>
          </button>

          <button
            onClick={() => { setActiveTab('register'); setError(null); }}
            className={`pb-2 text-xs font-bold transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'register'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'खाता बनाएं (Register)' : 'Create Account'}</span>
          </button>
        </div>

        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="p-6 max-h-[72vh] overflow-y-auto">
          {/* TAB 1: 1-Click Demo */}
          {activeTab === 'demo' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600 mb-2">
                {lang === 'hi'
                  ? 'मूल्यांकनकर्ता किसी भी भूमिका पर क्लिक करके सीधे प्रवेश कर सकते हैं:'
                  : 'Click on any scenario below to log in immediately with pre-configured mock data:'}
              </p>

              {demoAccounts.map((account) => (
                <div
                  key={account.email}
                  onClick={() => handleSelectDemo(account.email)}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition cursor-pointer group relative shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm group-hover:text-blue-700">
                          {account.name}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${account.badgeColor}`}>
                          {account.badge}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">
                        {account.email} • Password: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">{account.password}</code>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {account.description}
                      </p>
                    </div>

                    <button
                      disabled={loadingEmail === account.email}
                      className="px-3 py-1.5 bg-blue-700 group-hover:bg-blue-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm transition flex-shrink-0"
                    >
                      {loadingEmail === account.email ? (
                        <span>...</span>
                      ) : (
                        <>
                          <LogIn className="w-3.5 h-3.5" />
                          <span>Login</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t text-center">
                <button
                  onClick={() => setActiveTab('register')}
                  className="text-xs font-bold text-blue-700 hover:underline"
                >
                  {lang === 'hi' ? 'नया छात्र खाता बनाना चाहते हैं? यहाँ क्लिक करें →' : 'Want to create a brand new student account? Click here →'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Sign In */}
          {activeTab === 'signin' && (
            <form onSubmit={handleCustomLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="e.g. student@example.com"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white rounded-lg font-bold text-sm shadow-md transition"
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>

              <div className="pt-3 border-t text-center text-xs text-slate-600">
                <span>{lang === 'hi' ? 'खाता नहीं है? ' : "Don't have an account? "}</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className="font-bold text-emerald-700 hover:underline ml-1"
                >
                  {lang === 'hi' ? 'यहाँ नया खाता बनाएं' : 'Create an Account'}
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Create Account / Registration */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={regData.fullName}
                    onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                    placeholder="e.g. Birsa Tirkey"
                    required
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    value={regData.email}
                    onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                    placeholder="student@domain.com"
                    required
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    value={regData.mobile}
                    onChange={(e) => setRegData({ ...regData, mobile: e.target.value })}
                    placeholder="10-digit mobile"
                    required
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पासवर्ड *' : 'Password *'}
                  </label>
                  <input
                    type="password"
                    value={regData.password}
                    onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                    placeholder="Min 6 characters"
                    required
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पासवर्ड पुष्टि करें *' : 'Confirm Password *'}
                  </label>
                  <input
                    type="password"
                    value={regData.confirmPassword}
                    onChange={(e) => setRegData({ ...regData, confirmPassword: e.target.value })}
                    placeholder="Re-enter password"
                    required
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'एसटी प्रमाण पत्र क्रमांक' : 'ST Certificate Number'}
                  </label>
                  <input
                    type="text"
                    value={regData.stCertificateNo}
                    onChange={(e) => setRegData({ ...regData, stCertificateNo: e.target.value })}
                    placeholder="e.g. JH-ST-2026-9901"
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'राज्य' : 'State'}
                  </label>
                  <select
                    value={regData.state}
                    onChange={(e) => setRegData({ ...regData, state: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  >
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Assam">Assam</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'शिक्षण संस्थान का नाम' : 'Institution Name'}
                  </label>
                  <input
                    type="text"
                    value={regData.institutionName}
                    onChange={(e) => setRegData({ ...regData, institutionName: e.target.value })}
                    placeholder="e.g. Central University / College"
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'वार्षिक पारिवारिक आय (₹)' : 'Family Annual Income (₹)'}
                  </label>
                  <input
                    type="number"
                    value={regData.familyAnnualIncome}
                    onChange={(e) => setRegData({ ...regData, familyAnnualIncome: Number(e.target.value) })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="regPvtg"
                  checked={regData.pvtgStatus}
                  onChange={(e) => setRegData({ ...regData, pvtgStatus: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 rounded"
                />
                <label htmlFor="regPvtg" className="text-xs font-bold text-slate-700">
                  {lang === 'hi' ? 'विशेष रूप से कमजोर जनजातीय समूह (PVTG) से संबंधित' : 'Belongs to Particularly Vulnerable Tribal Group (PVTG)'}
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-lg font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5 mt-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>{isSubmitting ? 'Registering...' : (lang === 'hi' ? 'खाता पंजीकृत करें एवं प्रवेश करें' : 'Register & Create Account')}</span>
              </button>

              <div className="pt-2 border-t text-center text-xs text-slate-600">
                <span>{lang === 'hi' ? 'पहले से खाता है? ' : 'Already have an account? '}</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('signin')}
                  className="font-bold text-blue-700 hover:underline ml-1"
                >
                  {lang === 'hi' ? 'यहाँ लॉगिन करें' : 'Sign In here'}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center">
          <p className="text-[11px] text-slate-500">
            {t.mockNotice}
          </p>
        </div>
      </div>
    </div>
  );
};
