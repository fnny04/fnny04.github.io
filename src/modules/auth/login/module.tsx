"use client";
import { Button, ControlledFieldText } from "@/components";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { TVSLogin, VSLogin } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const AuthLoginModule: FC = (): ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [statusError, setStatusError] = useState<boolean>();
  const [loading, setIsloading] = useState<boolean>();
  const route = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TVSLogin>({
    mode: "all",
    resolver: zodResolver(VSLogin),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsloading(true);
      const response = await signIn("login", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (response?.error) {
        setErrorMessage(response.error);
        setIsloading(false);
        setStatusError(true);
      } else {
        route.push("/dashboard");
        console.log("Sukses");
      }
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
    setIsloading(false);
  });

  return (
    <section className="flex w-full h-screen bg-gray-100 items-center justify-between">
      <form
        onSubmit={onSubmit}
        className="md:w-1/2 w-full h-full gap-y-4 justify-center flex flex-col md:px-12 px-6"
      >
        <div className="flex flex-col w-3/4 mx-auto h-7/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 gap-y-6 rounded">
          <div className="mx-auto">
            <h1 className="text-4xl text-violet-800 font-semibold">Sign In</h1>
          </div>
          {statusError ? (
            <div className="w-full p-2 bg-red-100 border border-red-400 text-red-600 rounded text-center text-sm">
              {errorMessage}
            </div>
          ) : (
            ""
          )}
          <ControlledFieldText
            required
            type="email"
            control={control}
            name="email"
            label="Email"
            placeholder="Enter Email"
            status={errors.email ? "error" : "none"}
            message={errors.email?.message}
          />
          <ControlledFieldText
            required
            type="password"
            control={control}
            name="password"
            label="Password"
            placeholder="Enter Password"
            status={errors.password ? "error" : "none"}
            message={errors.password?.message}
          />
          <Button
            disabled={!isValid}
            size="lg"
            type="submit"
            loading={loading}
            className="w-full bg-violet-900 p-3 text-white rounded cursor-pointer text-center flex justify-center"
          >
            Sign In
          </Button>
        </div>
      </form>
      <figure className="hidden md:block w-1/2 h-full relative bg-cover">
        <Image
          src="/signin-bg.jpg"
          alt="backround_login"
          width={600}
          height={600}
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
      </figure>
    </section>
  );
};
