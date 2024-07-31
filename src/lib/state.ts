import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
export type User = {
  id: string;
  username: string;
  email: string;
  age: string;
};

export type State = {
  users: User[];
};

export type Actions = {
  addUser: (username: string, email: string, age: string) => void;
  deleteUser: (id: string) => void;
  updateUser: (
    id: string,
    username: string,
    email: string,
    age: string
  ) => void;
};

export const useUserState = create<State & Actions>()((set) => ({
  users: [],
  addUser: (username: string, email: string, age: string) => {
    set((state) => ({
      users: [
        ...state.users,
        {
          id: uuidv4(),
          username,
          email,
          age,
        },
      ],
    }));
  },
  deleteUser: (id: string) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
  updateUser: (id: string, username: string, email: string, age: string) => {
    set((state) => ({
      users: state.users.map((user) => {
        return user.id === id ? { ...user, username, email, age } : user;
      }),
    }));
  },
}));
