import BrandIdentity from "./brand-identity";
import AvatarMenu from "./avatar-menu";
import NavbarLink from "./navbar-link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function DashboardNavbar() {
  const router = useRouter();

  return (
    <header className="p-5 shadow-xs">
      <nav className="flex items-center justify-between">
        <BrandIdentity />
        <div className="flex items-center gap-5">
          <NavbarLink name="Docs" link="/docs" />
          <NavbarLink name="Contact" link="/contact" />
          <AvatarMenu
            onAccountClicked={() => {}}
            onLogoutClicked={() => {
              authClient.signOut({
                fetchOptions: { onSuccess: () => router.push("/sign-in") },
              });
            }}
          />
        </div>
      </nav>
    </header>
  );
}
