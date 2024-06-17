import React from "react";
import style from "./ blog-grid.module.scss";
import ImageAsset from "@/components/loader/ImageAsset";
import BlogSidebar, {
  truncateString,
} from "@/components/ blogs/sidebar/BlogSidebar";
import blogs from "../data/blogs.json";
import Link from "next/link";

function BlogGrid() {
  return (
    <div className={style.blog_container}>
      <div className={style.blogs}>
        {blogs.map((item, index) => {
          return (
            <div key={index} className={style.blog_box}>
              <div className={style.thumbnail}>
                <div className={style.image_source}>
                  <Link href={`blogs/${item?.slug}`}>
                    <ImageAsset
                      src={
                        item?.image?.url ?? "https://picsum.photos/1920/1080"
                      }
                      width={1920}
                      height={1080}
                    />
                  </Link>
                </div>
              </div>
              <div className={style.details}>
                <i>{item?.date}</i>
                <Link href={`blogs/${item?.slug}`}>
                  <h2>{item?.title}</h2>
                </Link>
                <p>{truncateString(item?.description, 65)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.sidebar}>
        <BlogSidebar />
      </div>
    </div>
  );
}

export default BlogGrid;
