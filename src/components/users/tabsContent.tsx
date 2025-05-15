"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@heroui/card";
interface Props {
  tabsContent: Record<string, React.ReactNode>;
}
export const TabsContent = ({ tabsContent }: Props) => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("permission") ?? "tab0";

  return (
    <Card className="w-full md:flex-1">
      {tabsContent[currentTab] ?? tabsContent["tab0"]}
    </Card>
  );
};
