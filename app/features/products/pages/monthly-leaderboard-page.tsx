import type { MetaFunction } from "react-router";
import type { Route } from "./+types/monthly-leaderboard-page";

export const meta: MetaFunction<typeof Route> = ({ params }) => [
  { title: `${params.month} ${params.year} Monthly Leaderboard | wemake` },
  {
    name: "description",
    content: `Top products of ${params.month} ${params.year}`,
  },
];

export default function MonthlyLeaderboardPage({
  params,
}: Route.ComponentProps) {
  const { year, month } = params;

  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            {month} {year} Monthly Leaderboard
          </h1>
          <p className="text-lg font-light text-foreground">
            Top performing products of {month} {year}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Monthly leaderboard items will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Monthly Leaderboard Placeholder
            </h3>
            <p className="text-muted-foreground">
              Top products of {month} {year} will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
