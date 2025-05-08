import { subtitle, BreadcrumbsState } from "@/components/common";
import { getRolesCookie } from "@/utils/helpers/cookie";
import { Rol } from "@/utils/interfaces";
interface Props {
  children: React.ReactNode;
  params: Promise<{ rol: string }>;
}
export default async function Layout({ children, params }: Props) {
  const { rol } = await params;
  const { data } = await getRolesCookie();

  const roles: Rol[] = data;

  const rolReal = roles.find((role: Rol) => Number(role.id) === Number(rol));

  return (
    <>
      <div className={subtitle()}>
        <BreadcrumbsState rolName={String(rolReal?.name)} />
      </div>
      {children}
    </>
  );
}
