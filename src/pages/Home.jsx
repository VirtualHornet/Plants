import styled from "styled-components";
import Flower from "../components/Flower";
import Tree from "./Tree";

function Home (){
    return(<Cointainer>
      <Flower />

      <Tree />




    </Cointainer>
    )
}
const Cointainer = styled.div`
  color: #fff;
`
export default Home;