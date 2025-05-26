import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // Importa il plugin react
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked, // Usa recommendedTypeChecked (o strictTypeChecked)
            'plugin:react/recommended', // Aggiungi il preset raccomandato di React
            'plugin:react/jsx-runtime', // Aggiungi il preset per il nuovo JSX runtime
            'plugin:prettier/recommended',
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: { // Aggiungi parserOptions per il controllo dei tipi
                project: ['./tsconfig.json'], // Percorso al tuo tsconfig.json (o un array di percorsi)
                tsconfigRootDir: import.meta.dirname, // Importante per la corretta risoluzione dei percorsi
            },
        },
        plugins: {
            react, // Aggiungi il plugin react
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier,
        },
        settings: { // Aggiungi le impostazioni per React
            react: {
                version: 'detect', // Rileva automaticamente la versione di React
            },
        },
        rules: {
            ...react.configs.recommended.rules, // Includi le regole raccomandate di React
            ...react.configs['jsx-runtime'].rules, // Regole per il JSX runtime
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            // Aggiungi qui altre regole personalizzate se necessario
            '@typescript-eslint/no-unused-vars': 'warn', // Esempio: gestisci i warning per le variabili non usate
            'no-unused-vars': 'off', // Disabilita la regola no-unused-vars di base di eslint per evitare conflitti con typescript
            'prettier/prettier': 'warn',
        },
    }
);
