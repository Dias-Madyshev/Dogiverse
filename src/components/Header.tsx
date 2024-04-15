import React from "react";

import IconPawDog from "/paw-print.png";

import { Link } from "react-router-dom";

type InputProps = {
  size: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Header: React.FC<InputProps> = ({ size, search, setSearch }) => {
  console.log(size);
  return (
    <div className="text-white ">
      <div className="h-[100px] bg-green-900 flex justify-around items-center  ">
        <div className="flex item-center">
          <img
            className="mx-[20px] w-[80px] h-[80px]"
            src={IconPawDog}
            alt=""
          />
          <h1 className="mt-[20px] text-[25px] font-bold">Dogiverse</h1>
        </div>
        <Link to="/">
          <span className=" hover:text-gray-200 text-[20px]">Главное</span>
        </Link>
        <Link to="/facts">
          <span className=" hover:text-gray-200 text-[20px]">Факты</span>
        </Link>
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="Input  text-[20px] transition-all duration-150 ease-in-out  inline-block text-black w-[400px] h-[40px]  px-4 py-2 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
            placeholder="Введите текст..."
          />

          <svg
            onClick={() => setSearch("")}
            className="clearIcon absolute right-[5px] w-[25px] top-[20px]  -translate-y-1/2 opacity-30 cursor-pointer  "
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
        </div>

        <Link to="favorites">
          <div className="flex relative ">
            <span className="font-semibold text-[20px] hover:text-gray-200">
              Избранные
            </span>
            <svg
              className="w-[30px] mt-[3px]"
              viewBox="0 0 24 24"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <span className="mt-[3px] cursor-pointer text-blue bg-white-500 text-white rounded-full absolute right-[-10px]">
              {size}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
