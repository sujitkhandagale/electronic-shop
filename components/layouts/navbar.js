import React, { Fragment, useState } from "react";
import style from "./navbar.module.scss";
import Image from "next/image";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { IoIosArrowForward, IoIosInformationCircle } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { ImBlogger2 } from "react-icons/im";
import { useRouter } from "next/router";

function Navbar() {
  const newsItems = [
    "Breaking News: Market hits an all-time high!",
    "Sports Update: Local team wins championship!",
    "We are replacing damage switches connect through contact us.!",
    "Tech News: Fan automation will launch soon.!",
  ];

  const router = useRouter();
  const { pathname } = router;
  console.log("pathname", pathname);
  const [hoverData, setHoverData] = useState({});
  return (
    <nav className={style.navbar}>
      <div className={"container"}>
        <div className={style.info}>
          <Link title={"Lazada"} href={"/"}>
            <div className={style.logo}>
              <Image
                src="https://static.cdnlogo.com/logos/l/75/lazada.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </div>
          </Link>
          <>
            <div className={style.is_mobile}>
              <div className={style.nav_links}>
                {Menu.map((item) => {
                  return (
                    <div className={style.link} key={item.id}>
                      <Link
                        className={
                          pathname === item.link ? `${style.selected} ` : ""
                        }
                        href={item?.link ?? "#"}
                      >
                        {item.name}
                      </Link>
                      {item?.subMenu && (
                        <div className={style.dropdown}>
                          <div className={style.list}>
                            {item?.subMenu?.map((subItem) => (
                              <Link
                                onMouseEnter={(e) => {
                                  setHoverData(subItem);
                                  console.log("subItem", subItem);
                                }}
                                key={subItem?.id}
                                className={
                                  pathname === subItem?.link
                                    ? `${style.selected} `
                                    : ""
                                }
                                href={subItem?.link ?? "#"}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                          <div className={style.extra}>
                            {hoverData?.productList?.map((item) => {
                              return (
                                <Link key={item.id} href={item.link}>
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className={style.search}>
                  <input type="text" placeholder="Search swiches, brands" />
                  <button>
                    <IoSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className={style.is_desktop}>
              <SidebarOptions />
            </div>
          </>
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
    id: 1,
    name: "Home",
    link: "/",
    icon: <MdHome />,
  },
  {
    id: 2,
    name: "Products",
    icon: <AiFillProduct />,
    link: null,
    subMenu: [
      {
        id: 1,
        name: "Switches",
        link: "/products/switches",
        productList: [
          {
            id: 1,
            name: "Switches",
            link: "/products/switches",
          },
          {
            id: 2,
            name: "Switches",
            link: "/products/switches",
          },
          {
            id: 3,
            name: "Switches",
            link: "/products/switches",
          },
        ],
      },
      {
        id: 2,
        name: "Home Appliances",
        link: "/products/home-appliances",
      },
      {
        id: 3,
        name: "Wires & Cables",
        link: "/products/wires-and-cables",
      },
      {
        id: 4,
        name: "Accessories",
        link: "/products/accessories",
      },
      {
        id: 5,
        name: "Lighting & Lighting",
        link: "/products/lighting-and-luminaries",
      },
      {
        id: 6,
        name: "Fans",
        link: "/products/fans",
      },
    ],
  },
  {
    id: 3,
    name: "News & Media",
    link: "/news-and-media",
    icon: <IoIosInformationCircle />,
  },
  {
    id: 4,
    name: "About Us",
    link: "/about-us",
    icon: <IoIosInformationCircle />,
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact-us",
    icon: <IoIosInformationCircle />,
  },
  {
    id: 6,
    name: "Careers",
    link: "/careers",
    icon: <IoIosInformationCircle />,
  },
  {
    id: 7,
    name: "Blog",
    link: "/blogs",
    icon: <ImBlogger2 />,
  },
];

const SidebarOptions = () => {
  const [hide, setHide] = useState(true);
  const [openMenuIds, setOpenMenuIds] = useState([]);

  const handleClick = () => {
    setHide(!hide);
  };

  const toggleSubMenu = (id) => {
    if (openMenuIds.includes(id)) {
      setOpenMenuIds(openMenuIds.filter((menuId) => menuId !== id));
    } else {
      setOpenMenuIds([...openMenuIds, id]);
    }
  };

  const renderMenu = (menu, sub) => {
    return menu.map((item) => (
      <div key={item.id} className={style.option}>
        <div
          className={`${style.menu_link} ${sub ? style.sub : ""}`}
          onClick={() => (item?.subMenu ? toggleSubMenu(item.id) : null)}
        >
          <Link href={item.link || "#"}>{item.name}</Link>
          {item.subMenu && (
            <div className={style.arrow}>
              <IoIosArrowForward />
            </div>
          )}
        </div>
        {item.subMenu && openMenuIds.includes(item.id) && (
          <div className={style.sub_menu}>{renderMenu(item.subMenu, true)}</div>
        )}
      </div>
    ));
  };

  return (
    <div className={style.sidebar}>
      <div onClick={handleClick} className={style.menu_button}>
        <HiOutlineMenu />
      </div>
      <div className={`${hide ? style.hide : style.sidebar_options}`}>
        <div className={style.close}>
          <div onClick={handleClick} className={style.menu_button}>
            <IoCloseSharp />
          </div>
        </div>
        <div className={style.options}>
          <div className={style.option}>
            <div className={style.search}>
              <input type="text" placeholder={"Search  switches, etc"} />{" "}
              <button>
                <IoSearch />
              </button>
            </div>
          </div>
          <div className={style.option}>
            <p>
              <br />
              <small>
                cant find what you are looking for? please contact us
              </small>
              <br />
              <br />
            </p>
          </div>
          {renderMenu(Menu)}
        </div>
      </div>
    </div>
  );
};
