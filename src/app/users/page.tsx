import { Card } from "@heroui/card";

import { subtitle } from "@/components/common";
import { TableUsers } from "@/components/users";
import { getUsers } from "@/api";
export default async function Page() {
  const users = await getUsers();

  if (users.error) {
    return <div className={subtitle()}>No hay usuarios registrados</div>;
  }

  const columns = [
    { name: "Usuario", uid: "name", sortable: true },
    { name: "Acciones", uid: "actions" },
  ];

  return (
    <>
      <div className={subtitle()}>Usuarios registrados</div>
      <Card className="border-small rounded-small border-default-100 dark:border-default-200 p-10 w-full">
        <TableUsers columns={columns} users={users.data} />
      </Card>
    </>
  );
}
