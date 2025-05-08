export interface User {
  uuid?: string;
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
  id: string;
  name: string;
}
export interface UserLdap {
  username: string;
  firstName: string;
  lastName: string;
  position?: string;
}

export interface userManagementModules {
  id: string;
  name?: string;
  displayName?: string;
  description?: string;
}

export interface ResponseData {
  error: boolean;
  message: string;
  [key: string]: any;
}

export interface userRoles extends Rol {
  state: boolean;
}
