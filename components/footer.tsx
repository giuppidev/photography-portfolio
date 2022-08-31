import {
  ArrowCircleUpIcon,
  ArrowUpIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center text-center my-8 gap-3">
      <Link href="#top">
        <a className="lg:hidden">
          <div className="flex items-center justify-center gap-2 hover:text-gray-300">
            <ChevronUpIcon className="h-5 w-5" />
            <p className="text-xl">Torna su</p>
          </div>
        </a>
      </Link>
      <div>2022 - All rights reserved</div>
    </footer>
  );
}
