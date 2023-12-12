'use client';
import React from "react";

import InputBox from "../components/utilis/inputBox";
import Button from "./utilis/button";
import { LoginSchema } from "../components/validation/schema";
import { Formik, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router'


export default function LoginForm() {

  const router = useRouter()

  const initialValues = {
    emailAddress: "",
    password: "",
  };

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      await axios
        .post("http://localhost:4000/login", { values })
        .then((res) => {
        console.log(res.data)
        localStorage.setItem("token" , res.data)
        if(res.data !== "Not") {
        toast.success("Successfully")
      router.push('/home')
      }
        else {
        toast.error("Email Address or Password not match")
        }
      });
    } catch (e) {
      console.log(e);
    }
    console.log(values);
    // Add your login logic here
    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form className="flex flex-col gap-4">
          <InputBox
            lableName={"Email or Username"}
            labelPlaceHolder={"Email or Username"}
            name={"emailAddress"}
            type={"email"}
          />
          <InputBox
            lableName={"Enter Password"}
            labelPlaceHolder={"Password"}
            name={"password"}
            type={"password"}
          />

          <div className="flex items-center justify-start gap-2">
            <input
              className=" h-4 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[-1px] after:ml-[2px] after:h-3.5 after:w-3.5 after:rounded-full after:border-none after:bg-green-400  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-400 checked:after:absolute checked:after:z-[2] checked:after:-mt-[-1px] checked:after:ml-[1rem] checked:after:h-3.5 checked:after:w-3.5 checked:after:rounded-full checked:after:border-none checked:after:bg-black checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-3.5 focus:after:w-3.5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault01"
            />
            <label for="flexSwitchCheckDefault01">Remember me</label>
          </div>

          <Button
            type={"submit"}
            text={"Log in"}
            outerStyle={"bg-green-400 border-none w-[350px]"}
            innerStyle={"text-black"}
          />
        </Form>
      </Formik>
      <div className=" flex justify-center">
        <p className="hover:text-green-400 underline underline-offset-1 cursor-pointer">
          Forgot your password?
        </p>
      </div>
    </>
  );
}
