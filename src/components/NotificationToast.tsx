import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function NotificationToast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const typeConfig = {
    success: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/20 text-emerald-800 dark:text-emerald-300',
      icon: CheckCircle2,
      accent: 'bg-emerald-500'
    },
    error: {
      bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-500/20 text-rose-800 dark:text-rose-300',
      icon: AlertCircle,
      accent: 'bg-rose-500'
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-500/20 text-blue-800 dark:text-blue-300',
      icon: Info,
      accent: 'bg-blue-505'
    }
  };

  const currentConfig = typeConfig[toast.type] || typeConfig.info;
  const ActiveIcon = currentConfig.icon;

  return (
    <div className="fixed bottom-6 right-6 z-55 max-w-sm w-full font-sans pointer-events-auto px-4 sm:px-0">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className={`relative p-4 rounded-2xl border backdrop-blur-md shadow-2xl flex gap-3 items-start overflow-hidden ${currentConfig.bg}`}
        >
          {/* Accent Line */}
          <span className={`absolute left-0 top-0 bottom-0 w-1 ${currentConfig.accent}`} />

          {/* Icon */}
          <div className="mt-0.5 shrink-0">
            <ActiveIcon size={18} />
          </div>

          {/* Msg Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold leading-none mb-1 uppercase tracking-wider font-mono">
              {toast.title}
            </h4>
            <p className="text-xs leading-normal opacity-90 font-medium">
              {toast.message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="shrink-0 p-1 text-inherit opacity-60 hover:opacity-100 transition-opacity rounded-md"
            aria-label="Close notification"
          >
            <X size={14} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
