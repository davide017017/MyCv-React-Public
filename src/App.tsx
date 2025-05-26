import { useState } from 'react';
import CVPage from './components/CVPage';
import './styles/print.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [printMode, setPrintMode] = useState<'print-dark' | 'print-light'>('print-dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const handlePrint = () => {
    document.body.className = printMode;
    window.print();
  };

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      {/* 🔁 Selettore tema UI */}
      <div className="print:hidden border-b-4 border-[var(--color-primary)] py-6 flex flex-col items-center gap-2 bg-[var(--color-theme-banner)]">
        <div className="flex items-center gap-2">
          <span className="text-sm">🌙</span>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center
              ${theme === 'dark' ? 'bg-[var(--color-primary)]' : 'bg-yellow-400'}`}
          >
            <span
              className={`w-6 h-6 rounded-full transition-transform duration-300 absolute
                ${
                  theme === 'dark'
                    ? 'translate-x-[2px] bg-[var(--color-bg)]'
                    : 'translate-x-[30px] bg-white'
                }`}
            />
          </button>
          <span className="text-sm">☀️</span>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
          Tema attuale: <strong>{theme === 'dark' ? 'Scuro' : 'Chiaro'}</strong>
        </p>
      </div>

      {/* 📄 Contenuto del CV */}
      <CVPage />

      {/* 🖨️ Selettore stampa */}
      <div className="print:hidden border-t-4 border-[var(--color-primary)] shadow-inner bg-[var(--color-banner-footer)]">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex justify-center items-center gap-6 flex-wrap">
          {/* Toggle stampa */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">🌙</span>
              <button
                onClick={() =>
                  setPrintMode((prev) => (prev === 'print-dark' ? 'print-light' : 'print-dark'))
                }
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center
                  ${printMode === 'print-dark' ? 'bg-[var(--color-primary)]' : 'bg-yellow-400'}`}
              >
                <span
                  className={`w-6 h-6 rounded-full transition-transform duration-300 absolute
                    ${
                      printMode === 'print-dark'
                        ? 'translate-x-[2px] bg-[var(--color-bg)]'
                        : 'translate-x-[30px] bg-white'
                    }`}
                />
              </button>
              <span className="text-sm">☀️</span>
            </div>
            <p className="text-xs text-[var(--color-muted)]">
              Modalità stampa: <strong>{printMode === 'print-dark' ? 'Scura' : 'Chiara'}</strong>
            </p>
          </div>

          {/* Bottone stampa */}
          <button
            onClick={handlePrint}
            className="px-4 py-1.5 rounded text-sm font-semibold bg-[var(--color-primary)] text-white border border-[var(--color-primary)] shadow hover:brightness-110 transition"
          >
            📄 Stampa (o Salva PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
