import React from "react";
import Layout from "@/components/layouts/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryGrid from "@/components/home/category/CategoryGrid";

function Index() {
  return (
    <Layout>
      <HeroSlider />
      <CategoryGrid />
    </Layout>
  );
}

export default Index;
