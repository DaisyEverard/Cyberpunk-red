import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.css";
import './style/index.css'
import Profile from "./components/Profile";
import RoleAbility from "./components/RoleAbility";
import { createContext, useState } from "react";


const Context = createContext();
const ContextProvider = ({children}) => {
  const value = useState("old");
  return <Context.Provider value={value} children={children} />;
};

function App() {
  return (
    <>
    <ContextProvider>
    <Header/>
    <Profile/>
    <RoleAbility/>
    <Footer/>
    </ContextProvider>
    </>
  );
}

export default App;
