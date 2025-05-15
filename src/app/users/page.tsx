import { Card } from "@heroui/card";

import { TableUsers } from "@/components/users";
import { getUsers } from "@/api";
import { AlertServer } from "@/components/common";

export default async function Page() {
  const { error, message, data } = await getUsers();

  if (error) {
    console.error(data);

    return <AlertServer color="danger" description={message} href="/" />;
  }

  const columns = [
    { name: "Usuario", uid: "name", sortable: true },
    { name: "Acciones", uid: "actions" },
  ];

  return (
    <>
      <Card className="border-small rounded-small border-default-100 dark:border-default-200 p-4 w-full">
        <TableUsers columns={columns} users={data} />
      </Card>
    </>
  );
}
