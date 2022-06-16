import { useAuth } from "context/auth-context";
import ProjectList from "screens/project-list";
import { Button } from "antd";
import styled from "@emotion/styled";
import { Row } from "components/lib";

// 从布局出发用gird  从内容出发用flex
// 二维用grid   一维用flex
const AuthenticatenApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft gap={true} between={true}>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  );
};
const Container = styled.div`
  /* display: grid;
  grid-template-rows: 6rem 1fr 6rem; */
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
export default AuthenticatenApp;
