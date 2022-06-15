import { useState } from "react";
import RegisterScreen from "unauthenticated-app/register";
import Login from "unauthenticated-app/login";
import { Button } from "antd";

const UnauthenticatenApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {isRegister ? <RegisterScreen /> : <Login />}
      <Button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </Button>
    </>
  );
};

export default UnauthenticatenApp;
