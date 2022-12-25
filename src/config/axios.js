import axios from "axios";
import { env } from "../config/config.js";
export const crowdServer = axios.create({
  baseURL: `${env.api}/`,
});
