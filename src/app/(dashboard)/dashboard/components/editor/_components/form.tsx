"use client"
import * as z from "zod"
import { formSchema } from "./form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Editor } from "@/components/editor/editor"

const initialState = {
  success: false,
  message: "",
  bio: "",
}

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div className="mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border"
        >
          <div className="my-4">
            <h2 className="text-2xl font-bold">User profile</h2>
            <p className="text-muted-foreground">
              Created with{" "}
              <a
                className="underline"
                href="https://tiptap.dev/docs/editor/getting-started/install/nextjs"
                target="_blank"
              >
                tiptap
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center justify-between flex-wrap sm:flex-nowrap w-full gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      type={"text"}
                      value={field.value}
                      onChange={(e) => {
                        const val = e.target.value
                        field.onChange(val)
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type={"email"}
                      value={field.value}
                      onChange={(e) => {
                        const val = e.target.value
                        field.onChange(val)
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Editor
                      value={field.value}
                      placeholder="Your bio here"
                      onContentChange={(content) => field.onChange(content)}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end items-center w-full pt-3">
            <Button className="rounded-lg" size="sm">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
