import React from 'react';
import { useSync } from '../context/SyncContext';
import { useLanguage } from '../context/LanguageContext';
import { Wifi, WifiOff, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const { isOnline, syncState, pendingCount, triggerSync } = useSync();
  const { lang } = useLanguage();

  if (isOnline && syncState === 'ONLINE' && pendingCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium shadow-lg backdrop-blur-md transition-all duration-300 border">
      {!isOnline ? (
        <div className="flex items-center gap-2 bg-amber-600 text-white px-2 py-1 rounded">
          <WifiOff className="w-3.5 h-3.5 animate-pulse" />
          <span>
            {lang === 'hi' ? 'ऑफ़लाइन मोड' : 'Offline Mode'}
            {pendingCount > 0 && ` (${pendingCount} ${lang === 'hi' ? 'लंबित' : 'pending'})`}
          </span>
        </div>
      ) : syncState === 'SYNCING' ? (
        <div className="flex items-center gap-2 bg-blue-700 text-white px-2 py-1 rounded">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          <span>{lang === 'hi' ? 'सिंक हो रहा है...' : 'Syncing data...'}</span>
        </div>
      ) : syncState === 'SYNCED' ? (
        <div className="flex items-center gap-2 bg-emerald-700 text-white px-2 py-1 rounded">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'डेटा सिंक संपन्न' : 'Data Synced'}</span>
        </div>
      ) : syncState === 'FAILED' ? (
        <div className="flex items-center gap-2 bg-red-700 text-white px-2 py-1 rounded cursor-pointer" onClick={triggerSync}>
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'सिंक विफल (पुनः प्रयास करें)' : 'Sync Failed (Tap to retry)'}</span>
        </div>
      ) : null}
    </div>
  );
};
