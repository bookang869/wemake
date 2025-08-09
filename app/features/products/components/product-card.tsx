import { Link } from "react-router";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentCount: number;
  viewCount: number;
  voteCount: number;
  className?: string;
}

export function ProductCard({
  id,
  name,
  description,
  commentCount,
  viewCount,
  voteCount,
  className,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <Card
        className={`w-full !flex-row bg-transparent hover:bg-accent/50 p-6 items-center justify-between ${className || ""}`}
      >
        <CardHeader className="p-0 w-full">
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <Button variant="outline" className="flex flex-col h-14 ml-4">
          <ChevronUpIcon className="size-4 shrink-0" />
          <span>{voteCount}</span>
        </Button>
      </Card>
    </Link>
  );
}
