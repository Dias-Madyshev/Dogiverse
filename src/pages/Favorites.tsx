import React from "react";
import { ItemData } from "../components/DogCard";

interface FavoritesProps {
  cart: ItemData[];
  removeItemFromCart: (index: number) => void;
  search: string;
}

const Favorites: React.FC<FavoritesProps> = ({
  cart,
  removeItemFromCart,
  search,
}) => {
  return (
    <div className=" text-center ">
      <h1 className="text-[30px] font-bold my-[15px]">Избранные Собаки</h1>

      {cart.length === 0 ? (
        <div className="mt-8">
          <p className="text-2xl text-gray-500">
            Пожалуйста выберите избранную собаку🙃
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto text-gray-300 mt-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      ) : (
        <div className="Favorites ">
          {cart
            .filter((obj) => {
              return obj.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, index) => (
              <div
                key={index}
                className=" w-[350px] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-300 transition-transform transform hover:scale-105"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={item.photos}
                  alt="Изображение собаки"
                />
                <div className="p-6">
                  <div className="uppercase  tracking-wide text-sm text-red-800 font-semibold">
                    {item.appointment}
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-bold  text-black hover:underline text-green-700"
                  >
                    {item.name}
                  </a>
                  <p className="mt-2 text-gray-500 ">{item.description}</p>
                  <div className="flex justify-center cursor-pointer">
                    <button
                      className="button"
                      onClick={() => removeItemFromCart(index)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Favorites;
