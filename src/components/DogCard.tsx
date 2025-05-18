import React, { useState } from 'react'
import { DogModal } from './DogModal'

export interface ItemData {
  id: number
  photos: string
  name: string
  description?: string
  age?: string
  breed?: string
  size?: string
  temperament?: string[]
  health?: string[]
  appointment?: string
}

export type HandleClick = (obj: ItemData) => void

interface CardProps extends ItemData {
  handleClick: HandleClick
}

export const DogCard: React.FC<CardProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [favoritesDog, setFavoritesDog] = React.useState(() => {
    const storedFavoritesDog = localStorage.getItem(`favoritesDog_${props.name}`)
    return storedFavoritesDog ? JSON.parse(storedFavoritesDog) : false
  })

  const handleActive = () => {
    const newFavoritesDog = !favoritesDog
    setFavoritesDog(newFavoritesDog)
    localStorage.setItem(`favoritesDog_${props.name}`, JSON.stringify(newFavoritesDog))
    props.handleClick(props)
  }

  return (
    <>
      <div className="relative group">
        <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer transition-all duration-300 hover:-translate-y-2">
          <img
            className="w-full h-[250px] object-cover rounded-t-xl"
            src={props.photos}
            alt="dog"
          />
          <div className="p-4 bg-white rounded-b-xl shadow-md">
            <h5 className="text-xl font-bold text-center mb-2">{props.name}</h5>

            {/* Добавляем информацию о породе */}
            {props.breed && <p className="text-gray-600 text-center mb-2">Порода: {props.breed}</p>}

            {/* Добавляем информацию о назначении */}
            {props.appointment && (
              <p className="text-gray-600 text-center mb-3">{props.appointment}</p>
            )}

            <div className="flex justify-center items-center gap-2">
              <button
                onClick={e => {
                  e.stopPropagation()
                  handleActive()
                }}
                className="buttonCard flex items-center gap-2">
                В избранное
                {favoritesDog ? (
                  <svg
                    className="w-6 h-6 text-red-500 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <DogModal dog={props} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
