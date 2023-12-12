import React from "react";
import { Field, ErrorMessage } from "formik";

export default function InputBox({
  lableName,
  labelPlaceHolder,
  type,
  name,
  error,
  touch,
}) {
  /*  const [loginClearKey, setLoginClearKey] = useState(0); */

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{lableName}</label>
      <Field
        name={name}
        type={type}
        placeholder={labelPlaceHolder}
        className="w-[350px] px-5 py-4 placeholder-blueGray-300 text-blueGray-600 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring focus:ring-white"
      />
      <ErrorMessage name={name}>{msg => <div className="text-red-600">{msg}</div>}</ErrorMessage>
    </div>
  );
}
