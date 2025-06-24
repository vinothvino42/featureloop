import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/features/projects/components/app-sidebar";
import TopHeader from "@/features/projects/components/top-header";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider open={true}>
      <AppSidebar />
      <AppContent>{children}</AppContent>
    </SidebarProvider>
  );
}

function AppContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-dashboard-background p-5">
      <TopHeader />
      {children}
    </main>
  );
}
