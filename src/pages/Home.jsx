import styled from "styled-components";
import Flower from "../components/Flower";
import Tree from "./Tree";
import Footer from "./Footer";

function Home (){
    return(<Cointainer>

      <h1>PLANTS</h1>
      <p>The PLANTS Database provides standardized information about the vascular plants, mosses, liverworts, hornworts, and lichens of the U.S. and its territories.</p>
      <Flower />

      

      <Tree />



      <Footer />
    </Cointainer>
    )
}
const Cointainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 4rem;
    margin-left: auto;
    margin-right: auto;
  }
  p{
    width: 60%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`
export default Home;