"use server";

import { ResponseData } from "@/utils/interfaces";

export async function getDataSidebar(): Promise<ResponseData> {
  try {
    const data = [
      {
        name: "Asignar módulos y roles",
        shortened: "assignModulesAndRoles",
      },
    ];

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Error al obtener usuarios",
    //     data: response.statusText,
    //   };
    // }

    return {
      error: false,
      message: "Datos obtenidos exitosamente",
      sidebar: data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener datos del usuario",
      data: err.message,
    };
  }
}
