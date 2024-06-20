import { useState } from "react"

export default function useRole() {
    const [role, setRole] = useState('Medtech');
    
  
    return [
      role,
      setRole
]
  }