import React from "react";
import Navbar from "@/components/layouts/navbar";
import WhatsappWidget from "@/components/addon/WhatsappWidget";
import Footer from "@/components/layouts/footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <WhatsappWidget />
      <Footer />
    </div>
  );
}

export default Layout;
