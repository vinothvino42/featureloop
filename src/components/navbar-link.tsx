import Link from "next/link";

export interface NavbarLinkProps {
  name: string;
  link: string;
}

export default function NavbarLink({ name, link }: NavbarLinkProps) {
  return (
    <Link href={link}>
      <span className="hover:underline">{name}</span>
    </Link>
  );
}
