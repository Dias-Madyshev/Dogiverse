import '../App.css'
import React, { useState, useEffect } from 'react'

import { DogCard, HandleClick } from '../components/DogCard'

import { CategoryDogs } from '../components/CategoryDogs'

import SkeletonCart from '../Skeleton/SkeletonCart'
import Skeleton from '../Skeleton/SkeletonCategory'
import { ItemData } from '../components/DogCard'

type InputProps = {
  search: string
  handleClick: HandleClick
}

interface CategoryData {
  name: string
  image: string
  index: number
}

const DogsPage: React.FC<InputProps> = ({ search, handleClick }) => {
  const [items, setItems] = useState<ItemData[]>([])
  const [categoriesItem, setcategoriesItem] = useState<CategoryData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(() => {
    const storedIndex = localStorage.getItem('activeCategoryIndex')
    return storedIndex ? parseInt(storedIndex, 10) : 0
  })

  useEffect(() => {
    localStorage.setItem('activeCategoryIndex', activeCategoryIndex.toString())
  }, [activeCategoryIndex])

  useEffect(() => {
    fetch(`https://65d1f50f987977636bfbb5ca.mockapi.io/CategoriesDogs`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка при получении данных')
        }
        return res.json()
      })
      .then((json: CategoryData[]) => {
        setcategoriesItem(json)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    const categoryQuery = activeCategoryIndex > 1 ? `category=${activeCategoryIndex}` : ''
    fetch(`https://65d1f50f987977636bfbb5ca.mockapi.io/dogs?${categoryQuery}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка при получении данных')
        }
        return res.json()
      })
      .then((json: ItemData[]) => {
        const enrichedData = json.map(dog => ({
          ...dog,
          temperament: ['Дружелюбный', 'Активный', 'Умный', 'Преданный', 'Игривый'],
          health: ['Регулярные прививки', 'Здоровое сердце', 'Отличное зрение', 'Хороший аппетит'],
          age: '2 года',
          breed: 'Чистокровная',
          size: 'Средний',
        }))
        setItems(enrichedData)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [activeCategoryIndex])

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-center text-[35px] font-bold mt-[20px] text-green-900">
          Категории собак по назначению
        </h1>

        {/* Categories Container */}
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
          {/* Mobile Categories */}
          <div className="lg:hidden w-full overflow-x-auto no-scrollbar whitespace-nowrap pb-4">
            <div className="inline-flex gap-4">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : categoriesItem.map((obj, index) => (
                    <CategoryDogs
                      key={index}
                      {...obj}
                      isActive={activeCategoryIndex === obj.index}
                      onClick={() => handleCategoryClick(obj.index)}
                      isMobile={true}
                    />
                  ))}
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="hidden lg:flex justify-between gap-4 mt-[20px]">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : categoriesItem.map((obj, index) => (
                  <CategoryDogs
                    key={index}
                    {...obj}
                    isActive={activeCategoryIndex === obj.index}
                    onClick={() => handleCategoryClick(obj.index)}
                    isMobile={false}
                  />
                ))}
          </div>
        </div>
      </div>

      <div className="Cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => <SkeletonCart key={index} />)
          : items
              .filter(obj => {
                return obj.name.toLowerCase().includes(search.toLowerCase())
              })
              .map((obj, index) => <DogCard key={index} {...obj} handleClick={handleClick} />)}
      </div>
    </div>
  )
}

export default DogsPage
