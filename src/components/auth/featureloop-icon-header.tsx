import Image from "next/image";

export default function FeatureloopIconHeader() {
  return (
    <div className="flex items-center justify-center md:hidden">
      <Image src="/featureloop.svg" alt="logo" width={42} height={42} />
    </div>
  );
}
