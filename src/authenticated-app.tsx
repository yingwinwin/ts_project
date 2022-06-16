import { useAuth } from "context/auth-context";
import ProjectList from "screens/project-list";
import { Button } from "antd";
import styled from "@emotion/styled";

// 从布局出发用gird  从内容出发用flex
// 二维用grid   一维用flex
const AuthenticatenApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Nav>nav</Nav>
      <Main>
        <ProjectList />
      </Main>
      <Aside>aside</Aside>
      <Footer>footer</Footer>
    </Container>
  );
};

const PageHeader = styled.header`
  height: 6rem;
`;

// const Main = styled.main`
//   height: calc(100vh - 6rem);
// `

const Container = styled.div`
  display: grid;
  /* grid-template-rows: 6rem calc(100vh - 6rem); */
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
const Nav = styled.nav`
  grid-area: nav;
`;
const Aside = styled.aside`
  grid-area: aside;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

export default AuthenticatenApp;
