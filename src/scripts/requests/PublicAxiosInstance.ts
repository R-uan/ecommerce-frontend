import axios from "axios";
import { config } from "dotenv";
config();

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const public_instance = axios.create({ baseURL: BACKEND_URL });

export default public_instance;
