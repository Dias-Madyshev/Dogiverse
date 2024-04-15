import React, { useState, useEffect } from "react";

interface Fact {
  title: string;
  description: string;
}

const Facts: React.FC = () => {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://660a27660f324a9a28843bf2.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setFacts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Acardion w-[1200px] max-w-full mx-auto mt-[20px]">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        🐶 Интересные факты про собак
      </h1>
      {facts.map((fact, index) => (
        <div
          key={index}
          className="border-b border-gray-300 rounded-lg overflow-hidden mb-4"
        >
          <button
            className="flex justify-between items-center py-4 px-6 w-full focus:outline-none bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-semibold rounded-t-lg hover:shadow-md"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg">{`${index + 1}. ${fact.title}`}</span>
            <svg
              className={`h-6 w-6 transition-transform transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4 bg-gray-100 rounded-b-lg">
              <p className="text-gray-800 text-lg">{fact.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Facts;
