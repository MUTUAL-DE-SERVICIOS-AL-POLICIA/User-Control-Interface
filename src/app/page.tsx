import { RolCard } from "@/components/rolCard";
import { getRolesCookie } from "@/utils/helpers/cookie";
export default async function Page() {
  const { data } = await getRolesCookie();

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <RolCard roles={data} />
    </div>
  );
}
