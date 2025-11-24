"use client";

import logo from "../assets/img/arscent_logo.svg";
import search from "../assets/img/search.svg";
import cart from "../assets/img/cart.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        if(menuOpen){
            setSearchOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [menuOpen]);

    return (
        <div className={`fixed top-0 left-0 w-full bg bg-transparent z-30 transition-all duration-300 ${scrolled || searchOpen ? "bg-white" : "bg-transparent"}`}>
            <nav className={`navbar transition-all duration-300 shadow-lg ${menuOpen ? "bg-white" : "bg-white/40"}`}>
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-center items-center w-10 h-10 z-40 cursor-pointer">
                    <span className={`bar transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
                    <span className={`bar transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`bar transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
                <div className="flex justify-center">
                    <Link href="/">
                        <img src={logo.src} alt="Arscent Logo" className={`transition-all duration-300 ${scrolled || searchOpen ? "w-10 h-10" : "w-20 h-20" }`} />
                    </Link>
                </div>
                <div className="flex gap-6 justify-end">
                    <img src={search.src} alt="Search Icon" className="w-5 h-5 cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
                </div>
                <div
                    className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-20 ${
                        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onClick={() => setMenuOpen(false)}
                ></div>
                <div className={`fixed pt-10 top-0 left-0 h-screen w-2/3 lg:w-1/3 bg-white shadow-lg transition-transform duration-300 ease-in-out transform z-20
                    ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}>
                    <div className="p-8 space-y-8">
                        <p className="font-semibold mb-2">SHOP</p>
                        <ul className="space-y-2">
                            
                            <li><Link href="/product">PERFUME</Link></li>
                            <li><Link href="https://shopee.co.id/arscentstore" target="_blank">SHOPEE</Link></li>
                            <li><Link href="https://www.tokopedia.com/arscent" target="_blank">TOKOPEDIA</Link></li>
                        </ul>
                    </div>
                    <div className="p-8">
                        <p className="font-semibold mb-2">EXPLORE</p>
                        <ul>
                            <li className="space-y-2"><Link href="/about">OUR STORY</Link></li>
                        </ul>
                    </div>
                    <div className="p-8">
                        <p className="font-semibold mb-2">SOCIAL MEDIA</p>
                        <ul className="space-y-2">
                            <li className="space-y-2"><Link href="https://www.instagram.com/arscentofficial/" target="_blank">INSTAGRAM</Link></li>
                            <li className="space-y-2"><Link href="https://www.tiktok.com/@arscentofficial" target="_blank">TIK TOK</Link></li>
                        </ul>
                    </div>
                    <div className="p-8">
                        <p className="font-semibold mb-2">CONTACT US</p>
                        <ul className="space-y-2">
                            <li className="space-y-2"><Link href="https://wa.me/6285121332321" target="_blank">WHATSAPP</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`fixed bg-white top-15 w-full shadow-lg duration-300 ease-in-out transform z-20
                    ${searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
                    <Search />
                </div>
            </nav>
        </div>
    );
}