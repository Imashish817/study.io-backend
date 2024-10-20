import express from 'express';
import { z, ZodError } from 'zod';
import cors from 'cors';
import sheets, { SHEET_ID } from './sheetClient.js';

const app = express();
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().min(1, { message: 'Message is required' }),

});


app.use(express.json());
app.use(express.static('public'));
// const cors = require('cors')
app.use(cors());
app.post('/contact-query', async (req, res) => {
  try {
    const body = contactFormSchema.parse(req.body);
    const d = new Date().toLocaleString();
    // Object to Sheets
    const rows = Object.values(body);
    rows.unshift(d);
    console.log(rows);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Contact-Query!A:H',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rows],
      },
    });
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});

app.post('/Consultation-query', async (req, res) => {
  try {
    const body = req.body;

    // Object to Sheets
    const rows = Object.values(body);
    const d = new Date().toLocaleString();
    rows.unshift(d);
    console.log(rows);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Consultation-Query!A:H',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rows],
      },
    });
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});

// app.post('/door-step-Consultation-query', async (req, res) => {
//   try {
//     const body = contactFormSchema.parse(req.body);

//     // Object to Sheets
//     const rows = Object.values(body);
//     console.log(rows);

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: SHEET_ID,
//       range: 'door-step-Consultation-query!A:D',
//       insertDataOption: 'INSERT_ROWS',
//       valueInputOption: 'RAW',
//       requestBody: {
//         values: [rows],
//       },
//     });
//     res.json({ message: 'Data added successfully' });
//   } catch (error) {
//     if (error instanceof ZodError) {
//       res.status(400).json({ error: error.message });
//     } else {
//       res.status(400).json({ error });
//     }
//   }
// });

app.post('/Scholarship-query', async (req, res) => {
  try {
    const body = req.body;
    // Object to Sheets
    const rows = Object.values(body);
    const d = new Date().toLocaleString();
    rows.unshift(d);
    console.log(rows);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Scholarship-Query!A:I',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rows],
      },
    });
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});

app.post('/Newsletter-sub', async (req, res) => {
  try {
    const body = req.body;

    // Object to Sheets
    const rows = Object.values(body);
    const d = new Date().toLocaleString();
    rows.unshift(d);
    console.log(rows);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Newsletter-Subscriber!A:B',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rows],
      },
    });
    res.json({ message: 'Data added successfully' });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});
app.listen(5000, () => console.log(`App running on http://localhost:5000`));
