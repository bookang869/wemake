import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  timeAgo: string;
  jobType: string;
  location: string;
  salaryRange: string;
  jobLocation: string;
  className?: string;
}

export function JobCard({
  id,
  companyName,
  companyLogo,
  jobTitle,
  timeAgo,
  jobType,
  location,
  salaryRange,
  jobLocation,
  className,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card
        className={`bg-transparent hover:bg-card/50 transition-colors ${className || ""}`}
      >
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{companyName}</span>
              <span className="text-sm text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{jobTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{jobType}</Badge>
          <Badge variant="outline">{location}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salaryRange}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {jobLocation}
            </span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
