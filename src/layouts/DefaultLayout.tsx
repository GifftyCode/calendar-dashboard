import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import type { DefaultLayoutProps } from "../types";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,

  sidebarItems,
}) => {
  return (
    <div className="flex h-screen">
      <Sidebar items={sidebarItems} isOpen={true} onToggle={() => {}} />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
