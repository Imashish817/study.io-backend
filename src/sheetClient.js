import { google } from 'googleapis';



export const SHEET_ID = '1Ov5yE3xg64vh16GBZJIkPCOOXtufl6TzOf6R9R5K214';
const client_email = process.env.client_email;
const private_key = process.env.private_key.split(String.raw`\n`).join('\n');

console.log(client_email)
const client = new google.auth.JWT(client_email, null, private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);
const sheets = google.sheets({ version: 'v4', auth: client });

export default sheets;
