import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.css";
import './style/index.css'
import Profile from "./components/Profile";
import RoleAbility from "./components/RoleAbility";
import { createContext, useState } from "react";
import Stats from "./components/Stats";


export const RoleContext = createContext({}); 

function App() {
  const [role, setRole] = useState("Medtech")

  return (
    <>
    <RoleContext.Provider value={{role, setRole}} setRole={setRole}>
    <Header/>
    <Profile/>
    <RoleAbility/>
    <Stats/>
    <Footer/>
    </RoleContext.Provider>
    </>
  );
}

export default App;
