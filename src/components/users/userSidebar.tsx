import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { User } from "@/utils/interfaces";

interface Props {
  user: User;
}
export const UserSidebar = ({ user }: Props) => {
  return (
    <Card className="max-w-[340px] border-small rounded-small border-default-200 dark:border-default-100 mb-3">
      <CardHeader className="justify-center">
        <div className="flex my-4">
          <div className="flex flex-col gap-1 items-center">
            <Avatar
              isBordered
              showFallback
              className="my-2"
              radius="md"
              size="lg"
              src="https://nextui.org/avatars/avatars1.png"
            />
            <h4 className="text-medium font-semibold leading-none text-default-800 text-pretty text-center">
              {user?.name}
            </h4>
            <div className="flex gap-1">
              <p className="font-semibold text-default-800 text-small">
                {" "}
                C.I.{" "}
              </p>
              <p className="text-default-600 text-small">{user?.username}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody />
    </Card>
  );
};
