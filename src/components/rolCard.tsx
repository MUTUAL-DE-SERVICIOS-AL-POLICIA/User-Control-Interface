"use client";

import { Card } from "@heroui/card";
import { useRouter } from "next/navigation";

import { RolInfo } from "./rolInfo";

import { Rol } from "@/utils/interfaces";

interface Props {
  roles: Rol[];
}
export const RolCard = ({ roles }: Props) => {
  const router = useRouter();

  function handleCardClick(roleId: string) {
    document.cookie = `currentRol=${roleId}; path=/; max-age=14400; SameSite=Strict`;
    router.push(`/users`);
  }

  return (
    <>
      {(roles || []).map((rol) => (
        <Card
          key={rol.id}
          isPressable
          shadow="sm"
          onPress={() => handleCardClick(rol.id)}
        >
          <RolInfo rol={rol} />
        </Card>
      ))}
    </>
  );
};
