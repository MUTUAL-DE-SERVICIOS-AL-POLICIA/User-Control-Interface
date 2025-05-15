import { Card } from "@heroui/card";

import { TabsContent } from "@/components/users";
import { ListBox } from "@/components/users";
import { getUserManagementModules } from "@/api";
import { AlertServer } from "@/components/common";

export default async function Page() {
  const { error, message, data } = await getUserManagementModules();

  if (error) {
    console.error(data);

    return <AlertServer color="danger" description={message} />;
  }

  const note: string =
    "El usuario debe volver a Iniciar Sesión, después de la asignación de roles.";

  const tabsContent: Record<string, React.ReactNode> = {
    tab0: <div>Selecciona una pestaña</div>,
    assignModulesAndRoles: (
      <Card className="w-full md:flex-1">
        <ListBox modules={data} />
        <AlertServer color="primary" description={note} />
      </Card>
    ),
  };

  return <TabsContent tabsContent={tabsContent} />;
}
