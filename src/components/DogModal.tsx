import React from 'react'
import { ItemData } from './DogCard'

interface DogModalProps {
  dog: ItemData | null
  isOpen: boolean
  onClose: () => void
}

export const DogModal: React.FC<DogModalProps> = ({ dog, isOpen, onClose }) => {
  if (!isOpen || !dog) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        animation: 'fadeIn 0.3s ease-in-out',
      }}>
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{
          animation: 'slideIn 0.3s ease-out',
        }}>
        {/* Изображение с градиентом */}
        <div className="relative h-auto max-h-[400px] overflow-hidden">
          <img src={dog.photos} alt={dog.name} className="w-full object-contain rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Контент */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{dog.name}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Основная информация */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Описание</h3>
                <p className="text-gray-600">{dog.description || 'Описание отсутствует'}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Характеристики</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Назначение: {dog.appointment || 'Не указано'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Возраст: {dog.age || 'Не указан'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Порода: {dog.breed || 'Не указана'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Размер: {dog.size || 'Не указан'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Темперамент</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.temperament?.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {trait}
                    </span>
                  )) || 'Нет информации'}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Здоровье</h3>
                <div className="bg-gray-50 rounded-xl p-4">
                  <ul className="space-y-2">
                    {dog.health?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    )) || <li className="text-gray-600">Нет информации о здоровье</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Добавляем стили анимации
const style = document.createElement('style')
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
document.head.appendChild(style)
