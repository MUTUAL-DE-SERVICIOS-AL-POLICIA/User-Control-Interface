"use client";
import React from "react";
import { Tabs, Tab } from "@heroui/tabs";

import { Usage } from "@/components/common";

interface Props {
  sidebar: {
    name: string;
    shortened: string;
  }[];
}

export const TabsSidebar = ({ sidebar }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        className="w-full"
        classNames={{
          tabList: "flex w-full",
          cursor: "w-full bg-[#22d3ee]",
          tab: "w-full px-0 h-12",
          tabContent:
            "flex items-center justify-start gap-2 text-left w-full group-data-[selected=true]:text-[#06b6d4]",
        }}
        color="primary"
        isVertical={true}
        variant="underlined"
      >
        {sidebar.map((item) => (
          <Tab
            key={item.shortened}
            href={`${item.shortened}`}
            title={
              <div className="flex items-center space-x-2">
                <Usage />
                <span>{item.name}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};
