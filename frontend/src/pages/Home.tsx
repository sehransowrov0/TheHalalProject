import TopPosts from "@/components/molecules/TopPosts.tsx.txt";
import Story from "@/components/organisms/Story";
import PostCard from "@/components/molecules/PostCard"


export default function Home() {
  return (
    <main className="bg-background pt-1 flex flex-col gap-1 ">
      <Story />
      <TopPosts textContent="hello" />
      <PostCard />
    </main>
  )
}

