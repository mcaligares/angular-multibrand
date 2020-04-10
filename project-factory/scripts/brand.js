const fs = require('fs');

const BRAND_ARG = '--style=';
const STYLES_FOLDER = 'brands';
const VARIABLE_FILE = 'src/styles/_variables.scss';

const getBrandFromArg = () => {
  const args = process.argv.length >= 2 ? process.argv.splice(2) : [];
  const brand = args.filter(arg => arg.includes(BRAND_ARG))[0];
  return brand && brand.length > 0 ? brand.split('=')[1] : null;
};

const addCommentToStyles = (styles) => {
  const template = `/*
 * Multibrand variable file.
 * This file can be replaced during build by using the \`styles.js\` script.
 * \`npm run brand -- --style=brand-1\` replaces \`_variables.scss\` with \`styles/brand-1.scss\`.
 */`;
  const importDefaultVariables = `\n// Import deafult variables\n@import './default_variables';`;

  return `${template}\n\n${styles}\n\n${importDefaultVariables}`;
};

const copyVariableFile = (srcFile, destFile) => {
  const styles = fs.readFileSync(srcFile);
  const stylesWithComment = addCommentToStyles(styles);
  fs.writeFileSync(destFile, stylesWithComment);
};

const init = () => {
  const brand = getBrandFromArg();
  if (!brand) throw 'style argument not found or is empty';

  const srcFile = `${STYLES_FOLDER}/${brand}.scss`;
  if (!fs.existsSync(srcFile)) throw `style file for '${brand}' not exist`;

  copyVariableFile(srcFile, VARIABLE_FILE);
  console.log(`> [brand script]: brand style ${srcFile} copied to ${VARIABLE_FILE}`);
};

try {
  init();
} catch(e) {
  console.error(`> [brand script] ERROR: ${e}\n`);
}
