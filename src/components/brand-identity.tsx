import Image from "next/image";

export default function BrandIdentity() {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <Image src="/featureloop.svg" alt="Logo" width={30} height={30} />
      <span className="text-xl font-medium">Featureloop</span>
    </div>
  );
}
