// constants.js

// Import API key from .env
export const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Base API URL
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
