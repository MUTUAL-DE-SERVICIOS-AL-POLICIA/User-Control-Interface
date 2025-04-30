export interface User {
  uuid: string;
  name: string;
  username: string;
  position?: string;
}
export interface Module {
  id: string;
  name: string;
  urlProd?: string;
  urlDev?: string;
  urlManual?: string;
}

export interface Rol {
  id: number;
  name: string;
}
export interface UserLdap {
  username: string;
  firstName: string;
  lastName: string;
  position?: string;
}

export interface userManagementModules {
  id: number;
  name?: string;
  displayName?: string;
  description?: string;
}

export interface ResponseData {
  error: boolean;
  message: string;
  [key: string]: any;
}
