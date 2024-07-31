"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

// type FormComponentProps = {
//   handleSubmit: (username: string, email: string, age: string) => void;
// };

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
        className="space-y-6 shadow-md p-4 rounded-md w-full sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto mb-8 border-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-600 font-semibold text-sm">
                用戶名稱
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="請輸入用戶名稱"
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
                用戶信箱
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="請輸入電子信箱"
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
                用戶年齡
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="請輸入年齡"
                  {...field}
                  className="text-neutral-600 font-semibold text-sm"
                />
              </FormControl>
              <FormMessage className="text-red-700 font-semibold text-sm" />
            </FormItem>
          )}
        />
        <Button type="submit">新增用戶</Button>
      </form>
    </Form>
  );
}
