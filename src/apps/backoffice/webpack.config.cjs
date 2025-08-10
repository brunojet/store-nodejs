const {NxAppWebpackPlugin} = require('@nx/webpack/app-plugin');
const {join} = require('path');

// Log do modo de build para visibilidade
const isDevelopment = process.env.NODE_ENV === 'development';
console.log(`[Nx/webpack] Build mode: ${isDevelopment ? 'development' : 'production'} (NODE_ENV=${process.env.NODE_ENV})`);

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/src/apps/backoffice'),
  },
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
      generatePackageJson: true,
    }),
  ],
};

