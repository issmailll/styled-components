// import "./footer.scss"
import { Footer, FooterContainer } from "./style";
import { Container } from "../../styled/index";
const IndexFooter = () => {
  return (
    <>
      <Footer>
        <Container>
          <FooterContainer>
            <h5 className="text-center">{`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`}</h5>
          </FooterContainer>
        </Container>
      </Footer>
    </>
  );
};
export default IndexFooter;
