import React, { useEffect } from "react";
import "../../app/globals.css";
import Button from "../../components/utilis/button";
import LoginForm from "../../components/loginForm";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Login() {

  const Router = useRouter();

useEffect(()=>{
  const token = localStorage.getItem('token');
  if(token){
    Router.push("/home")
  }
},[])

  return (
    <div className="container mx-auto">
      <div className="flex min-h-screen flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-10 ">
          <div className="text-[50px] font-bold">Log in to Pointer</div>
          <div className="flex flex-col gap-2">
            <Button
              icon={FcGoogle}
              text={"Continue with Google"}
              outerStyle={"w-[350px]"}
            />
            <Button
              icon={FaFacebook}
              text={"Continue with Facebook"}
              outerStyle={"w-[350px]"}
            />
            <Button
              icon={FaApple}
              text={"Continue with Apple"}
              outerStyle={"w-[350px]"}
            />
            <Button
              text={"Continue with Phone Number"}
              outerStyle={"w-[350px]"}
            />
          </div>
        </div>
        <div className="border-2 border-sky-100 border-opacity-20 w-[70%]"></div>
        <div>
          <LoginForm />
        </div>
        <div className="border-2 border-sky-100 border-opacity-20 w-[70%]"></div>
        <div>
          Don't have an account?{" "}
          <span className="hover:text-green-400 underline underline-offset-1 cursor-pointer">
            <Link href="/signup">Sign up for Pointer</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
