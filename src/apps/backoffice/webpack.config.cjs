const {NxAppWebpackPlugin} = require('@nx/webpack/app-plugin');
const {join} = require('path');

// Detecta development pela variável de ambiente NODE_ENV
const isDevelopment = process.env.NODE_ENV === 'development';

console.log(`[Nx/webpack] Build mode: ${isDevelopment ? 'development' : 'production'} (isDevelopment=${isDevelopment})`);

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: join(__dirname, '../../../dist/src/apps/backoffice'),
  },
  devtool: isDevelopment ? 'source-map' : false,
  ignoreWarnings: [
    {
      module: /prisma[\\/]generated[\\/]/,
    },
    {
      message: /Failed to parse source map.*prisma.*generated/,
    },
  ],
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: !isDevelopment,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: isDevelopment,
    }),
  ],
};
