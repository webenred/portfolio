"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import confetti, {
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
} from "canvas-confetti";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
});

interface ContactFormProps {
  trans: Record<string, string>;
  type: string;
}

export function ContactMeForm({ trans, type }: ContactFormProps) {
  const submitBtnRef = React.useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: any) =>
      await fetch(process.env.NEXT_PUBLIC_FORMS_ENDPOINT!, {
        method: "POST",
        body: JSON.stringify({ ...data, formType: type }),
        mode: "no-cors",
      }),
    onSuccess: () => {
      toast.success(trans.success);
      formSubmitSuccessfullyHandler();
      form.reset();
    },
    onError: () => toast.error(trans.error),
  });

  const formSubmitSuccessfullyHandler = React.useCallback(
    (
      options?: ConfettiOptions &
        ConfettiGlobalOptions & { canvas?: HTMLCanvasElement }
    ) => {
      const rect = submitBtnRef.current?.getBoundingClientRect();

      if (!rect) return;

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    },
    [submitBtnRef]
  );

  const onSubmit = (data: any) => mutation.mutate(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>{trans.name}</FormLabel>
              <FormControl>
                <Input type="text" placeholder={trans.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{trans.email}</FormLabel>
              <FormControl>
                <Input type="email" {...field} placeholder={trans.email} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{trans.message}</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder={trans.message} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          ref={submitBtnRef}
          type="submit"
          disabled={mutation.isPending}
          className="justify-between gap-2"
        >
          {mutation.isPending && (
            <Loader className="text-primary-foreground h-4 w-4 animate-spin" />
          )}
          {trans.sendMessage}
        </Button>
      </form>
    </Form>
  );
}
