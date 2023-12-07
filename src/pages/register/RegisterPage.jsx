import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import MainLayout from "../../components/MainLayout";
import { signup } from "../../services/index/users";

const RegisterPage = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  // useform hook
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  // submit handler
  const submitHandler = (data) => {
    // console.log(data);
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* name */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5A7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="italic placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
                // validation
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be 1 character!",
                  },
                  required: {
                    value: true,
                    message: "Name is required!",
                  },
                })}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            {/* email */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5A7184] font-semibold block"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter e-mail"
                className="italic placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
                // validation
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid e-mail!",
                  },
                  required: {
                    value: true,
                    message: "E-mail is required!",
                  },
                })}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            {/* password */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5A7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="italic placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
                // validation
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long!",
                  },
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                })}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {/* confirm password */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5A7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                className="italic placeholder:text-[#959EAD] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#C3CAD9]"
                // validation
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Please enter the password again!",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Passwords do not match!";
                    }
                  },
                })}
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            {/* forget passowrd */}
            <Link
              to="/forget-password"
              className="text-sm font-semibold text-primary"
            >
              Forgot password?
            </Link>
            {/* register btn */}
            <button
              type="submit"
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={!isValid || isLoading}
            >
              Register
            </button>
            {/* redirecting to login page */}
            <p className="text-sm font-semibold text-[#5A7184]">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
