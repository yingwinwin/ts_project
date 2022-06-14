import { useState } from "react";
import RegisterScreen from "unauthenticated-app/register";
import Login from "unauthenticated-app/login";

const UnauthenticatenApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {isRegister ? <RegisterScreen /> : <Login />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </button>
    </>
  );
};

export default UnauthenticatenApp;
