import CreateStory from '../atoms/CreateStory'
import YourStory from '../atoms/YourStory'
import OtherStory from '../atoms/OtherStory'



export default function Story() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide bg-gray-50 pt-2 pb-2">
      <div className='flex space-x-2'>
        <CreateStory />
        <YourStory />
        <OtherStory />
      </div>
    </div>
  )
}

