"use client"
import Link from "next/link";
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import DataProduct from "../data/product"
import { useState } from "react";
import AnimateOnView from "../hooks/AnimateOnView";

export default function Product() {
    const [selectedAroma, setSelectedAroma] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(DataProduct);

    const handleChange = (e:any) => {
        const value = e.target.value;
        if (value === "none"){
            setSelectedAroma("");
            setFilteredProducts(DataProduct);
        } else {
            setSelectedAroma(value);
            setFilteredProducts(DataProduct.filter(product => product.aroma.includes(value)));
        }
    }
    return (
        <>
        <div className="bg-[#ffffff]">
            <Navbar />
            {/* Top Section */}
            <div className="px-6 pt-30 pb-10 flex flex-col gap-5 
            lg:px-15 lg:pt-45
            ">
                <AnimateOnView direction="right" delay={0.2}>
                    <h1 className="playfair-display text-[22px] w-[300px]
                    md:text-3xl md:w-[500px]
                    ">WHERE HISTORY REIMAGINED TO FRAGRANCE</h1>
                </AnimateOnView>
                <AnimateOnView direction="up" delay={0.3}>
                    <p className="playfair-display text-[16px] w-[300px] text-justify
                    md:text-xl md:w-[500px]
                    ">Kami berkomitmen pada kualitas  tertinggi, memilih format Extrait de Parfum (konsentrasi minyak wangi tertinggi), untuk memastikan bahwa legacy yang dibawa parfum dapat bertahan lama dan memiliki proyeksi kuat.</p>
                </AnimateOnView>
            </div>
            <div>
                <select value={selectedAroma} 
                        onChange={(e) => handleChange(e)}
                        className="ibx-plex-mono border-y border-black w-full text-start pl-10 py-2 cursor-pointer
                        md:py-4 md:text-lg
                        ">
                    <option value="" disabled hidden>SELECT AROMA</option>
                    <option value="none">NONE</option>
                    <option value="Citrus" >CITRUS</option>
                    <option value="Aquatic" >AQUATIC</option>
                    <option value="Aromatic" >AROMATIC</option>
                    <option value="Woody" >WOODY</option>
                    <option value="Fruit" >FRUIT</option>
                    <option value="Sweet" >SWEET</option>
                    <option value="Vanilla" >VANILLA</option>
                    <option value="Floral" >FLORAL</option>
                </select>
            </div>
            <div className="flex flex-col gap-6
            lg:gap-0
            ">
                {filteredProducts.map((item) => (
                    <div key={item.id}
                    className="
                    lg:grid lg:grid-cols-3 lg:border-b lg:border-black
                    "
                    >   
                        <AnimateOnView direction="right" delay={0.2}>
                            <img src={item.image[2]} alt={item.name} className="w-full h-[380px] object-cover hidden
                            md:h-[650px]
                            lg:block
                            "/>
                        </AnimateOnView>
                        <AnimateOnView direction="right" delay={0.2}>
                            <img src={item.image[0]} alt={item.name} className="w-full h-[380px] object-cover
                            md:h-[650px]
                            "/>    
                        </AnimateOnView>
                        <div className="flex flex-col items-center py-5 gap-2
                        lg:items-start lg:pl-10 lg:justify-end lg:py-10
                        ">
                            <p className="playfair-display text-[16px]
                            md:text-[24px]
                            ">{item.name}</p>
                            <p className="playfair-display text-[14px]
                            md:text-[20px]
                            ">{item.size}</p>
                            <p className="playfair-display text-[12px] text-[#777777]
                            md:text-[16px]
                            ">{item.price}</p>
                            <Link href={`/detail/${item.id}`}>
                                <button className="ibx-plex-mono bg-black text-white py-2 px-10 w-full cursor-pointer hover:opacity-80 transition-all duration-200
                                md:py-4 md:px-20
                                ">VIEW PRODUCT</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
        </>
    )
}