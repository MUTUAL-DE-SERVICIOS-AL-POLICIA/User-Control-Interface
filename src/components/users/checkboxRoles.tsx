"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { addToast } from "@heroui/toast";
import { Spinner } from "@heroui/spinner";
import { Checkbox } from "@heroui/checkbox";

import { userRoles } from "@/utils/interfaces";
import { postUserRoles } from "@/api";

interface Props {
  userRoles: userRoles[];
  onClose: () => void;
}
export const CheckboxRoles = ({ userRoles, onClose }: Props) => {
  const params = useParams();
  const uuid = params?.uuid as string;
  const [loading, setLoading] = useState(false);

  const handleRoleChange = async (rol: userRoles) => {
    setLoading(true);
    try {
      const { error, message, data } = await postUserRoles(uuid, rol.id);

      if (error) {
        addToast({
          title: "Error",
          description: `Rol ${rol.name} ${message}`,
          color: "danger",
          timeout: 1000,
          shouldShowTimeoutProgress: true,
        });
        console.error(data);
        onClose();

        return;
      }

      addToast({
        title: "Aceptado",
        description: `Rol ${rol.name} ${message}`,
        color: "success",
        timeout: 1000,
        shouldShowTimeoutProgress: true,
      });

      return;
    } catch (error) {
      console.error("Error al asignar rol al usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {userRoles.map((userRole) => (
        <Checkbox
          key={userRole.id}
          defaultSelected={userRole.state}
          value={String(userRole.id)}
          onChange={() => {
            handleRoleChange(userRole);
          }}
        >
          {userRole.name}
        </Checkbox>
      ))}

      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/20 z-50">
          <Spinner
            classNames={{ label: "text-foreground mt-4" }}
            size="lg"
            variant="spinner"
          />
        </div>
      )}
    </>
  );
};
