import Image from "next/image";

export default function BrandPanel() {
  return (
    <div className="relative hidden flex-col items-center justify-center gap-y-4 bg-radial from-blue-700 to-black md:flex">
      <Image src="/featureloop.svg" alt="logo" width={42} height={42} />
      <p className="text-2xl font-semibold text-white">Featureloop</p>
    </div>
  );
}
