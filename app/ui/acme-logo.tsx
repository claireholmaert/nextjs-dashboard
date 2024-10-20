import { roboto } from "@/app/ui/fonts";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <ArchiveBoxIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Box</p>
    </div>
  );
}
