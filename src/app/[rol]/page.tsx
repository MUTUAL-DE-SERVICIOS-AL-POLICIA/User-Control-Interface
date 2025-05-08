import { redirect } from "next/navigation";
interface Props {
  params: Promise<{ rol: string }>;
}
export default async function Page({ params }: Props) {
  const { rol } = await params;

  return redirect(`/${rol}/users`);
}
