"use server";

import { apiClient } from "@/utils/services";
import { ResponseData } from "@/utils/interfaces";

export async function getUsers(): Promise<ResponseData> {
  try {
    const response = await apiClient.GET("auth/users");
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Error al obtener usuarios",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message: "Datos del usuario obtenido exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error de red o de formato JSON",
      data: err.message,
    };
  }
}

export async function getUser(uuid: string): Promise<ResponseData> {
  try {
    const response = await apiClient.GET(`auth/users/${uuid}`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Error al obtener usuarios",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message: "Datos del usuario obtenidos exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener datos del usuario",
      data: err.message,
    };
  }
}

export async function getUserManagementModules(): Promise<ResponseData> {
  try {
    const response = await apiClient.GET(`auth/userManagementRoles`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Error al obtener modulos",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message: "Datos de los modulos obtenidos exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener datos del usuario",
      data: err.message,
    };
  }
}
