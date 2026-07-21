"use client";

import { useState, type ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AuthGuard from "./AutoGuard";
import { adminColors } from "./adminTheme";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(true);

  return (
    <AuthGuard>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: adminColors.white,
        }}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() =>
            setIsSidebarOpen((prev) => !prev)
          }
        />

        <div
          style={{
            marginLeft: isSidebarOpen ? 280 : 88,
            transition: "margin-left 0.2s ease",
            minHeight: "100vh",
            backgroundColor: adminColors.white,
          }}
        >
          <Header />

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
    </AuthGuard>
  );
}