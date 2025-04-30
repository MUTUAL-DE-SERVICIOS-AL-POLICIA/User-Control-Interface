import { Avatar } from "@heroui/avatar";

import { User } from "@/utils/interfaces";

interface Props {
  user: User;
}
export const UserInfo = ({ user }: Props) => {
  return (
    <div className="flex my-4">
      <div className="flex flex-col gap-1 items-center">
        <Avatar
          isBordered
          showFallback
          className="my-2"
          radius="md"
          size="lg"
        />
        <h4 className="text-medium font-semibold leading-none text-default-800 text-pretty text-center">
          {user?.name}
        </h4>
        <div className="flex gap-1">
          <p className="text-default-600 text-small">{user?.username}</p>
        </div>
      </div>
    </div>
  );
};
