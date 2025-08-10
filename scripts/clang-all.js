import { execSync } from 'child_process';
import { glob } from 'glob';

async function main() {
  const patterns = [
    'src/**/*.ts',
    'src/**/*.js',
    'src/**/*.tsx',
    'src/**/*.jsx'
  ];
  let files = [];
  for (const pattern of patterns) {
    files = files.concat(
      await glob(pattern, {
        ignore: [
          '**/prisma/generated/**',
          '**/dist/**'
        ]
      })
    );
  }

  if (files.length === 0) {
    console.log('No files found for clang-format.');
    process.exit(0);
  }

  const cmd = `npx clang-format -i ${files.map(f => '"' + f + '"').join(' ')}`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

main().catch(console.error);
