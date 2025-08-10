import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  category: string;
  timeAgo: string;
  authorAvatar?: string;
  className?: string;
}

export function PostCard({
  id,
  title,
  authorName,
  category,
  timeAgo,
  authorAvatar,
  className,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card
        className={`bg-transparent hover:bg-card/50 transition-colors ${className || ""}`}
      >
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-12">
            <AvatarFallback>
              {authorName.charAt(0).toUpperCase()}
            </AvatarFallback>
            <AvatarImage src={authorAvatar} />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{authorName} on</span>
              <span>{category}</span>
              <DotIcon className="size-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" className="text-sm">
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
