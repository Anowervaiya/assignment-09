import { useForm } from "react-hook-form";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { contextApi } from "../ContextComponent/Context";

const SimpleRegistrationForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, stateChanged, user, GoogleLogin } =
    useContext(contextApi);

  const handleForm = (data) => {
    const email = data.email;
    const password = data.password;

    // create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("user was created once ");
      });

    // state change
    stateChanged();

    // google login
  };

  if (user) return <Navigate to={"/details/001"}></Navigate>;

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        First Name:
        <input
          type="text"
          {...register("firstName")}
          className="border p-3 rounded-lg w-full mt-10"
        />
        Last Name :
        <input
          type="text"
          {...register("lastName", { required: true })}
          className="border p-3 rounded-lg w-full mt-10"
        />
        {errors.lastName && (
          <p className="text-red-500 font-bold">Last name is required.</p>
        )}
        Email:
        <input
          type="email"
          {...register("email")}
          className="border p-3 rounded-lg w-full mt-10"
        />
        Password:
        <input
          type="password"
          {...register("password")}
          className="border p-3 rounded-lg w-full mt-10"
        />
        
        <input
          type="submit"
          value={"Sign Up"}
          className=" text-red-700 cursor-pointer btn "
        />
      </form>

      <div className="mt-8 ">
        <button className="btn " onClick={() => GoogleLogin()}>
          Google
        </button>
        <button className="mx-8 btn "> GitHub </button>
        <button className="btn ">Facebook</button>
      </div>
    </>
  );

};

export default SimpleRegistrationForm;
