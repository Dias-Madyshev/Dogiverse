import React, { useState } from 'react'

import IconPawDog from '/paw-print.png'

import { Link } from 'react-router-dom'

type InputProps = {
  size: number
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Header: React.FC<InputProps> = ({ size, search, setSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="text-white sticky top-0 z-50 bg-green-900 w-full">
      <div className="max-w-[1200px] w-full mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-[auto_1fr_auto] lg:flex lg:items-center lg:justify-between py-2 sm:py-4 gap-2">
          {/* Logo and Brand */}
          <div className="flex items-center shrink-0">
            <img
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
              src={IconPawDog}
              alt="Dogiverse logo"
            />
            <h1 className="ml-2 text-lg sm:text-xl md:text-[25px] font-bold whitespace-nowrap">
              Dogiverse
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-end lg:hidden">
            <button
              className="p-2 hover:bg-green-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links and Search - Desktop */}
          <div
            className={`${
              isMenuOpen ? 'block col-span-3 lg:col-span-1' : 'hidden'
            } lg:flex lg:items-center lg:justify-end lg:gap-6 lg:flex-1`}>
            <nav className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:gap-4 mt-4 lg:mt-0">
              <Link to="/">
                <span className="block hover:text-gray-200 text-sm sm:text-base md:text-lg py-2 px-3 hover:bg-green-800 rounded-lg transition-colors">
                  Главное
                </span>
              </Link>
              <Link to="/facts">
                <span className="block hover:text-gray-200 text-sm sm:text-base md:text-lg py-2 px-3 hover:bg-green-800 rounded-lg transition-colors">
                  Факты
                </span>
              </Link>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-4 lg:mt-0">
              {/* Search Input */}
              <div className="relative flex-1 lg:w-[250px]">
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="text"
                  className="w-full h-[40px] text-black text-sm sm:text-base px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:border-blue-500"
                  placeholder="Введите текст..."
                />
                {search && (
                  <svg
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30 cursor-pointer hover:opacity-60"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
                    <path d="M0 0h48v48H0z" fill="none" />
                  </svg>
                )}
              </div>

              {/* Favorites Link */}
              <Link to="favorites" className="block">
                <div className="flex items-center justify-center lg:justify-start py-2 px-3 hover:bg-green-800 rounded-lg transition-colors">
                  <span className="font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                    Избранные
                  </span>
                  <div className="relative ml-2">
                    <svg
                      className="w-[25px] sm:w-[30px]"
                      viewBox="0 0 24 24"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="absolute -right-2 -top-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {size}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
