import { redirect } from "next/navigation";

import { getDataSidebar } from "@/api";

interface Props {
  params: Promise<{ rol: string; uuid: string }>;
}

export default async function Page({ params }: Props) {
  const { rol, uuid } = await params;

  const { sidebar } = await getDataSidebar();

  redirect(`/${rol}/users/${uuid}/${sidebar[0].shortened}`);
}
