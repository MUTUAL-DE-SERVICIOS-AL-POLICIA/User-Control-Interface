export interface User {
  id: number;
  name: string;
  username: string;
  identityCard?: string;
  position?: string;
}
export interface Module {
  id: string;
  name: string;
  urlProd: string;
  urlDev: string;
  urlManual: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface ResponseData {
  error: boolean;
  message: string;
  [key: string]: any; // Permite otros campos con nombres arbitrarios y valores de cualquier tipo
}
