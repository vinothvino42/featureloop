"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function RootPage() {
  const { data: session } = authClient.useSession();

  if (!!session) {
    redirect("/projects");
  } else {
    // redirect("/sign-in");
  }

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Image src="/featureloop.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold">Featureloop</h1>
      </div>
      <p className="text-center">
        Big ideas are in the works. You&apos;ll love what&apos;s next.
      </p>
    </div>
  );
}
