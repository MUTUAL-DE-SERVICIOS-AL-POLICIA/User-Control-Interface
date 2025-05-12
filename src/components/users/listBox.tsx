"use client";

import { Listbox, ListboxItem } from "@heroui/listbox";
import { Divider } from "@heroui/divider";
import { Spinner } from "@heroui/spinner";
import { useState } from "react";
import { addToast } from "@heroui/toast";

import { DrawerRoles } from "./drawerRoles";

import { userManagementModules, userRoles } from "@/utils/interfaces";
import { ChevronRightIcon } from "@/components/common";
import { getUserRoles } from "@/api";

interface Props {
  modules: userManagementModules[];
}

export const ListBox = ({ modules }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userRoles, setUserRoles] = useState<userRoles[]>([]);
  const [module, setModule] = useState<userManagementModules | null>(null);

  const handleModuleClick = async (module: userManagementModules) => {
    setLoading(true);
    setModule(module);
    try {
      const { error, message, data } = await getUserRoles("", module.id);

      if (error) {
        addToast({
          title: "Se encontró un inconveniente con la obtención de los roles",
          description: message,
          color: "danger",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
        console.error(data);

        return;
      }

      setUserRoles(data);
      setIsDrawerOpen(true);
    } catch (error) {
      console.error("Error al obtener roles del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 w-full">
      <h4 className="px-1 py-1 text-large font-bold leading-none text-default-800 text-pretty ">
        Módulos
      </h4>
      <Divider className="py-1" />
      <Listbox aria-label="Actions">
        {modules.map((module) => (
          <ListboxItem
            key={module.id}
            color="primary"
            endContent={
              <div className="flex items-center gap-1 text-default-400">
                <ChevronRightIcon className="text-xl font-bold" />
              </div>
            }
            onPress={() => handleModuleClick(module)}
          >
            {module.name}
          </ListboxItem>
        ))}
      </Listbox>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/20 z-50">
          <Spinner
            classNames={{ label: "text-foreground mt-4" }}
            size="lg"
            variant="spinner"
          />
        </div>
      )}

      <DrawerRoles
        isOpen={isDrawerOpen}
        module={module}
        userRoles={userRoles}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};
