import React from "react";
import Nav from "./nav"; // ✅ Use lowercase "n" to match nav.js
import Footer from "./footer";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Nav />
      
      <Footer/>
    </div>
  );
}

export default App;