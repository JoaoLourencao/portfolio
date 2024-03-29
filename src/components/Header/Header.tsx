import { useState } from "react";

interface HeaderProps {
  logo: string;
  logoIsImage?: boolean;
  menuItems: string[];
}

export function Header({ logo, menuItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-[rgba(20,17,27,0.85)] z-[999]">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-white text-2xl font-bold">{logo}</h1>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {
                menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-bold"
                  >
                    {item}
                  </a>
                ))
              }
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

