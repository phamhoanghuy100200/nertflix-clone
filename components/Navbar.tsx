'use client'

import { useCallback, useEffect, useState } from "react"
import NavbarItem from "./NavbarItem";
import { CiUser } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
const TOP_OFFSET = 10
const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(false)
            } else {
                setShowBackground(true)
            }
        }

        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, [])
    return (
        <nav className="fixed z-40 w-full">
            <div className={`flex flex-row items-center px-4 md:px-16 py-6 transitions ${showBackground ? 'bg-zinc-900 opacity-90' : ''}`}>
                <img src="/images/logo.png" alt="logo" className="h-4 lg:h-7" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Trang chủ" active />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Phim" />
                    <NavbarItem label="Mới & Phổ biến" />
                    <NavbarItem label="Danh sách của tôi" />
                    <NavbarItem label="Duyệt phim theo ngôn ngữ" />


                </div>
                <div onClick={() => toggleMobileMenu()} className="flex flex-row gap-2 cursor-pointer items-center relative">
                    <div className="ml-8 gap-2 text-gray-200 hover:text-grap-300 cursor-pointer flex items-center lg:hidden ">
                        Duyệt phim
                        <BsChevronDown className={`text-white transition ${showMobileMenu} ?'rotate-180':'rotate-0'`} />
                        <MobileMenu visible={showMobileMenu} />
                    </div>


                </div>
                <div className="ml-auto flex flex-row gap-7 items-center ">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch size={20} />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BiBell size={20} />
                    </div>
                    <div onClick={() => toggleAccountMenu()} className="flex flex-row gap-2 cursor-pointer items-center relative">

                        <Image className="rounded-md" src={'/images/default-blue.png'} alt="user" width={40} height={40} />


                        <BsChevronDown className={`text-white transition ${showAccountMenu} ?'rotate-180':'rotate-0'`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;