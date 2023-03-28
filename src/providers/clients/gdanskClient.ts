import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const gdanskClient = axios.create({
  baseURL: process.env.PROVIDER_API_URL,
  validateStatus: (status) => status < 400,
});

export default gdanskClient;
