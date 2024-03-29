"use client";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "@/components/FormComponent";
import CardComponent from "@/components/CardComponent";
import { useState } from "react";
import { User } from "@/type/type";
export default function MainComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const handleSubmit = (username: string, email: string, age: string): void => {
    const newUser = {
      id: uuidv4(),
      username,
      email,
      age,
    };
    setUsers((prev) => {
      return [...prev, newUser];
    });
  };
  const handleDelete = (id: string): void => {
    let newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div>
      <FormComponent handleSubmit={handleSubmit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.length != 0 &&
          users.map((user) => (
            <CardComponent
              key={user.id}
              user={user}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
}
