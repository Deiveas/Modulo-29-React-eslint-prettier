import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

// Adicionando a configuração para detectar automaticamente a versão do React
pluginReactConfig.settings = {
  react: {
    version: 'detect'
  }
}

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Desativa a regra react/react-in-jsx-scope
      'react-prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
]
