const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envFilePath = path.join(__dirname, 'src/environments/environment.ts');
const content = `export const environment = {
  production: true,
  securityToken: '${process.env.SECURITY_TOKEN || ''}',
};`;

fs.writeFileSync(envFilePath, content);
console.log('Environment file generated.');
