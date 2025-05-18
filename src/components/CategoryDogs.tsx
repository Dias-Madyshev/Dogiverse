import React, { useEffect } from 'react'

import style from './Active.module.css'

interface DogsProps {
  image: string
  name: string
  index: number
  isActive: boolean
  onClick: () => void
  isMobile: boolean
}

export const CategoryDogs: React.FC<DogsProps> = ({
  image,
  name,
  index,
  isActive,
  onClick,
  isMobile,
}) => {
  useEffect(() => {
    if (isActive) {
      localStorage.setItem('activeCategoryIndex', index.toString())
    }
  }, [isActive, index])

  if (isMobile) {
    return (
      <div
        onClick={onClick}
        className={`
          inline-block
          min-w-[150px]
          cursor-pointer
          transition-all
          ${isActive ? style.active : ''}
          rounded-lg
          p-3
          border
          border-gray-200
          hover:bg-gray-50
        `}>
        <div className="font-bold text-[16px] text-center whitespace-normal">{name}</div>
      </div>
    )
  }

  return (
    <div onClick={onClick} className="cursor-pointer transition-all hover:scale-105 w-[180px]">
      <img className="m-auto h-[100px] object-cover rounded-t-lg" src={image} alt={name} />
      <div
        className={`
          ${isActive ? style.active : ''} 
          category 
          p-3
          border-x
          border-b
          border-gray-200
          rounded-b-lg
        `}>
        <div className="font-bold text-[16px] text-center">{name}</div>
      </div>
    </div>
  )
}
