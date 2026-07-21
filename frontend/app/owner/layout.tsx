"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { adminColors } from "./adminTheme";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: adminColors.white }}>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((prev) => !prev)} />
      <div
        style={{
          marginLeft: isSidebarOpen ? 280 : 88,
          transition: "margin-left 0.2s ease",
          minHeight: "100vh",
          backgroundColor: adminColors.white,
        }}
      >
        <Header userName="Bobyrianto Nainggolan" userEmail="bobyriannainggolan@gmail.com" />
        <main
          style={{
            padding: "24px 32px 40px",
            backgroundColor: adminColors.white,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}