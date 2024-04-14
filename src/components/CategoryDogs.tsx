import React, { useEffect } from "react";
import style from "./Active.module.css";

interface DogsProps {
  image: string;
  name: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryDogs: React.FC<DogsProps> = ({
  image,
  name,
  index,
  isActive,
  onClick,
}) => {
  // Обновляем локальное хранилище при изменении свойства isActive
  useEffect(() => {
    if (isActive) {
      localStorage.setItem("activeCategoryIndex", index.toString());
    }
  }, [isActive, index]);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transition-transform transform hover: hover:scale-105  "
    >
      <img className="w-full h-[100px]" src={image} alt="Заглушка" />
      <div className={`${isActive ? style.active : ""} category`}>
        <div className="font-bold text-[18px] mb-2 text-center p-[5px] ">
          {name}
        </div>
      </div>
    </div>
  );
};
