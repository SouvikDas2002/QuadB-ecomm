import React from "react";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <>
     
      <Header />
      
      <main style={{ minHeight: "100vh" }} className="main-container">{children}</main>

    
     
    </>
  );
};


export default Layout;
