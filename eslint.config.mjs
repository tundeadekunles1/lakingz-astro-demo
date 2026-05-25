// ESLint configuration (flat config format used by ESLint 9+).
// Philosophy for this project: genuine mistakes are "error" (they block a push),
// while stylistic preferences are "warn" (they show a message but never block).
// That keeps the guardrail helpful without getting in the way while learning.

import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Don't lint generated, third-party, or tooling folders.
  // .agents holds Claude Code skill scripts (vendored/minified), not site source.
  { ignores: ['dist/**', 'node_modules/**', '.astro/**', '.vscode/**', '.agents/**'] },

  // Baseline TypeScript rules (Astro frontmatter is TypeScript under the hood).
  ...tseslint.configs.recommended,

  // Astro-specific rules: validates .astro frontmatter, templates, and directives.
  ...eslintPluginAstro.configs.recommended,

  // Project tweaks: keep these advisory so they inform without blocking pushes.
  {
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
