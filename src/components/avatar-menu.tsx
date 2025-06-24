"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useSidebar } from "@/components/ui/sidebar";

interface DropdownMenuGroupProps {
  items: { icon: React.ElementType; label: string }[];
}

interface DropdownMenuItemProps {
  icon: React.ElementType;
  label: string;
}

const user = {
  name: "John Doe",
  email: "email@example.com",
  avatar: "https://i.pravatar.cc/150?img=4",
};

export interface AvatarMenuProps {
  onLogoutClicked: () => void;
  onAccountClicked: () => void;
}

export default function AvatarMenu({
  onAccountClicked,
  onLogoutClicked,
}: AvatarMenuProps) {
  // const { isMobile } = useSidebar();
  const isMobile = false;
  const menuItems = [{ icon: BadgeCheck, label: "Account" }];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="bg-background flex items-center justify-center gap-2 rounded-md px-2 py-1 shadow-sm">
            <Avatar className="size-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <ChevronDown size={18} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <AvatarListTile onAccountClicked={onAccountClicked} />
          <DropdownMenuSeparator />
          <AvatarDropdownMenuGroup items={menuItems} />
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={onLogoutClicked}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function AvatarListTile({
  onAccountClicked,
}: {
  onAccountClicked: () => void;
}) {
  return (
    <DropdownMenuLabel className="p-0 font-normal" onClick={onAccountClicked}>
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.name}</span>
          <span className="truncate text-xs">{user.email}</span>
        </div>
      </div>
    </DropdownMenuLabel>
  );
}

function AvatarDropdownMenuGroup({ items }: DropdownMenuGroupProps) {
  return (
    <DropdownMenuGroup>
      {items.map((item, index) => (
        <AvatarDropdownMenuItem
          key={index}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </DropdownMenuGroup>
  );
}

function AvatarDropdownMenuItem({ icon: Icon, label }: DropdownMenuItemProps) {
  return (
    <DropdownMenuItem>
      <Icon />
      {label}
    </DropdownMenuItem>
  );
}
