import React, { FormEvent } from "react";
import { signIn } from "../../store/reducers/UserSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { Controller, useForm } from "react-hook-form";
type IData = { username: string; userpassword: string };
const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const login = "Admin";
  const password = "12345";

  const onSubmit = (data: IData) => {
    if (data.userpassword === password && data.username === login) {
      navigate(fromPage, { replace: true });
      dispatch(signIn(true));
    } else {
      console.log("error auth");
      reset();
    }
  };

  return (
    <div>
      <Outlet />
      <Link to={"contacts"}>contacts</Link>
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        Login{" "}
        <input
          type="text"
          {...register("username", {
            required: "require",
            maxLength: { value: 7, message: "max" },
          })}
        />
        {errors?.username && <div>{errors?.username?.message}</div>}
        Password
        <Controller
          control={control}
          rules={{
            required: "require",
            minLength: { value: 5, message: "min 5" },
          }}
          name="userpassword"
          render={({ field }) => (
            <input value={field.value} onChange={field.onChange} />
          )}
        />
        {errors?.userpassword && <div>{errors?.userpassword?.message}</div>}
        <button disabled={!isValid} type={"submit"}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Login;
