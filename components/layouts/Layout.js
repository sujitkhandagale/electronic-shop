import React from 'react'
import Navbar from "@/components/layouts/navbar";

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children }</div>
    )
}

export default Layout
