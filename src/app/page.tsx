"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <Image src="/featureloop.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold">Featureloop</h1>
      </div>
      <p className="text-center">
        Big ideas are in the works. You&apos;ll love what&apos;s next.
      </p>
      {session ? (
        <div className="flex flex-col gap-y-4 p-4">
          <p>Logged in as {session.user.name}</p>
          <Button
            onClick={() =>
              authClient.signOut({
                fetchOptions: { onSuccess: () => router.push("/sign-in") },
              })
            }
          >
            Sign out
          </Button>
        </div>
      ) : null}
    </div>
  );
}
