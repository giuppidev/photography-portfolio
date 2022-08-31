import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

export default function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const [toggler, setToggler] = useState(false);
  return (
    <header id="top">
      <nav className="flex justify-between my-4 mx-8 uppercase font-bold">
        <Link href={"/"}>
          <a className="hover:cursor-pointer">
            <h1 className="text-2xl">Roberto De Martino</h1>
          </a>
        </Link>
        <div
          className="flex gap-2 hover:cursor-pointer items-center"
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className=" -mt-1">
            {showInfo ? (
              <MinusIcon className="h-5 w-5 text-white" />
            ) : (
              <PlusIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <h1 className="text-2xl hidden md:block">Informazioni</h1>
        </div>
      </nav>
      <div
        id="dropdown"
        className={` ${
          showInfo ? "flex" : "hidden"
        }  mt-20 flex-col md:flex-row justify-start md:justify-around items-center md:items-start text-center  font-ptsans w-auto`}
      >
        <div className="flex flex-col md:w-1/3 items-center gap-2 ">
          <h2 className=" text-2xl uppercase font-bold">About</h2>
          <img
            src="/roberto-de-martino.jpeg"
            alt="Roberto De Martino"
            className="h-16 w-1h-16 rounded-full hover:cursor-pointer hover:ring hover:ring-white"
            onClick={() => setToggler(!toggler)}
          />
          <p className="text-base px-4 md:mx-0 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsam ullam laudantium quia quibusdam, eligendi aliquam atque
            provident quasi rerum, omnis sint tempore perspiciatis cum!
          </p>
        </div>

        <div className="flex flex-col md:w-1/3">
          <h2 className="my-4 text-2xl uppercase font-bold">Contatti</h2>

          <p>1-800-555-1234</p>
          <a href="#">melissa@photography.com</a>
        </div>
        <FsLightbox toggler={toggler} sources={["/roberto-de-martino.jpeg"]} />
      </div>
    </header>
  );
}
