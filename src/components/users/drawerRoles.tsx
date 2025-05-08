"use client";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";

import { userRoles, userManagementModules } from "@/utils/interfaces";
import { CheckboxRoles } from "@/components/users";
interface DrawerRoleProps {
  isOpen: boolean;
  onClose: () => void;
  userRoles: userRoles[];
  module: userManagementModules | null;
}

export const DrawerRoles = ({
  isOpen,
  onClose,
  userRoles,
  module,
}: DrawerRoleProps) => {
  return (
    <>
      <Drawer backdrop="opaque" isOpen={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col">
                <span className="text-2xl font-bold leading-7">
                  {module?.name}
                </span>
                <br />
                Roles
              </DrawerHeader>

              <Divider />
              <DrawerBody>
                <CheckboxRoles userRoles={userRoles} onClose={onClose} />
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
