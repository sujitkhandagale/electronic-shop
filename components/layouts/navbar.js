import React, {useEffect, useState} from 'react'
import style from "./navbar.module.scss"
import Image from "next/image";
import {FaFacebook, FaSquareInstagram, FaYoutube} from "react-icons/fa6";
import {RiTwitterXLine} from "react-icons/ri";

function Navbar() {
    const newsItems = [
        'Breaking News: Market hits an all-time high!',
        'Sports Update: Local team wins championship!',
        'Weather Alert: Heavy rain expected tomorrow!',
        'Tech News: New smartphone release next month!'
    ];

    return (
        <nav className={style.navbar}>
            <div className={style.social}>
                <FaYoutube/>
                <RiTwitterXLine/>
                <FaFacebook/>
            </div>
            <div className={style.info}>
                <div className={style.logo}>
                    <Image src="https://static.cdnlogo.com/logos/l/75/lazada.svg" alt="Vercel Logo" width={72}
                           height={16}/>
                </div>
                <div className={style.nav_links}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className={style.news_ticker}>
                <div className={style.news_ticker_content}>
                    {newsItems.map((item, index) => (
                        <div key={index} className={style.news_item}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const Menu = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/'
    }, {
        name: 'Products',
        link: '/',
        subMenu: [
            {
                name: 'Product 1',
                link: '/'
            },
            {
                name: 'Product 2',
                link: '/'
            }
        ]
    }
]
