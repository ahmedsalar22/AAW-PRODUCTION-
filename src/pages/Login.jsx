import React from "react";
import LoginPage from "../components/auth/loginpage";
import Register from "../components/auth/register";
import Banner from "../components/banner";

const Login = () => {
  return (
    <>
      <Banner 
        bgimage={"/asset/image/bg-login.png"}
        text={"Login"}
        subtext={"Get in touch with us"}
      />

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white shadow-md rounded-lg p-8">
          <LoginPage />
          <Register />
        </div>
      </div>
    </>
  );
};

export default Login;
