import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}