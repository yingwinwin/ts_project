import { useState } from "react";
import RegisterScreen from "unauthenticated-app/register";
import Login from "unauthenticated-app/login";
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";

const UnauthenticatenApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <RegisterScreen /> : <Login />}
        <Divider />
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？点击注册"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Title = styled.div`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
  font-size: 20px;
`;

const Header = styled.header`
  padding: 5rem 0;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
export default UnauthenticatenApp;
