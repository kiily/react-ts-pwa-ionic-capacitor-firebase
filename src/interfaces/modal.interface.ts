export interface IModal {
  isOpen: boolean;
  closed: (data: any) => void;
  modalTitle: string;
}
