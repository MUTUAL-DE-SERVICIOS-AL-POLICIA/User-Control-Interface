import { redirect } from "next/navigation";

import { RolCard } from "@/components/rolCard";
import { getRolesCookie } from "@/utils/helpers/cookie";
import { Rol } from "@/utils/interfaces";
export default async function Page() {
  const { data } = await getRolesCookie();

  const roles: Rol[] = data;

  if (roles.length === 1) {
    const rol = roles[0];

    return redirect(`/${rol.id}/users`);
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <RolCard roles={data} />
    </div>
  );
}
