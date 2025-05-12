import { cookies } from "next/headers";

import { ResponseData } from "@/utils/interfaces";

export async function getCookie(nameCookie: string): Promise<any> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(nameCookie);

  if (!cookie) {
    return undefined;
  }

  return cookie.value;
}

export async function getUserCookie(): Promise<ResponseData> {
  try {
    const cookie = await getCookie("user");

    if (!cookie) {
      return {
        error: true,
        message: "No se encontró la cookie 'user'",
      };
    }

    return {
      error: false,
      message: "Cookie 'user' obtenida exitosamente",
      data: JSON.parse(cookie),
    };
  } catch (error) {
    return {
      error: true,
      message: "Error al obtener la cookie 'user': " + error,
    };
  }
}

export async function getRolesCookie(): Promise<ResponseData> {
  const nameCookie = `mod_${process.env.ID_MODULE}`;

  try {
    const cookie = await getCookie(nameCookie);

    if (!cookie) {
      return {
        error: true,
        message: "No se encontró la cookie del modulo_#",
      };
    }

    const roles = JSON.parse(cookie).roles;

    if (roles.length === 0) {
      return {
        error: true,
        message: `Modulo encontrado exitosamente, pero no tiene roles asignados`,
      };
    }

    return {
      error: false,
      message: `Cookie mod_${nameCookie} obtenida exitosamente`,
      data: roles,
    };
  } catch (error) {
    return {
      error: true,
      message: `Error al encontrar la cookie mod_${nameCookie}:` + error,
    };
  }
}
