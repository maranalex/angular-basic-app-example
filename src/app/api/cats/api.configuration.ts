import { HttpHeaders } from '@angular/common/http';

export const API = 'https://api.thecatapi.com/v1';
export const HEADER_X_API_KEY = 'x-api-key';
export const API_KEY =
  'live_9DKlgFbaQQOciZDKNTnXQaztaCXn9yCXLib5GMrx4tFQmqfuzCye0glOcoB5YB6b';

export const HEADERS = new HttpHeaders()
  .set('content-type', 'application/json')
  .set(HEADER_X_API_KEY, API_KEY);
