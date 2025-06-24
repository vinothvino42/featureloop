"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import ProjectSelector from "@/features/projects/components/project-selector";
import AvatarMenu from "@/components/avatar-menu";

export default function TopHeader() {
  const router = useRouter();

  return (
    <header>
      <nav className="mb-4 flex items-center justify-between">
        <ProjectSelector />
        <AvatarMenu
          onAccountClicked={() => {}}
          onLogoutClicked={() => {
            authClient.signOut({
              fetchOptions: { onSuccess: () => router.push("/sign-in") },
            });
          }}
        />
      </nav>
      <h1 className="text-2xl">Dashboard</h1>
    </header>
  );
}
