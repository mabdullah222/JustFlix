'use client';

import NavbarItem from "./NabarItem";
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs'
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import { useState,useEffect } from "react";

const SCROLL_OFFSET=66;
export default function Navbar(){
    const [showMobileMenu,setMobileMenu]=useState(false);
    const [showAccountMenu,setAccountMenu]=useState(false);
    const [showBackground,setShowBackground]=useState(false);   
    useEffect(()=>{
        const handleScroll=(e)=>{
            if (e.target.ScrollY>=SCROLL_OFFSET){
                setShowBackground(true);
            }
            else{
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <nav className="w-full fixed z-40">
            <div
            className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground?'bg-zinc-900 bg-opacity-50':''}`}
            >
                <img className="h-4 lg:h-7" src="/assets/Images/logo.png" alt="Logo" />
                <div className="flex-row gap-7 ml-8 lg:flex hidden">
                    <NavbarItem label="Home"></NavbarItem>
                    <NavbarItem label="Series"></NavbarItem>
                    <NavbarItem label="Films"></NavbarItem>
                    <NavbarItem label="New & popular"></NavbarItem>
                    <NavbarItem label="My List"></NavbarItem>
                    <NavbarItem label="Browse by languages"></NavbarItem>
                </div>
                <div className="lg:hidden ml-8 flex flex-row cursor-pointer" onClick={()=>{setMobileMenu(!showMobileMenu)}}>
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown color="white" className={`ml-3 transition ${showMobileMenu?'rotate-180':'rotate-0'}`}></BsChevronDown>
                    <MobileMenu visible={showMobileMenu}></MobileMenu>
                </div>
                <div className="flex flex-row gap-7 items-center ml-auto">
                    <div className="hover:text-gray-300 text-gray-200 cursor-pointer">
                        <BsSearch></BsSearch>
                    </div>  
                    <div className="hover:text-gray-300 text-gray-200 cursor-pointer">
                        <BsBell></BsBell>
                    </div>
                    <div className="flex flex-row gap-2 items-center transition" onClick={()=>{setAccountMenu(!showAccountMenu)}}>
                        <img src="/assets/Images/default-blue.png" alt="Profile" className="h-10 cursor-pointer rounded-md"/>
                        <BsChevronDown color="white" size={15} className={`transition ${showAccountMenu?'rotate-180':'rotate-0'}`}></BsChevronDown>
                        <AccountMenu visible={showAccountMenu}></AccountMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}