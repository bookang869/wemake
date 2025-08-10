import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Leaderboards | wemake" },
  { name: "description", content: "Top performing products in our community" },
];

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10">
      <h1 className="text-5xl font-bold">Leaderboards</h1>
      <p className="text-lg font-light text-foreground">
        The most popular products on wemake.
      </p>
    </div>
  );
}
