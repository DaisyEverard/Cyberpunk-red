import { createContext, useState } from "react";

import "./style/App.css";
import './style/index.css';

import defaultStats from "./data/defaultStats.json"

import { calculateHP } from "./utils/commonMethods"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import RoleAbility from "./components/RoleAbility";



export const RoleContext = createContext({}); 
export const StatsContext = createContext({});
export const HPContext = createContext({});

function App() {
  const [role, setRole] = useState("Medtech")
  const [stats, setStats] = useState(defaultStats)
  const [HP, setHP] = useState(calculateHP(stats))

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
