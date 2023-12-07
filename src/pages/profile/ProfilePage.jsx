import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "../../components/MainLayout";
import { getUserProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  //redirecting if user exists
  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  // useform hook
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
    },
    mode: "onChange",
  });

  // submit handler
  const submitHandler = (data) => {};

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} />
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
            {/* register btn */}
            <button
              type="submit"
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={!isValid || profileIsLoading}
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
