import { AlertButton, AlertInput } from '@ionic/core';

export interface IAlert {
  isOpen: boolean;
  onDismiss: (event: CustomEvent<any>) => void;
  header?: string;
  message?: string;
  inputs?: AlertInput[];
  buttons?: AlertButton[];
}
