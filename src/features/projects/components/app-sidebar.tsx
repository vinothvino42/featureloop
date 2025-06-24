"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams, useRouter } from "next/navigation";
import BrandIdentity from "@/components/brand-identity";
import { navigationMenus } from "@/utils/nav-menus";
import { NavItem } from "@/types/nav-menu";

interface AppSidebarGroupProp {
  items: NavItem[];
  sidebarLabel?: string;
  selectedTitle: string;
  onNavItemClicked: (url: string) => void;
}

export default function AppSidebar() {
  const params = useParams();
  const router = useRouter();

  function navItemClicked(url: string) {
    router.replace(`/projects/${params.projectId}${url}`);
  }

  return (
    <Sidebar variant="inset" className="shadow-sm">
      <SidebarHeader className="p-6">
        <BrandIdentity />
      </SidebarHeader>
      <SidebarContent className="flex h-full flex-col justify-between pt-4">
        <AppSidebarGroup
          items={navigationMenus.primary}
          selectedTitle="Dashboard"
          onNavItemClicked={navItemClicked}
        />
        <section>
          <AppSidebarGroup
            items={navigationMenus.system}
            selectedTitle="Dashboard"
            onNavItemClicked={navItemClicked}
          />
        </section>
      </SidebarContent>
    </Sidebar>
  );
}

function AppSidebarGroup({
  items,
  onNavItemClicked,
  sidebarLabel,
}: AppSidebarGroupProp) {
  return (
    <>
      {sidebarLabel && <SidebarGroupLabel>{sidebarLabel}</SidebarGroupLabel>}
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  size="lg"
                  isActive={item.title === "Dashboard"}
                >
                  <div onClick={() => onNavItemClicked(item.url)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
