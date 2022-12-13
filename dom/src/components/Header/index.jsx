// import "./header.scss";
import { Header, HeaderContainer, Logo, Nav, Ul, Li, A } from "./style.jsx";
import { Container } from "../../styled/index";
const Index = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <Logo href="#">Logo</Logo>
            <Nav>
              <Ul>
                <Li>
                  <A href="#">Home</A>
                </Li>
                <Li>
                  <A href="#">About</A>
                </Li>
                <Li>
                  <A href="#">Location</A>
                </Li>
              </Ul>
              <A href="#">Contact</A>
            </Nav>
          </HeaderContainer>
        </Container>
      </Header>
    </>
  );
};
export default Index;
