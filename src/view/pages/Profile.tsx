import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../store/reducers/UserSlice";

import { useAppDispatch } from "../../hooks/redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [toggleAuth, settoggleAuth] = useLocalStorage("auth");
  const loginOut = () => {
    settoggleAuth(false);
    dispatch(signIn(false));
  };

  return (
    <div>
      Profile
      {toggleAuth && <button onClick={loginOut}>out</button>}
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default Profile;
