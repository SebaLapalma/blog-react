import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function Search() {
  const tags = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'React Native',
    },
    {
      id: 4,
      name: 'UX/UI',
    }
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className='flex justify-center mt-7 flex-col md:px-[190px] px-[70]'>
      <img
        src='./banner.png'
        alt='banner'
        className='rounded-2xl'
      />
      <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400' />
        <input
          type='text'
          placeholder='Search'
          className='outline-none ml-2'
        />
      </div>
      <div>
        <ul className='flex gap-10 justify-center mt-5'>
          {tags.map((tag, index) => (
            <li
              onClick={() => setActiveIndex(index)}
              className={`${index===activeIndex ? 'bg-blue-400 text-white p-2' : null} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-blue-600 transition-all duration-100 ease-in-out`}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search