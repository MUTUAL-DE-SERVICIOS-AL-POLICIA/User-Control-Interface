import { Card } from "@heroui/card";

import { UserSidebar } from "@/components/users";
import { getUser } from "@/api";

interface Props {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { id } = await params;
  const { error, message, data } = await getUser(id);

  if (error) {
    return <div>No se pudo obtener el usuario, {message}</div>;
  }

  return (
    <section className="flex flex-col justify-center gap-1 py-8">
      <Card className="border-small rounded-small border-default-100 dark:border-default-200 p-10 w-full">
        <UserSidebar user={data} />
        {children}
      </Card>
    </section>
  );
}
