import { cookies } from "next/headers";

import { ResponseData } from "@/utils/interfaces";

async function getCookie(nameCookie: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(nameCookie)?.value;

  return cookie;
}

export const checkCookie = async () => {
  const cookie = getCookie("msp");

  if (cookie == undefined) {
    console.error("Sin cookie");
  }
  if (cookie) return cookie;
};

export async function getUserCookie(): Promise<ResponseData> {
  try {
    const raw = await getCookie("user");

    if (!raw) {
      return {
        error: true,
        message: "No se encontró la cookie 'user'",
      };
    }

    return {
      error: false,
      message: "Cookie 'user' obtenida exitosamente",
      data: JSON.parse(raw),
    };
  } catch (error) {
    return {
      error: true,
      message: "Error al parsear la cookie 'user': " + error,
    };
  }
}

export async function getRolesCookie(): Promise<ResponseData> {
  const nameCookie = `mod_${process.env.ID_MODULE}`;

  try {
    const raw = await getCookie(nameCookie);

    if (!raw) {
      return {
        error: true,
        message: "No se encontró los roles del modulo",
      };
    }

    return {
      error: false,
      message: `Cookie mod_${nameCookie} obtenida exitosamente`,
      data: JSON.parse(raw).roles,
    };
  } catch (error) {
    return {
      error: true,
      message: `Error al parsear la cookie mod_${nameCookie}:` + error,
    };
  }
}
