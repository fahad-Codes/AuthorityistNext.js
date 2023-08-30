import React, { useState } from "react";
import { useWindowSize } from "../../hooks";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { WindowSize } from "../../types";
import { useSession } from "next-auth/react";

const IntegratedNavbar = () => {
  const size: WindowSize = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-48">
      <h1 className="text-blue-900 text-xl font-semibold">Authoritiyst</h1>
      <div className="hidden sm:flex items-center">
        <Link
          href="#"
          className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
        >
          For Businesses
        </Link>
        <Link
          href="#"
          className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
        >
          Find Companies
        </Link>
        <Link
          href="#"
          className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
        >
          Resources
        </Link>
        <Link
          href="#"
          className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
        >
          Get Quotes
        </Link>
        {session ? (
          <Link
            href="/profile"
            className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
          >
            <BsFillPersonFill
              size={30}
              className="text-blue-900 hover:text-blue-700"
            />
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-blue-900 text-lg font-medium ml-4 hover:text-blue-700"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default IntegratedNavbar;
