module.exports = {
  // ... otras configuraciones de ESLint ...
  extends: [
    // ... tus otras configuraciones de extends (ej. 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended')
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // ¡Asegúrate de que 'prettier' sea la ÚLTIMA entrada para que sobrescriba las reglas de formato!
    'plugin:prettier/recommended', // Combina 'plugin:prettier' y 'eslint-config-prettier'
  ],
  plugins: [
    // ... tus otros plugins
    'prettier', // Añade el plugin de prettier
  ],
  rules: {
    // ... tus otras reglas personalizadas
    'prettier/prettier': [
      'error',
      {
        // Puedes duplicar aquí las reglas de .prettierrc.json si quieres que ESLint las aplique como errores
        // O simplemente dejarlo vacío para que Prettier las maneje directamente
        // Por ejemplo:
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        trailingComma: 'all',
        arrowParens: 'always'
      }
    ],
    // Desactiva reglas de ESLint que Prettier ya maneja o que son redundantes
    'indent': 'off', // Desactiva la regla de indentación de ESLint
    '@typescript-eslint/indent': 'off', // Desactiva la regla de indentación de TypeScript ESLint
    'linebreak-style': 'off', // Desactiva la regla de estilo de salto de línea
    'quotes': 'off', // Desactiva la regla de comillas
    'semi': 'off', // Desactiva la regla de punto y coma
    // ... otras reglas que puedan entrar en conflicto
  },
  // ... otras configuraciones (parserOptions, settings, etc.)
};