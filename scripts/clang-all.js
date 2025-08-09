import { execSync } from 'child_process';
import { glob } from 'glob';
import path from 'path';

async function main() {
  const patterns = ['src/**/*.ts', 'src/**/*.js', 'src/**/*.tsx', 'src/**/*.jsx'];
  let files = [];
  for (const pattern of patterns) {
    files = files.concat(await glob(pattern));
  }

  if (files.length === 0) {
    console.log('No files found for clang-format.');
    process.exit(0);
  }

  // Usa npx clang-format se --npx for passado
  const useNpx = process.argv.includes('--npx');
  const clangCmd = useNpx ? 'npx clang-format' : 'clang-format';
  const cmd = `${clangCmd} -i ${files.map(f => '"' + f + '"').join(' ')}`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

main().catch(console.error);
