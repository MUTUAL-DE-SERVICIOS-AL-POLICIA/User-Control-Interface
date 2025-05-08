import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { UserInfo, TabsSidebar } from "@/components/users";
import { getUser, getDataSidebar } from "@/api";

interface Props {
  children: React.ReactNode;
  params: Promise<{ uuid: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { uuid } = await params;
  const { error, message, data } = await getUser(uuid);

  if (error) {
    return <div>No se pudo obtener el usuario, {message}</div>;
  }

  const { sidebar } = await getDataSidebar();

  return (
    <>
      <Card className="flex flex-col md:flex-row gap-2 py-2 px-2">
        <Card className="w-full max-w-[300px]">
          <CardHeader className="justify-center">
            <UserInfo user={data} />
          </CardHeader>
          <Divider />
          <CardBody>
            <TabsSidebar sidebar={sidebar} />
          </CardBody>
        </Card>
        {children}
      </Card>
    </>
  );
}
