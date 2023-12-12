import React from "react";
import "../../app/globals.css";
import InputBox from "../../components/utilis/inputBox";
import Button from "../../components/utilis/button";
import Link from "next/link";
import { SignupSchema } from "../../components/validation/schema";
import { Formik, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const initialValues = {
    emailAddress: "",
    fname: "",
    lname: "",
    password: "",
    confirmPassword: "",
  };

  const handleSignInSubmit = async (values, { setSubmitting }) => {
    try {
      await axios
        .post("http://localhost:4000/signup", {
          values,
        })
        .then((res) => {
          console.log(res);
          if (res.data === "had") {
            toast.warn("Account Already Exists");
          } else {
            toast.success("Account created successfully");
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
      <div className="container mx-auto">
        <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
          <div className="flex flex-col gap-8">
            <div className="text-[50px] font-bold">Sign up to start</div>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={handleSignInSubmit}
            >
              <Form className="flex flex-col gap-4">
                <InputBox
                  lableName={"Email Address"}
                  labelPlaceHolder={"Email Address"}
                  name={"emailAddress"}
                  type={"email"}
                />
                <InputBox
                  lableName={"First Name"}
                  labelPlaceHolder={"First Name"}
                  name={"fname"}
                  type={"text"}
                />
                <InputBox
                  lableName={"Last Name"}
                  labelPlaceHolder={"Last Name"}
                  name={"lname"}
                  type={"text"}
                />
                <InputBox
                  lableName={"Password"}
                  labelPlaceHolder={"Password"}
                  name={"password"}
                  type={"password"}
                />
                <InputBox
                  lableName={"Confirm Password"}
                  labelPlaceHolder={"Confirm Password"}
                  name={"confirmPassword"}
                  type={"password"}
                />
                <Button
                  type={"submit"}
                  text={"Sign in"}
                  outerStyle={"bg-green-400 border-none w-[350px]"}
                  innerStyle={"text-black"}
                />
              </Form>
            </Formik>
          </div>
          <div className="border-2 border-sky-100 border-opacity-20 w-[70%]"></div>
          <div>
            <p>
              Already of an account?
              <span className="hover:text-green-400 underline underline-offset-1 cursor-pointer">
                <Link href="/login"> Log in here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
