import type { MetaFunction } from "react-router";
import type { Route } from "./+types/weekly-leaderboard-page";

export const meta: MetaFunction<typeof Route> = ({ params }) => [
  { title: `Week ${params.week}, ${params.year} Weekly Leaderboard | wemake` },
  {
    name: "description",
    content: `Top products of week ${params.week}, ${params.year}`,
  },
];

export default function WeeklyLeaderboardPage({
  params,
}: Route.ComponentProps) {
  const { year, week } = params;

  return (
    <div className="px-20 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Week {week}, {year} Weekly Leaderboard
          </h1>
          <p className="text-lg font-light text-foreground">
            Top performing products of week {week}, {year}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weekly leaderboard items will go here */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">
              Weekly Leaderboard Placeholder
            </h3>
            <p className="text-muted-foreground">
              Top products of week {week}, {year} will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
