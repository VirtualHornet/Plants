import {BrowserRouter} from"react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";


function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Search/>
        <Pages/>
      </BrowserRouter>
   
    </StyledApp>
  );
}

const StyledApp = styled.div`
background-color: rgba(0,0,0,0.5);
`

export default App;
