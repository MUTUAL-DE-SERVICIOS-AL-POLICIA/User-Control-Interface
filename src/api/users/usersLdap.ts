"use server";

import { ResponseData } from "@/utils/interfaces";
import { apiClient } from "@/utils/services";
import { User } from "@/utils/interfaces";

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

export async function postUserLdap(user: User): Promise<ResponseData> {
  try {
    // const response = await apiClient.POST(`auth/ldapUsers`, user);

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: `Error al obtener usuarios`,
    //     data: response.statusText,
    //   };
    // }

    return {
      error: false,
      message: `${user.name} registrado exitosamente`,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener datos del usuario",
      data: err.message,
    };
  }
}
