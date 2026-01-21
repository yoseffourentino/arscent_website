import Navbar from '@/app/component/Navbar';
import dataProduct from '../../data/product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Footer from '@/app/component/Footer';
import Link from 'next/link';

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const filteredProduct = dataProduct.find(product => String(product.id) === id);

    if (!filteredProduct) {
        return <div><h1>Product not found</h1></div>;
    }

    return (
        <div className='bg-[#ffffff]'>
            <Navbar />
            <div>
                <div className='flex flex-col justify-between
                lg:flex-row
                '>
                    <Carousel>
                        <CarouselContent>
                            {filteredProduct.image.map((img, index) => (
                                <CarouselItem key={index} className="h-[500px]
                                md:h-[650px]
                                lg:h-[800px] lg:w-[200px]
                                ">
                                    <img src={img} alt={`${filteredProduct.name} image ${index + 1}`} className="w-full h-full object-cover"/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-black p-2">Prev</CarouselPrevious>
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-black p-2">Next</CarouselNext>
                    </Carousel>
                    <div className='p-6 flex flex-col w-full
                    lg:justify-center lg:px-20 bg-[#f0d3ad]'>
                        <h2 className='playfair-display text-[16px]
                        md:text-[24px]
                        '>{filteredProduct.name}</h2>
                        <p className='playfair-display text-[14px]
                        md:text-[20px]
                        '>{filteredProduct.size}</p>
                        <p className='playfair-display text-[14px] text-[#777777] mt-3
                        md:text-[18px]
                        '>{filteredProduct.price}</p>
                        <Link href={filteredProduct.link} target='_blank'>
                            <button className="ibx-plex-mono bg-black text-white py-3 px-10 w-full mt-5 cursor-pointer hover:opacity-80 transition-all duration-200">BUY PRODUCT</button>
                        </Link>
                    </div>
                </div>
                <div className='
                lg:flex lg:justify-between
                '>
                    <p className='playfair-display text-[14px] mt-5 text-justify leading-6 px-6
                    md:text-[20px]
                    lg:w-[700px] lg:mx-20 lg:my-20
                    '>{filteredProduct.description}</p>
                    <img src={filteredProduct.image[1]} alt="" className='w-[600px] h-[600px] object-cover
                    hidden
                    lg:block
                    ' />
                </div>
                <div className="w-full h-[350px] bg-cover bg-center my-5 p-6 pb-15 flex justify-end
                lg:h-[700px]
                " style={{ backgroundImage: `url(${filteredProduct.bgimage})` }}>
                    <div className='p-6 w-[300px] flex flex-col gap-5 bg-black/35 h-full justify-center
                    lg:w-[500px] lg:mr-30 lg:h-[400px]
                    '>
                        <div>
                            <h3 className='playfair-display text-[14px] font-bold text-white
                            md:text-[18px]
                            lg:text-[26px]
                            '>Top Notes:</h3>
                            <p className='playfair-display text-[14px] text-neutral-100
                            md:text-[16px]
                            lg:text-[22px]
                            '>{filteredProduct.topNotes.join(", ")}</p>
                        </div>
                        <div>
                            <h3 className='playfair-display text-[14px] font-bold text-white
                            md:text-[18px]
                            lg:text-[26px]
                            '>Middle Notes:</h3>
                            <p className='playfair-display text-[14px] text-neutral-100
                            md:text-[16px]
                            lg:text-[22px]
                            '>{filteredProduct.middleNotes.join(", ")}</p>
                        </div>
                        <div>
                            <h3 className='playfair-display text-[14px] font-bold text-white
                            md:text-[18px]
                            lg:text-[26px]
                            '>Base Notes:</h3>
                            <p className='playfair-display text-[14px] text-neutral-100
                            md:text-[16px]
                            lg:text-[22px]
                            '>{filteredProduct.baseNotes.join(", ")}</p>
                        </div>
                    </div>
                </div>
                <div className='px-6 py-10
                lg:px-25
                '>
                    <p className='playfair-display italic text-[15px] text-justify mb-5 w-[270px]
                    md:text-[20px] md:w-[400px]
                    lg:text-[24px] lg:w-[500px]
                    '>"{filteredProduct.quotes}"</p>
                    <p className='prata
                    md:text-[24px]
                    lg:text-[30px]
                    '>{filteredProduct.name}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}