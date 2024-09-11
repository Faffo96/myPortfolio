import fs from 'fs';
import dotenv from 'dotenv';

// Carica le variabili ambientali dal file .env
dotenv.config();

const targetPath = './src/environments/environment.development.ts';

const envConfigFile = `
export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
  EMAILJS_USER_ID: '${process.env.EMAILJS_USER_ID}'
};
`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('Error writing environment variables', err);
  } else {
    console.log(`Environment file generated at ${targetPath}`);
  }
});
