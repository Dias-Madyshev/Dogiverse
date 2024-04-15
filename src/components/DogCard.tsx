import React from "react";

import style from "./Active.module.css";

interface DogsProps {
  name: string;
  photos: string;
  handleClick: HandleClick;
  appointment: string;
  description: string;
}

export interface ItemData {
  category: number;
  name: string;
  photos: string;
  appointment: string;
  description: string;
}

export type HandleClick = (item: ItemData) => void;

export const DogCard: React.FC<DogsProps> = ({
  name,
  photos,
  handleClick,
  appointment,
  description,
}) => {
  const [favoritesDog, setFavoritesDog] = React.useState(() => {
    const storedFavoritesDog = localStorage.getItem(`favoritesDog_${name}`);
    return storedFavoritesDog ? JSON.parse(storedFavoritesDog) : false;
  });

  const handleActive = () => {
    const item: ItemData = {
      name,
      photos,
      category: 0,
      appointment,
      description,
    };
    const newFavoritesDog = !favoritesDog;
    setFavoritesDog(newFavoritesDog);
    localStorage.setItem(
      `favoritesDog_${name}`,
      JSON.stringify(newFavoritesDog)
    );
    handleClick(item);
  };

  return (
    <div className="Card w-[350px] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-300 transition-transform transform hover:scale-105">
      <img
        className="w-full h-64 object-cover"
        src={photos}
        alt="Изображение собаки"
      />
      <div className="p-6">
        <div className="appointment uppercase tracking-wide text-sm text-red-800 font-semibold">
          {appointment}
        </div>
        <h1 className="block mt-1 text-lg leading-tight font-bold  text-black hover:underline text-green-700">
          {name}
        </h1>
        <p className="mt-2 text-gray-500 w-[300px] h-[72px]">{description}</p>
        <div
          onClick={handleActive}
          className="flex justify-center items-center cursor-pointer mt-[10px]"
        >
          <h2 className="text-[20px] font-bold buttonCard text-[20px] w-[300px]  text-center  ">
            Добавить в Избранные
          </h2>

          <svg
            className={`${
              favoritesDog ? style.ActiveIcon : ""
            } ${"w-[30px] ml-[5px] fill-white text mt-[6px] "}`}
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
        </div>
      </div>
    </div>
  );
};
