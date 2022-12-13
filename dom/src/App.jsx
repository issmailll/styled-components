import IndexFooter from "./components/Footer";
import Index from "./components/Header";
import Introo from "./components/Intro/Intro";
import "./index.css";

const App = () => {
  return (
    <>
      <main>
        <Index />
        <Introo/>
        <IndexFooter />
      </main>
    </>
  );
};
export default App;