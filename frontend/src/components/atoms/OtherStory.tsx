import Image1 from '@/assets/images/Image1.jpg'
import Image2 from '@/assets/images/Image2.jpg'
import Image3 from '@/assets/images/Image3.jpg'
import Image4 from '@/assets/images/Image4.jpg'
import Image5 from '@/assets/images/Image5.jpg'
import Image6 from '@/assets/images/Image6.jpg'

const images: ImageItem[] = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
  { id: 4, img: Image4 },
  { id: 5, img: Image5 },
  { id: 6, img: Image6 },
]

interface ImageItem {
  id: number,
  img: string
}

export default function OtherStory() {
  return (
    <>
      {
        images.map((image: ImageItem) => (
          <div key={image.id} className='flex-shrink-0 w-24 h-44 rounded-xl bg-gray-201 relative overflow-hidden border border-gray-200'>
            <img
              src={image.img}
              alt={`Image ${image.id}`}
              className='w-full h-full object-cover border border-gray-200 rounded-xl'
            />
          </div>
        ))
      }
    </>
  )
}

