import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  Smile,
  Image as ImageIcon,
  Send,
  ChevronDown,
} from "lucide-react";

// --- Types ---
interface PostImage {
  id: string;
  url: string;
  alt?: string;
}

interface CommentItem {
  id: string;
  name: string;
  avatar?: string;
  text: string;
  time: string;
}

interface PostProps {
  author: {
    name: string;
    avatar?: string;
  };
  time: string;
  audience?: "public" | "friends" | "only-me";
  text?: string;
  images?: PostImage[];
  likeCount?: number;
  commentCount?: number;
  shareCount?: number;
  comments?: CommentItem[];
  className?: string;
}

// --- Helper components ---
function AudienceBadge({ audience = "public" as PostProps["audience"] }) {
  const label =
    audience === "public" ? "Public" : audience === "friends" ? "Friends" : "Only me";
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <Globe className="h-3.5 w-3.5" />
      <span>{label}</span>
    </div>
  );
}

function ImageGrid({ images = [] as PostImage[] }) {
  if (!images.length) return null;
  const gridCols = images.length === 1 ? "grid-cols-1" : images.length === 2 ? "grid-cols-2" : "grid-cols-2";
  const maxToShow = Math.min(images.length, 5);

  return (
    <div className={cn("mt-2 grid gap-2", gridCols)}>
      {images.slice(0, maxToShow).map((img, idx) => (
        <div
          key={img.id}
          className={cn(
            "relative overflow-hidden rounded-2xl",
            images.length === 1 ? "h-72" : idx === 0 && images.length > 2 ? "row-span-2 h-72" : "h-36"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.url}
            alt={img.alt || "post image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {images.length > 5 && idx === 4 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-medium">
              +{images.length - 5}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full gap-2 rounded-xl py-5 text-sm hover:bg-accent",
        active && "bg-accent"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Button>
  );
}

// --- Main Post ---
export default function FacebookStylePost({
  author = { name: "Jane Cooper", avatar: "https://i.pravatar.cc/100?img=5" },
  time = "2h",
  audience = "public",
  text = "Sunset ride with the crew. Can’t believe how perfect the weather was! 🌅🚀",
  images = [
    { id: "1", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", alt: "City" },
    { id: "2", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop", alt: "Friends" },
    { id: "3", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop", alt: "Bike" },
    { id: "4", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", alt: "Road" },
  ],
  likeCount = 128,
  commentCount = 24,
  shareCount = 8,
  comments = [
    {
      id: "c1",
      name: "Wade Warren",
      avatar: "https://i.pravatar.cc/100?img=12",
      text: "Looks awesome! Where is this?",
      time: "1h",
    },
    {
      id: "c2",
      name: "Kristin Watson",
      avatar: "https://i.pravatar.cc/100?img=32",
      text: "The colors are unreal 🔥",
      time: "45m",
    },
  ],
  className,
}: PostProps) {
  const [liked, setLiked] = React.useState(false);
  const [likeTotal, setLikeTotal] = React.useState(likeCount);
  const [commentInput, setCommentInput] = React.useState("");
  const [allComments, setAllComments] = React.useState<CommentItem[]>(comments);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeTotal((prev) => (liked ? Math.max(0, prev - 1) : prev + 1));
  };

  const submitComment = () => {
    if (!commentInput.trim()) return;
    setAllComments((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2),
        name: "You",
        avatar: "https://i.pravatar.cc/100?img=1",
        text: commentInput.trim(),
        time: "Just now",
      },
    ]);
    setCommentInput("");
  };

  return (
    <div className={cn("mx-auto max-w-xl p-2", className)}>
      <Card className="rounded-2xl shadow-sm">
        {/* Header */}
        <CardHeader className="p-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-11 w-11 border">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-semibold leading-none">
                  {author.name}
                </CardTitle>
                <Button variant="secondary" size="sm" className="h-7 rounded-xl gap-1">
                  Following
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{time}</span>
                <span>·</span>
                <AudienceBadge audience={audience} />
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Post options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Save post</DropdownMenuItem>
                <DropdownMenuItem>Hide post</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="px-4 pb-0">
          {text && <p className="whitespace-pre-wrap text-[15px] leading-6">{text}</p>}
          <ImageGrid images={images} />
        </CardContent>

        {/* Social counts */}
        <CardContent className="px-4 py-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-5 w-5 rounded-full bg-primary/10" />
                <div className="h-5 w-5 rounded-full bg-destructive/10" />
              </div>
              <span>{likeTotal.toLocaleString()} likes</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{allComments.length} comments</span>
              <span>{shareCount} shares</span>
            </div>
          </div>
        </CardContent>

        <Separator className="mx-4" />

        {/* Actions */}
        <CardContent className="px-2 py-1">
          <div className="grid grid-cols-3 gap-1">
            <motion.div whileTap={{ scale: 0.98 }}>
              <ActionButton icon={ThumbsUp} label="Like" active={liked} onClick={toggleLike} />
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }}>
              <ActionButton icon={MessageCircle} label="Comment" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }}>
              <ActionButton icon={Share2} label="Share" />
            </motion.div>
          </div>
        </CardContent>

        <Separator className="mx-4" />

        {/* Comment composer */}
        <CardFooter className="p-4">
          <div className="flex w-full items-center gap-3">
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="https://i.pravatar.cc/100?img=1" alt="You" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 shadow-sm">
                <Input
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  className="border-none bg-transparent p-0 focus-visible:ring-0"
                />
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" className="rounded-full" onClick={submitComment}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardFooter>

        {/* Comment list */}
        {!!allComments.length && (
          <CardContent className="px-4 pb-4 -mt-2">
            <ul className="space-y-3">
              {allComments.map((c) => (
                <li key={c.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src={c.avatar} alt={c.name} />
                    <AvatarFallback>{c.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="inline-block max-w-full rounded-2xl bg-accent/40 px-3 py-2">
                      <div className="text-sm font-semibold leading-none">{c.name}</div>
                      <div className="text-sm leading-5">{c.text}</div>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <button className="hover:underline">Like</button>
                      <button className="hover:underline">Reply</button>
                      <span>{c.time}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
