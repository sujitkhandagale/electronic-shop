import React from "react";
import Layout from "@/components/layouts/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import CategoryGrid from "@/components/home/category/CategoryGrid";
import MediaPreview from "@/components/home/media/MediaPreview";
import NewAndBlogs from "@/components/home/news-and-blogs/NewAndBlogs";

function Index() {
  return (
    <Layout>
      <HeroSlider />
      <CategoryGrid />
      <MediaPreview />
      <NewAndBlogs />
    </Layout>
  );
}

export default Index;
