import React from "react";
import Navbar from "@/components/layouts/navbar";
import WhatsappWidget from "@/components/addon/WhatsappWidget";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <WhatsappWidget />
    </div>
  );
}

export default Layout;
