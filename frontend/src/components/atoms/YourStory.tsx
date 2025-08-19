import Image1 from '@/assets/images/Image1.jpg'

export default function YourStory() {
  return (
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

  )
}

