import React from "react";
import { useRouter } from "next/router";
import blog from "../../components/data/blogs.json";
import Layout from "@/components/layouts/Layout";
function BlogPost() {
  const router = useRouter();
  const { blogs } = router.query;
  const MyBlog = blog.find((item) => blogs === item?.slug) ?? null;
  console.log("MyBlog", MyBlog);
  if (!MyBlog) {
    return <>No Blog</>;
  } else
    return (
      <Layout>
        <div className="container"></div>
      </Layout>
    );
}
export default BlogPost;
