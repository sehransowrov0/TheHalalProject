import Image1 from '@/assets/images/Image1.jpg'

const images: ImageItem[] = [
  { id: 1, img: Image1 },
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

