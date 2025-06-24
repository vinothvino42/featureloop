"use client";

import DashboardNavbar from "@/components/dashboard-navbar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/projects" && <DashboardNavbar />}
      {children}
    </>
  );
}
