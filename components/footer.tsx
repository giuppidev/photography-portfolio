import {
  ArrowCircleUpIcon,
  ArrowUpIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="flex flex-cols justify-center text-center my-8">
      <a href="#top" className="lg:hidden">
        <div className="flex items-center gap-2 hover:text-gray-300">
          <ChevronUpIcon className="h-5 w-5" />
          <p className="text-xl">Torna su</p>
        </div>
      </a>
    </footer>
  );
}
