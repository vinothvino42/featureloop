import Image from "next/image";

export default function RootPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-screen gap-4">
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
