export interface ICredentials {
  email: string;
  password: string;
}

export enum Roles {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  role: Roles;
}