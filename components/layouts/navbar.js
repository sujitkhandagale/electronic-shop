import React from "react";
import style from "./navbar.module.scss";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const newsItems = [
    "Breaking News: Market hits an all-time high!",
    "Sports Update: Local team wins championship!",
    "Weather Alert: Heavy rain expected tomorrow!",
    "Tech News: New smartphone release next month!",
  ];

  return (
    <nav className={style.navbar}>
      <div className={"container"}>
        <div className={style.info}>
          <div className={style.logo}>
            <Image
              src="https://static.cdnlogo.com/logos/l/75/lazada.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </div>
          <div className={style.nav_links}>
            <a className={style.selected} href="#">
              Home
            </a>
            <span>Products</span>
            <a href="">News & Media</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Careers</a>
            <a href="">Blog</a>
            <div className={style.search}>
              <input type="text" placeholder="Search swiches, brands" />
              <button>
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.news_ticker}>
        <div className={style.title}>News</div>
        <div className={style.news_ticker_content}>
          {newsItems.map((item, index) => (
            <div key={index} className={style.news_item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Products",
    link: "/",
    subMenu: [
      {
        name: "Product 1",
        link: "/",
      },
      {
        name: "Product 2",
        link: "/",
      },
    ],
  },
];
