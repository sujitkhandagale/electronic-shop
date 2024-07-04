import React from "react";
import style from "./news-and-blogs.module.scss";
import BlogGrid from "@/components/ blogs/BlogGrid";

function NewAndBlogs() {
  return (
    <div className={"container"}>
      <div className={style.blogs}>
        <h2>Blogs And News</h2>
        <BlogGrid sidebar={false} index={3} />
      </div>
    </div>
  );
}

export default NewAndBlogs;
