import VendorMachine from "./components/VendorMachine";
import Coins from "./components/Coins";
import styled from "styled-components";

function App() {
  return (
    <Container>
        <VendorMachine/>
        <Coins/>
    </Container>
  );
}
const Container = styled.div`
  display:flex;
  margin:auto;
  justify-content:center;
  
`
export default App;
