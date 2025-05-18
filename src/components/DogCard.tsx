import React, { useState } from 'react'
import { DogModal } from './DogModal'

import style from './Active.module.css'

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
            <div className="flex justify-center">
              <button
                onClick={e => {
                  e.stopPropagation()
                  handleActive()
                }}
                className="buttonCard">
                В избранное
              </button>
            </div>
          </div>
        </div>
      </div>

      <DogModal dog={props} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
