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

export async function getUser(id: string): Promise<ResponseData> {
  try {
    // const response = await apiClient.GET("auth/users/id");
    // const data = await response.json();

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Error al obtener usuarios",
    //     data: response.statusText
    //   };
    // }

    const data = {
      id: Number(id),
      name: "Tony Reichert",
      username: "treichert",
      position: "Management",
      identityCard: "9994084",
    };

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
