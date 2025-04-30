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

  const handleCardClick = (roleId: number) => {
    router.push(`${roleId}/users`);
  };

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
