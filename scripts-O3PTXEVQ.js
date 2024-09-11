import o from"fs";import r from"dotenv";r.config();const n="./src/environments/environment.development.ts",t=`
export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
  EMAILJS_USER_ID: '${process.env.EMAILJS_USER_ID}'
};
`;o.writeFile(n,t,e=>{e?console.error("Error writing environment variables",e):console.log(`Environment file generated at ${n}`)});
