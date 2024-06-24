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

function App() {
  const [role, setRole] = useState("Medtech")
  const [stats, setStats] = useState(defaultStats)

  return (
    <>
    <RoleContext.Provider value={{role, setRole}} setRole={setRole}>
    <StatsContext.Provider value={{stats, setStats}} setStats={setStats}>
    <Header/>
    <Profile/>
    <RoleAbility/>
    <Stats/>
    <Footer/>
    </StatsContext.Provider>
    </RoleContext.Provider>

    </>
  );
}

export default App;
