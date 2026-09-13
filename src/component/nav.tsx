function Nav() {
  return (
    <header className="border-b border-slate-100 bg-white container mx-auto sticky top-0 z-50">
      <div className="flex min-h-16 flex-wrap items-center justify-between px-4 md:px-0 ">
        <button className=" sm:w-30absolute  sm:hidden  rounded-lg hover:bg-gray-200 ">
          <img
            src="../../ui/hamburger.png"
            alt=""
            className="h-auto w-8 sm:w-30absolute  sm:hidden rounded-lg hover:bg-gray-200 "
          />
        </button>

        <img
          src="/src/assets/logo-text.png"
          alt=""
          className="h-auto w-28 sm:w-30"
        />

        <nav className="order-3 w-full sm:order-2 sm:w-auto">
          <ul className="sm:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600 sm:gap-x-7 hidden">
            <li>
              <a
                href=""
                className="block py-1 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500 font-medium text-pink-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-1 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-1 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-1 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-1 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className=" flex shrink-0 items-center gap-4 text-sm sm:order-3 md:gap-5 ">
          <a
            href=""
            className="font-medium text-slate-700 transition-colors hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
          >
            Sign In
          </a>
          <a
            href=""
            className="rounded-full bg-pink-600 px-5 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
