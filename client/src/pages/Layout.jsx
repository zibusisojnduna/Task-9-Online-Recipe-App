import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Nav";
import Footer from "../components/footer";

function Layout(){
    return(
        <section>
            <Navigation/>
            <Outlet/>
            <Footer/> 
        </section>
    
    )
}
export default Layout