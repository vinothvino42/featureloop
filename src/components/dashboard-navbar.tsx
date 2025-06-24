import BrandIdentity from "./brand-identity";
import AvatarMenu from "./avatar-menu";
import NavbarLink from "./navbar-link";

export default function DashboardNavbar() {
  return (
    <header className="p-5 shadow-xs">
      <nav className="flex items-center justify-between">
        <BrandIdentity />
        <div className="flex items-center gap-5">
          <NavbarLink name="Docs" link="/docs" />
          <NavbarLink name="Contact" link="/contact" />
          <AvatarMenu />
        </div>
      </nav>
    </header>
  );
}
