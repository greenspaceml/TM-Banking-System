export interface Account {
  id?: string;
  email?: string;
  username: string;
  password: string;
  dateOfBirth?: string;
  gender?: GENDER;
  role?: ROLE;
}
export enum GENDER {
  MALE = 0,
  FEMALE = 1,
  ELSE = 2,
}

export enum ROLE {
  Manager = 0,
  Sale = 1,
  Employee = 2,
}
