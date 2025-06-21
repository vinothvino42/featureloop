"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OctagonAlertIcon } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BrandPanel from "./brand-panel";
import LegalLinks from "./legal-links";
import FeatureloopIconHeader from "./featureloop-icon-header";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required " }),
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Password is required " }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPasswords"],
  });

export default function SignUp() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  const onSocial = (provider: "google" | "github") => {};

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:p8 flex flex-col gap-6 p-6"
            >
              <FeatureloopIconHeader />
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Let&apos;s get started</h1>
                <p className="text-muted-foreground text-balance">
                  Create your account
                </p>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!!error && (
                <Alert className="bg-destructive/10 border-none">
                  <OctagonAlertIcon className="!text-destructive h-4 w-4" />
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              )}
              <Button disabled={pending} type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="after:border-border after:item-center after:border-top relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  disabled={pending}
                  variant="outline"
                  type="button"
                  className="w-full"
                  onClick={() => onSocial("google")}
                >
                  <FaGoogle />
                  Google
                </Button>
                <Button
                  disabled={pending}
                  variant="outline"
                  type="button"
                  className="w-full"
                  onClick={() => onSocial("github")}
                >
                  <FaGithub /> GitHub
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Sign In
                </Link>
              </div>
            </form>
          </Form>
          <BrandPanel />
        </CardContent>
      </Card>
      <LegalLinks />
    </div>
  );
}
