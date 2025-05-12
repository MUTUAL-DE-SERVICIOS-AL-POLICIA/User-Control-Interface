"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useDraggable,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useState } from "react";
import { Spinner } from "@heroui/spinner";

import { TableLdapUsers } from "./";

import { PlusIcon } from "@/components/common";
import { UserLdap, User } from "@/utils/interfaces";
import { postUserLdap } from "@/api";
import { getUserLdap } from "@/api";

export const ModalLdap = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [usersLdap, setUsersLdap] = useState<UserLdap[]>([]);
  const targetRef = React.useRef<HTMLElement>(
    null,
  ) as React.RefObject<HTMLElement>;
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  const columns = [
    { name: "Usuario", uid: "username", sortable: true },
    { name: "Nombre", uid: "firstName", sortable: true },
    { name: "Apellido", uid: "lastName", sortable: true },
    { name: "Cargo", uid: "position", sortable: true },
  ];

  const [selectedUser, setSelectedUser] = useState<UserLdap | null>(null);

  const handleUserSelect = (userLdap: UserLdap | null) => {
    setSelectedUser(userLdap);
  };

  const handleClose = () => {
    setSelectedUser(null);
    onOpenChange();
  };

  const handleCreateUser = async () => {
    if (!selectedUser) {
      addToast({
        title: "Aviso",
        description:
          "Seleccione el usuario que desea añadir al área de trabajo",
        color: "warning",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });

      return;
    }

    const user: User = {
      name: `${selectedUser.firstName} ${selectedUser.lastName}`,
      username: selectedUser.username,
      position: selectedUser.position,
    };

    const { error, message, data } = await postUserLdap(user);

    if (error) {
      addToast({
        title: "Se encontró un inconveniente con la creación del usuario",
        description: message,
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      console.error(data);

      return;
    }

    addToast({
      title: "Aceptado",
      description: message,
      color: "success",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
    });

    setSelectedUser(null);
    onOpenChange();
  };

  const HandleOnOpen = async () => {
    onOpen();
    setLoading(true);
    try {
      const { error, message, data } = await getUserLdap();

      if (error) {
        addToast({
          title:
            "Se encontró un inconveniente con la obtención de los usuarios del Ldap",
          description: message,
          color: "danger",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      }
      setUsersLdap(data);
    } catch (error) {
      console.error("Error al obtener usuarios del ldap:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className="bg-foreground text-background"
        endContent={<PlusIcon />}
        size="sm"
        onPress={HandleOnOpen}
      >
        Registrar nuevo usuario
      </Button>
      <Modal
        ref={targetRef}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col gap-1">
                Usuarios no registrados
              </ModalHeader>
              <ModalBody>
                {loading && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 z-10">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      size="lg"
                      variant="spinner"
                    />
                  </div>
                )}
                <TableLdapUsers
                  columns={columns}
                  users={usersLdap}
                  onUserSelect={handleUserSelect}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Cerrar
                </Button>
                <Button
                  color={selectedUser ? "success" : "primary"}
                  disabled={!selectedUser}
                  onPress={handleCreateUser}
                >
                  {selectedUser ? "Registrar usuario" : "Seleccione usuario"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
