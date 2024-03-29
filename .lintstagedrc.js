module.exports = {
  '*.{ts,tsx,js,jsx}': ['prettier --write', 'eslint --fix'],
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit'],
  '*.json': ['prettier --write'],
  '*.css': ['stylelint --fix'],
  'package.json': ['prettier-package-json --write'],
};
