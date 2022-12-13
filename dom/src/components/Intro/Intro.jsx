// import "./intro.scss"
import { Intro, IntroContainer } from "./styledIntro";
import { Container, Card } from "../../styled/index";
const Introo = () => {
  return (
    <>
      <Intro>
        <Container>
          <IntroContainer>
            <Card className="text-center text-white p-2">
              <img src="https://picsum.photos/id/36/300/150" alt="random-img" />
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem!</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-primary">push</button>
            </Card>
            <Card className="text-center text-white p-2">
              <img src="https://picsum.photos/id/36/300/150" alt="random-img" />
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem!</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <button className="btn btn-primary">push</button>
            </Card>
          </IntroContainer>
        </Container>
      </Intro>
    </>
  );
};
export default Introo;
