import { Card } from "@heroui/card";

// import { getUserManagementModules } from "@/api";

export default async function Page() {
  // const { data } = await getUserManagementModules();

  return (
    <Card className="w-full md:flex-1">{/* <ListBox modules={data} /> */}</Card>
  );
}
