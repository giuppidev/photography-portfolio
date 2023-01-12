import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

export default function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const [toggler, setToggler] = useState(false);
  return (
    <header id="top">
      <nav className="flex justify-between my-4 mx-8 uppercase font-bold ">
        <Link href={"/"}>
          <a className="hover:cursor-pointer">
            <h1 className="text-4xl md:text-2xl">Roberto De Martino</h1>
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
          <p className="text-base px-4 md:mx-0">
            Roberto De Martino nasce nel 1982 e nel 2007 si avvicina alla
            fotografia.
          </p>
          <p className="text-base px-4 md:mx-0 pb-4">
            La sua versatilità, supportata da un costante studio della tecnica e
            del linguaggio fotografico che dura tuttora, gli permette di
            affrontare vari stili fotografici come lo still-life e la fotografia
            di eventi ma con una predilezione per il ritratto e la fotografia di
            cerimonia.
          </p>
        </div>

        <div className="flex flex-col md:w-1/3">
          <h2 className="my-4 text-2xl uppercase font-bold">Contatti</h2>

          <p>+39 327 93 04 382</p>
          <a href="#">robertodemartino@rocketmail.com</a>
        </div>
        <FsLightbox toggler={toggler} sources={["/roberto-de-martino.jpeg"]} />
      </div>
    </header>
  );
}
