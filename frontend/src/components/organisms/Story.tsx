import Image1 from '@/assets/images/Image1.jpg'
import Image2 from '@/assets/images/Image2.jpg'
import Image3 from '@/assets/images/Image3.jpg'
import Image4 from '@/assets/images/Image4.jpg'
import Image5 from '@/assets/images/Image5.jpg'
import Image6 from '@/assets/images/Image6.jpg'

import CreateStory from '../atoms/CreateStory'

const images = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
  { id: 4, img: Image4 },
  { id: 5, img: Image5 },
  { id: 6, img: Image6 },

]

export default function Story() {
  return (
    <div className=" w-full overflow-x-auto scrollbar-hide bg-gray-50 pt-2 pb-2">
      <div className='flex space-x-2'>
        <CreateStory />
        <div className='flex-shrink-0 w-24 h-44 rounded-xl bg-gray-200 relative overflow-hidden border border-gray-200'>
          <img
            src={Image1}
            alt="Profile"
            className='w-full h-full object-cover rounded-xl'
          />
          <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center rounded-b-xl'>
            Your Story
          </div>
        </div>
        {images.map((image) => (
          <div key={image.id} className='flex-shrink-0 w-24 h-44 rounded-xl bg-gray-201 relative overflow-hidden border border-gray-200'>
            <img
              src={image.img}
              alt={`Image ${image.id}`}
              className='w-full h-full object-cover border border-gray-200 rounded-xl'
            />
          </div>

        ))}
      </div>
    </div>
  )
}

