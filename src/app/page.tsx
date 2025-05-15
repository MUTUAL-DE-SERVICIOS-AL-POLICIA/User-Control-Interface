import { RolCard } from "@/components/rolCard";
import { getRolesCookie } from "@/utils/helpers/cookie";
import { AlertServer } from "@/components/common";
import { urlLogin } from "@/utils/services";

export default async function Page() {
  const { error, message, data } = await getRolesCookie();

  if (error) {
    return (
      <AlertServer
        color="danger"
        description={message}
        href={`${urlLogin}/apphub`}
      />
    );
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <RolCard roles={data} />
    </div>
  );
}
