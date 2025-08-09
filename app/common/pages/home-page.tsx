import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => [
  { title: "Home | wemake" },
  { name: "description", content: "Welcome to wemake" },
];

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-lg font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={123}
            viewCount={456}
            voteCount={789}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-lg font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all disacussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id="postId"
            title="What is the best productivity tool?"
            authorName="Nico"
            category="Productivity"
            timeAgo="12 hours ago"
            authorAvatar="https://github.com/apple.png"
          />
        ))}
      </div>
    </div>
  );
}
