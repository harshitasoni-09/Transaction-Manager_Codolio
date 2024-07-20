import axios from 'axios';

const GOOGLE_SHEETS_FILE_ID = '1_zkj5NozL7q-lOOyRUmBC86QWd_zN96_OoJ96CSvrr8';
const SHEET_NAME = 'Transactions';
const API_KEY = 'AIzaSyB8uEiKV1Z8NOMZqyPrSzmc-JQHvdx-zaw'; // Replace with your actual API key

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_FILE_ID}/values/${SHEET_NAME}?key=${API_KEY}`
    );
    return response.data.values;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};
