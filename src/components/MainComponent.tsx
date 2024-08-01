"use client";
import FormComponent from "@/components/FormComponent";
import ModalContainer from "./ModalContainer";
import CardComponent from "@/components/CardComponent";
import { useUserState } from "@/lib/state";
import { Sandwich } from "lucide-react";
export default function MainComponent() {
  //引入使用者狀態
  const users = useUserState((state) => state.users);
  return (
    <div>
      <header className="flex justify-between items-center  border-b-2 pt-6 pb-4">
        {/* logo and title */}
        <div className="flex justify-center items-center gap-6">
          <Sandwich
            size={48}
            className="bg-neutral-700 text-yellow-400 rounded-full p-1"
          />
          <h1 className="text-xl font-bold">User Management System</h1>
        </div>
        <ModalContainer />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8">
        {users.length != 0 &&
          users.map((user) => <CardComponent key={user.id} user={user} />)}
      </div>
    </div>
  );
}
