import { styled } from "styled-components";
import bg from './bg/earth-asia-solid (1).svg'
import { MainLayout } from "./styles/Layout";
import Orb from "./components/orb/Orb";
import Nav from "./components/Navigation/Nav";
import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import { useGlobalContext } from "./context/globalContext";


function App() {
  const [active, setActive] = React.useState(1)

   const global = useGlobalContext()
   console.log(global)

  const displayData = () => {
    switch(active){
      case 1: 
      return <Dashboard/>
      case 2: 
      return <Dashboard/>
      case 3: 
      return <Income/>
      case 4: 
      return <Expenses/>
      default : <Dashboard/>
    }
  }
  return (
    <AppStyled bg={bg} className="App">
      <Orb/>
      <MainLayout>
        <Nav active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    & ::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default App;
