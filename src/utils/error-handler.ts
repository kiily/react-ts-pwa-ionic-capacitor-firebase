import { FirebaseAuthErrors } from '../context';

export function handleAuthErrors(error: Error) {
  let loginAlertMessage = error.toString();
  if (loginAlertMessage.includes(FirebaseAuthErrors.BadlyFormatted)) {
    loginAlertMessage = 'Your email address is badly formatted';
  } else if (loginAlertMessage.includes(FirebaseAuthErrors.InvalidPassword)) {
    loginAlertMessage = 'The password you entered is not valid';
  } else if (loginAlertMessage.includes(FirebaseAuthErrors.NoUserRecord)) {
    loginAlertMessage = 'There is no record of this user in the database';
  }
  return loginAlertMessage;
}
