import instagram from "../assets/img/instagram.png";
import tiktok from "../assets/img/tik-tok.png";
import whatsapp from "../assets/img/whatsapp.png";
import logo3 from "../assets/img/arscent_logo3.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <>
        <div className="bg-[#ffffff] px-6 pt-6">
            <div className="border-y border-black py-3 flex flex-col
            lg:flex-row lg:justify-between lg:px-10 lg:py-10
            ">
                <div className="flex flex-col gap-7">
                    <div className="flex gap-5">
                        <Link href="https://www.instagram.com/arscentofficial/" target="_blank">
                            <img src={instagram.src} alt="Instagram" className="w-[30px] h-[30px] cursor-pointer
                            md:w-10 md:h-10
                            "/>
                        </Link>
                        <Link href="https://www.tiktok.com/@arscentofficial" target="_blank">
                            <img src={tiktok.src} alt="TikTok" className="w-[30px] h-[30px] cursor-pointer
                            md:w-10 md:h-10
                            " />
                        </Link>
                        <Link href="https://wa.me/6285121332321" target="_blank">
                            <img src={whatsapp.src} alt="WhatsApp" className="w-[30px] h-[30px] cursor-pointer
                            md:w-10 md:h-10
                            " />
                        </Link>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <p className="ibx-plex-mono font-semibold text-[12px]
                            md:text-[18px]
                            ">INFORMATIONS</p>
                            <ul>
                                <li className="ibx-plex-mono font-thin text-[12px]
                                md:text-[18px]
                                "><Link href="https://wa.me/6285121332321" target="_blank">CONTACT US</Link></li>
                                <li className="ibx-plex-mono font-thin text-[12px]
                                md:text-[18px]
                                "><Link href="/product">COLLECTIONS</Link></li>
                                <li className="ibx-plex-mono font-thin text-[12px]
                                md:text-[18px]
                                "><Link href="/about">OUR STORY</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="ibx-plex-mono font-semibold text-[12px]
                            md:text-[18px]
                            ">OUR MARKETPLACE</p>
                            <ul>
                                <li className="ibx-plex-mono font-thin text-[12px]
                                md:text-[18px]
                                "><Link href="https://shopee.co.id/arscentstore" target="_blank">SHOPEE</Link></li>
                                <li className="ibx-plex-mono font-thin text-[12px]
                                md:text-[18px]
                                "><Link href="https://www.tokopedia.com/arscent" target="_blank">TOKOPEDIA</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={logo3.src} alt="Arscent Logo" className="mx-auto
                    lg:w-[600px]
                    "/>
                </div>
            </div>
            <p className="ibx-plex-mono font-thin text-[10px] text-center my-2
            md:text-[14px]
            ">© 2025 Arscent. All rights reserved.</p>
        </div>
        </>
    );
}