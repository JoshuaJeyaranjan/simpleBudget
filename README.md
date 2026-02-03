simpleBudget

React + TypeScript + Vite

This project is a personal learning-in-public experiment where I’m exploring TypeScript while building a simple budget app. The goal is to progressively learn and document TypeScript concepts, update the site iteratively, and share insights in LinkedIn articles about what I’ve learned along the way.

This template uses React with Vite, providing a minimal setup with HMR and some ESLint rules to help enforce good practices.

Official Vite Plugins

Currently, two official React plugins are available:

@vitejs/plugin-react
 – uses Babel
 (or oxc
 with rolldown-vite
) for Fast Refresh.

@vitejs/plugin-react-swc
 – uses SWC
 for Fast Refresh.

React Compiler

This template enables the React Compiler.
See React Compiler docs
 for more information.

Note: Enabling the React Compiler can impact Vite dev & build performance.

ESLint Configuration

For production-grade TypeScript apps, consider enabling type-aware lint rules:

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,  // recommended type-checked rules
      // Or stricter rules:
      tseslint.configs.strictTypeChecked,
      // Optionally, stylistic rules:
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

Optional React-specific ESLint Plugins

You can also install:

eslint-plugin-react-x

eslint-plugin-react-dom

// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

Project Vision

Learning in public: Each update to the project will document what I’ve learned about TypeScript, React, and app state management.

Progressive updates: I will continuously improve the app, refactor types, and introduce patterns like normalization, discriminated unions, derived state, and more.

Content creation: Insights will be shared in LinkedIn articles to demonstrate how TypeScript concepts are applied in real projects.
