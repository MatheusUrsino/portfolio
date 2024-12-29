import { links } from "@/lib/data"
import React from "react"
import Header from "./header"
import HamburguerMenu from "./HamburguerMenu"

export default function Navbar()
{
 return(
    <nav>
        <HamburguerMenu links={links}/>
        <Header links={links}/>
    </nav>
 )   
}