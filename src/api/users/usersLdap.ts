"use server";

import { ResponseData } from "@/utils/interfaces";
import { apiClient } from "@/utils/services";

export async function getUserLdap(): Promise<ResponseData> {
  try {
    const response = await apiClient.GET(`auth/ldapUsers`);
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
