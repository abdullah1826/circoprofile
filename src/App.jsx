import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./fonts.css";

function App() {
  return (
    <div className="w-screen flex justify-center h-[100vh] overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/:userid" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
