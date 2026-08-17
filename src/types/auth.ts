export type UserRole =
  | "ADMIN"
  | "HR"
  | "EMPLOYEE";



export interface User {

  email: string;

  role: UserRole;

  isAuthenticated: boolean;

}