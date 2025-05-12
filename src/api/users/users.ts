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
        message: "No se pudo obtener los usuarios",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message: "Usuarios obtenidos exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener datos getUsers",
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
      message: "Error al obtener getUser",
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
        message:
          "Se encontró un inconveniente para la obtención de los modulos de asignación de roles",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message:
        "Datos de los modulos para asignación de roles obtenidos exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener getUserManagementModules",
      data: err.message,
    };
  }
}

export async function getUserRoles(
  userUuid: string,
  moduleId: string,
): Promise<ResponseData> {
  try {
    // const response = await apiClient.GET(`auth/userManagementRoles`);
    // const data = await response.json();

    const data = [
      {
        id: 1,
        name: "Plataforma",
        state: true,
      },
      {
        id: 2,
        name: "Recepción",
        state: false,
      },
      {
        id: 3,
        name: "Calificación",
        state: true,
      },
      {
        id: 4,
        name: "Liquidación",
        state: false,
      },
      {
        id: 5,
        name: "Legal",
        state: false,
      },
      {
        id: 6,
        name: "Plataforma",
        state: true,
      },
      {
        id: 7,
        name: "Recepción",
        state: false,
      },
      {
        id: 8,
        name: "Calificación",
        state: true,
      },
      {
        id: 9,
        name: "Liquidación",
        state: false,
      },
      {
        id: 10,
        name: "Legal",
        state: false,
      },
      {
        id: 11,
        name: "Plataforma",
        state: true,
      },
      {
        id: 12,
        name: "Recepción",
        state: false,
      },
      {
        id: 13,
        name: "Calificación",
        state: true,
      },
      {
        id: 14,
        name: "Liquidación",
        state: false,
      },
      {
        id: 15,
        name: "Legal",
        state: false,
      },
      {
        id: 16,
        name: "Plataforma",
        state: true,
      },
      {
        id: 17,
        name: "Recepción",
        state: false,
      },
      {
        id: 18,
        name: "Calificación",
        state: true,
      },
      {
        id: 19,
        name: "Liquidación",
        state: false,
      },
      {
        id: 20,
        name: "Legal",
        state: false,
      },
    ];

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Error al obtener modulos",
    //     data: response.statusText,
    //   };
    // }

    return {
      error: false,
      message: "Datos de los modulos obtenidos exitosamente",
      data,
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al obtener roles de los usuarios getUserRoles",
      data: err.message,
    };
  }
}

export async function postUserRoles(
  userUuid: string,
  roleId: string,
): Promise<ResponseData> {
  try {
    // const response = await apiClient.POST(`auth/${userUuid}/${roleId}`);

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Error al asignar rol",
    //     data: response.statusText,
    //   };
    // }

    return {
      error: false,
      message: "Actualizado Exitosamente",
    };
  } catch (err: any) {
    return {
      error: true,
      message: "Error al asignar rol",
      data: err.message,
    };
  }
}
