"use client";

import { Listbox, ListboxItem } from "@heroui/listbox";

import { userManagementModules } from "@/utils/interfaces";

interface Props {
  modules: userManagementModules[];
}
export const ListBox = ({ modules }: Props) => {
  return (
    <Listbox
      aria-label="Dynamic Actions"
      items={modules}
      onAction={(key) => alert(key)}
    >
      {(module) => <ListboxItem key={module.id}>{module.name}</ListboxItem>}
    </Listbox>
  );
};
