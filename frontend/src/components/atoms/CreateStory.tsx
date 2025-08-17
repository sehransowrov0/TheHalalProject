import Image1 from '@/assets/images/Image1.jpg'
import { FiPlus } from 'react-icons/fi'

export default function CreateStory() {
  return (
    <div className='flex-shrink-0 w-24 h-44 rounded-xl bg-gray-200 border border-gray-200 overflow-hidden relative'>
      <img
        src={Image1}
        alt="Profile"
        className='w-full h-full object-cover rounded-xl border border-gray-200'
      />
      <div className='absolute h-16 w-full bottom-0 left-0 right-0 bg-gray-50 text-white flex items-center justify-center z-20 '>
        <div className='h-9 w-9 bg-gray-50 rounded-full m-auto flex items-center justify-center absolute bottom-12 z-10'>
          <div className='bg-blue-600 rounded-full m-auto p-2 h-8 w-8 flex items-center justify-center '><FiPlus /></div>
        </div>
      </div>
    </div>
  )
}

