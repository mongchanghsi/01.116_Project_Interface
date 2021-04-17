import { config } from 'dotenv';
config();

export const googlesheets_url: string =
  process.env.REACT_APP_GOOGLESHEETS_URL || '';
export const flask_api_endpoint: string =
  process.env.REACT_APP_API_ENDPOINT || 'http://127.0.0.1:5000';
