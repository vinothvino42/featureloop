import {
  Home,
  Settings,
  HelpCircleIcon,
  Users,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export const navigationMenus = {
  primary: [
    {
      title: "Dashboard",
      url: "",
      icon: Home,
    },
    {
      title: "Features",
      url: "/features",
      icon: MessageSquare,
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/project-setting",
      icon: Settings,
    },
  ],
  system: [
    {
      title: "Docs",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Help & Support",
      url: "#",
      icon: HelpCircleIcon,
    },
  ],
};
