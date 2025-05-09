import { Card } from "@heroui/card";

import { subtitle } from "@/components/common";
import { TableUsers } from "@/components/users";
import { getUsers, getUserLdap } from "@/api";
export default async function Page() {
  const users = await getUsers();
  const usersLdap = await getUserLdap();

  if (users.error) {
    return <div className={subtitle()}>No hay usuarios registrados</div>;
  }

  if (usersLdap.error) {
    return <div className={subtitle()}>No hay usuarios ldap registrados</div>;
  }

  const columns = [
    { name: "Usuario", uid: "name", sortable: true },
    { name: "Acciones", uid: "actions" },
  ];

  return (
    <>
      <Card className="border-small rounded-small border-default-100 dark:border-default-200 p-4 w-full">
        <TableUsers
          columns={columns}
          users={users.data}
          usersLdap={usersLdap.data}
        />
      </Card>
    </>
  );
}
