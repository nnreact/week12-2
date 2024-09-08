import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { createContext, useState } from "react";

export const layoutContext = createContext();

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (

    <layoutContext.Provider value={{ collapsed, setCollapsed }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<h1>Home</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </layoutContext.Provider>
  )
}

export default App