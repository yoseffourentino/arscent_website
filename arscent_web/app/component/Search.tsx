import dataProduct from "../data/product"
import { useState } from "react";
import Link from "next/link";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(dataProduct.slice(0, 3));

    const handleChange = (e:any) => {
        const value = e.target.value;
        setSearchValue(value);
        setFilteredProducts(dataProduct.filter(product => 
            product.name.toLowerCase().includes(value.toLowerCase())
        ));
    };

    return (
        <div className="px-2">
            <input className="py-4 px-2 w-full border-b border-gray-300 focus:outline-none focus:border-black focus:py-3 transition-all duration-200 ease-in-out" type="text" placeholder="Search here" value={searchValue} onChange={handleChange} />
            <div className="pb-20 pt-5">
                <p className="ibx-plex-mono text-lg font-semibold mb-3">Product</p>
                <div className="grid grid-cols-3 gap-2">
                    {filteredProducts.map((item) => (
                        <div key={item.id}>
                            <Link href={`/detail/${item.id}`}>
                                <img src={item.image[0]} alt={item.name} className="hover:scale-101 transition-all duration-200
                                lg:max-w-[300px]
                                " />
                            </Link>
                            <p className="founders-grotesk-r mt-2">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}