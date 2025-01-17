/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Importante per Vite
    "./src/**/*.{js,ts,jsx,tsx}", // Percorso dei tuoi componenti React
  ],
  theme: {
    extend: {
      minWidth: {
      '1/2': '50%', // Aggiungi la tua classe personalizzata
    },
      colors: {
        'vscode-foreground': 'var(--vscode-foreground)',
        'vscode-background': 'var(--vscode-background)',
        'vscode-lighter-background': 'var(--vscode-lighter-background)',
        'vscode-border': 'var(--vscode-border)',
        'vscode-blue': 'var(--vscode-blue)',
        'vscode-green': 'var(--vscode-green)',
        'vscode-darker-gray': 'var(--vscode-darker-gray)',
        'vscode-light-gray': 'var(--vscode-light-gray)',
        'vscode-yellow': 'var(--vscode-yellow)',
        'vscode-orange': 'var(--vscode-orange)',
        'vscode-purple': 'var(--vscode-purple)',
        'vscode-cyan': 'var(--vscode-cyan)',
        'vscode-pink': 'var(--vscode-pink)',
        'vscode-light-blue': 'var(--vscode-light-blue)',
        'vscode-light-green': 'var(--vscode-light-green)',
        'vscode-light-red': 'var(--vscode-light-red)',
        'vscode-light-purple': 'var(--vscode-light-purple)',
        'vscode-light-cyan': 'var(--vscode-light-cyan)',
        'vscode-light-pink': 'var(--vscode-light-pink)',
        'vscode-light-yellow': 'var(--vscode-light-yellow)',
      },
      fontFamily: {
        'vscode-base': 'var(--font-family-base)',
      },
    }, 
  },
  plugins: [], 
}