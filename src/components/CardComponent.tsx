"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type UserProps = {
  id: string;
  username: string;
  email: string;
  age: string;
};
type CardProps = {
  user: UserProps;
};
import { useUserState } from "@/lib/state";
export default function CardComponent(props: CardProps) {
  const handleDelete = useUserState((state) => state.deleteUser);
  const { id, username, email, age } = props.user;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{username}</CardTitle>
        <CardDescription className="text-neutral-500">{`id: ${id}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 font-semibold">信箱: {email}</p>
        <p className="text-neutral-600 font-semibold">年齡: {age}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            handleDelete(id);
          }}
        >
          刪除用戶
        </Button>
      </CardFooter>
    </Card>
  );
}
