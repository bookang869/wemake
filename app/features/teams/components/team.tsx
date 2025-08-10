import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface TeamProps {
  id: string;
  username: string;
  userAvatar: string;
  lookingFor: string[];
  projectDescription: string;
  className?: string;
}

export function Team({
  id,
  username,
  userAvatar,
  lookingFor,
  projectDescription,
  className,
}: TeamProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card
        className={`bg-transparent hover:bg-card/50 transition-colors ${className || ""}`}
      >
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex shadow-sm items-center text-base"
            >
              <span>@{username}</span>
              <Avatar className="size-5">
                <AvatarFallback>
                  {username.charAt(0).toUpperCase()}
                </AvatarFallback>
                <AvatarImage src={userAvatar} />
              </Avatar>
            </Badge>
            <span>is looking for</span>
            {lookingFor.map((role, index) => (
              <Badge key={index} className="text-base">
                {role}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link" asChild>
            <Link to={`/teams/${id}`}>Join team &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
