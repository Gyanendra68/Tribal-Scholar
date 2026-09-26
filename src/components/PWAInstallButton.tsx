import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download, Smartphone, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { lang } = useLanguage();

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-xs rounded-md shadow-sm transition"
        title={lang === 'hi' ? 'ऐप इंस्टॉल करें' : 'Install PWA App'}
      >
        <Download className="w-3.5 h-3.5" />
        <span>{lang === 'hi' ? 'ऐप इंस्टॉल करें' : 'Install App'}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-500/20 text-amber-200 border border-amber-400/40 rounded-md text-xs font-medium hover:bg-amber-500/30 transition"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'iOS पर इंस्टॉल' : 'Install iOS'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl text-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'hi' ? 'iPhone / iPad पर ऐप जोड़ें' : 'Install on iPhone / iPad'}
                </h3>
                <button onClick={() => setShowIOSGuide(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {lang === 'hi' ? (
                  <>
                    1. Safari ब्राउज़र में नीचे दिए गए <strong>Share</strong> बटन पर टैप करें।<br />
                    2. नीचे स्क्रॉल करें और <strong>Add to Home Screen</strong> चुनें।
                  </>
                ) : (
                  <>
                    1. Tap the <strong>Share</strong> icon in Safari toolbar.<br />
                    2. Scroll down and tap <strong>Add to Home Screen</strong>.
                  </>
                )}
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-lg bg-blue-700 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition"
              >
                {lang === 'hi' ? 'समझ गया' : 'Got it'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
