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
import Effects from "./components/Effects.jsx";



export const RoleContext = createContext({}); 
export const StatsContext = createContext({});
export const HPContext = createContext({});
export const HumanityContext = createContext({});

function App() {
  const [role, setRole] = useState("Medtech");
  const [stats, setStats] = useState(defaultStats);
  const [HP, setHP] = useState(calculateHP(stats));
  const [humanity, setHumanity] = useState(calculateHumanity(stats));

  return (
    <>
    <RoleContext.Provider value={{role, setRole}}>
    <StatsContext.Provider value={{stats, setStats}}>
    <HPContext.Provider value={{HP, setHP}}>
    <HumanityContext.Provider value={{humanity, setHumanity}} >
      
    <Header/>
    <Profile/>
    <Effects/>
    <RoleAbility/>
    <Stats/>
    <Footer/>

    </HumanityContext.Provider>
    </HPContext.Provider>
    </StatsContext.Provider>
    </RoleContext.Provider>
    </>
  );
}

export default App;
