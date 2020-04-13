export interface IUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  tenant?: string;
  username?: string;
  admin?: boolean;
}
