import axios from "axios";

export const http = axios.create({
  baseURL: "https://api-im.chatdaddy.tech",
});

export const token = axios.create({
  baseURL: "https://api-teams.chatdaddy.tech",
});
