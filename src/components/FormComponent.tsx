"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useUserState } from "@/lib/state";

const formSchema = z.object({
  username: z
    .string({ required_error: "此欄位為必須" })
    .min(3, { message: "用戶名稱不得小於3個字" }),
  email: z
    .string({ required_error: "此欄位為必須" })
    .email({ message: "請輸入電子信箱格式" }),
  age: z
    .string({ required_error: "此欄位為必須" })
    .regex(/^[^-]/, { message: "年齡不可以小於0" }),
});

export default function FormComponent() {
  //create new user
  const addUser = useUserState((state) => state.addUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      age: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, email, age } = values;
    addUser(username, email, age);
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 shadow-md px-4 pb-6 pt-4 rounded-md w-full mx-auto mb-4 border-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-600 font-semibold text-sm">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter name"
                  {...field}
                  className="text-neutral-600 font-semibold text-sm"
                />
              </FormControl>
              <FormMessage className="text-red-700 font-semibold text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-600 font-semibold text-sm">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email"
                  {...field}
                  className="text-neutral-600 font-semibold text-sm"
                />
              </FormControl>
              <FormMessage className="text-red-700 font-semibold text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-600 font-semibold text-sm">
                Age
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter age"
                  {...field}
                  className="text-neutral-600 font-semibold text-sm"
                />
              </FormControl>
              <FormMessage className="text-red-700 font-semibold text-sm" />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <DialogClose>
            <Button type="submit">Save user</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
