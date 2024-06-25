import { createContext, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import RoleAbility from "./components/RoleAbility";

import "./style/App.css";
import './style/index.css';

import defaultStats from "./data/defaultStats.json"


export const RoleContext = createContext({}); 
export const StatsContext = createContext({});
export const HPContext = createContext({});

function App() {
  const getHP = (stats) => {
    const bodyWillAverage = Math.ceil((stats["BODY"] + stats["WILL"])/2)
    return 10 + (5 * bodyWillAverage)
}

  const [role, setRole] = useState("Medtech")
  const [stats, setStats] = useState(defaultStats)
  const [HP, setHP] = useState(getHP(stats))

  return (
    <>
    <RoleContext.Provider value={{role, setRole}} setRole={setRole}>
    <StatsContext.Provider value={{stats, setStats}} setStats={setStats}>
    <HPContext.Provider value={{HP, setHP}}>
      
    <Header/>
    <Profile/>
    <RoleAbility/>
    <Stats/>
    <Footer/>

    </HPContext.Provider>
    </StatsContext.Provider>
    </RoleContext.Provider>
    </>
  );
}

export default App;
