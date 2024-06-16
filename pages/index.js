import React from "react";
import Layout from "@/components/layouts/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryGrid from "@/components/home/category/CategoryGrid";
import WhatsappWidget from "@/components/addon/WhatsappWidget";

function Index() {
  return (
    <Layout>
      {/*    slider*/}
      <HeroSlider />
      <CategoryGrid />
    </Layout>
  );
}

export default Index;
