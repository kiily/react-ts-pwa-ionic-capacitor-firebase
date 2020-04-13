import { config } from '../context';

export function readSession() {
  const sessionUser = window.sessionStorage.getItem(`firebase:authUser:${config.apiKey}:[DEFAULT]`);
  if (!sessionUser) {
    return;
  }
  return JSON.parse(sessionUser);
}
