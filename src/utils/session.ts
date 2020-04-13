import { config } from '../context/Firebase';

export function readSession() {
  return JSON.parse(window.sessionStorage.getItem(`firebase:authUser:${config.apiKey}:[DEFAULT]`));
}
