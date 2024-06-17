import React from "react";
import style from "./ blog-sidebar.module.scss";
import ImageAsset from "@/components/loader/ImageAsset";
import blogs from "../../data/blogs.json";

function BlogSidebar() {
    return (
        <div className={style.blog_sidebar}>
            <h3>Most Viewed</h3>
            <div className={style.most_viewed}>
                {blogs.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div key={index} className={style.post}>
                                <div className={style.image}>
                                    <ImageAsset
                                        src={item?.image?.url}
                                        width={1920}
                                        height={1080}
                                    />
                                </div>
                                <div className={style.details}>
                                    <h3>
                                        {item?.title}
                                    </h3>
                                    <p>
                                        {truncateString(item?.description, 45)}
                                    </p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default BlogSidebar;

export const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...'
    } else {
        return str
    }
}