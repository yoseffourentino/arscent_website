import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import colombusAbout from "./assets/img/colombus_3.jpg";
import arscentLogo2 from "./assets/img/arscent_logo2.svg";
import collectionData from "./data/collection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/dist/client/link";
import AnimateOnView from "./hooks/AnimateOnView";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
          <div className="landing-page flex flex-col justify-end h-[80dvh]
          lg:h-screen
          ">
            <AnimateOnView direction="right" delay={0.2}>
                <div className="flex flex-col gap-5 px-6 pb-6
                lg:pb-15 lg:px-15
                ">
                  <h1 className="playfair-display text-[22px] text-[white]
                  md:text-3xl
                  ">WHEN HISTORY REIMAGINED TO FRAGRANCE</h1>
                  <p className="playfair-display text-white text-[14px] w-60 text-justify
                  md:text-xl md:w-[400px]
                  lg:w-[600px]
                  ">Terinspirasi dari karakter dan kisah para legenda, setiap aroma Arscent adalah arsip hidup dari karakter ikonik, dirancang untuk menjadi simbol kepribadian dan warisan yang dapat dikenakan.</p>
                  <Link href="/product">
                    <button className="playfair-display text-white text-start underline text-[12px] cursor-pointer
                    md:text-lg
                    ">SHOP THE COLLECTION</button>
                  </Link>
                </div>
            </AnimateOnView>
          </div>
          {/* New Arrival Section */}
          <div className="bg-[#ffffff] px-6 py-8 flex gap-2
          md:gap-5
          lg:px-15 lg:py-15 lg:gap-10 lg:items-end lg:flex-row-reverse
          ">
            <AnimateOnView direction="left" delay={0.2}>
                <div className="new-arrival flex flex-col gap-1 justify-end px-3 py-3
                md:w-[400px] md:h-[400px]
                lg:w-[600px] lg:h-[800px] lg:text-end
                ">
                  <h2 className="playfair-display font-bold text-[14px]
                  md:text-[24px]
                  lg:text-[32px]
                  ">NEW ARTICLE</h2>
                  <p className="playfair-display text-[24px] text-white
                  md:text-[48px]
                  lg:text-[64px]
                  ">EARHART</p>
                </div>
            </AnimateOnView>
              <AnimateOnView direction="right" delay={0.4}>
                <div className="lg:text-end lg:mb-5">
                    <div>
                      <h3 className="playfair-display font-bold text-[16px]
                      md:text-[20px]
                      lg:text-[26px]
                      ">Top Notes:</h3>
                      <p className="playfair-display text-[14px]
                      md:text-[18px]
                      lg:text-[22px]
                      ">Pear, Pink pepper, Orange blossom</p>
                    </div>
                    <div>
                      <h3 className="playfair-display font-bold text-[16px]
                      md:text-[20px]
                      lg:text-[26px]
                      ">Middle Notes:</h3>
                      <p className="playfair-display text-[14px]
                      md:text-[18px]
                      lg:text-[22px]
                      ">Coffee, Jasmine, Bitter almond, Licorice</p>
                    </div>
                    <div>
                      <h3 className="playfair-display font-bold text-[16px]
                      md:text-[20px]
                      lg:text-[26px]
                      ">Base Notes:</h3>
                      <p className="playfair-display text-[14px]
                      md:text-[18px]
                      lg:text-[22px]
                      ">Vanilla, Patchouli, Cashmere wood, Cedar</p>
                    </div>
                    <Link href="/detail/3">
                      <button className="playfair-display text-white bg-black text-[8px] w-full py-2 cursor-pointer
                      md:text-[16px]
                      lg:text-[20px]
                      ">VIEW PRODUCT</button>
                    </Link>
                </div>
              </AnimateOnView>
          </div>
          {/* About Section */}
          <div className="bg-[#e0ceb6] py-6 flex gap-5
          lg:gap-10 lg:items-end lg:p-15
          ">
            <AnimateOnView direction="right" delay={0.2}>
              <img src={colombusAbout.src} alt="" className="w-[120px] h-[300px] object-cover
              md:w-[250px] md:h-[500px]
              lg:w-[350px] lg:h-[600px]
              xl:w-[700px] xl:h-[800px]
              " />
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.2}>
              <div className="flex flex-col items-stretch justify-items-stretch
              lg:mb-5
              ">
                <img src={arscentLogo2.src} alt="" className="mb-3
                md:w-[300px]
                lg:w-[450px]
                " />
                <p className="playfair-display text-[12px] w-[215px] text-justify pr-3 pl-2
                md:text-[18px] md:w-[450px]
                lg:text-[20px] lg:w-[500px]
                xl:w-[600px]
                ">Arscent, didirikan pada 2025, lahir dari keyakinan bahwa wewangian adalah warisan karakter, bukan sekadar aksesoris. Terinspirasi dari tokoh legendaris, setiap parfum Arscent dirancang dengan riset mendalam dan kualitas Extrait de Parfum, menghadirkan aroma bermakna yang mengabadikan sejarah dan menginspirasi setiap individu membangun legacy-nya sendiri.</p>
                <Link href="/about">
                  <button className="playfair-display underline text-[10px] font-semibold self-end text-end pl-2 mt-5
                  md:text-[16px]
                  ">LEARN MORE</button>
                </Link>
              </div>
            </AnimateOnView>
          </div>
          {/* Our Collections Section */}
          <div className="bg-[#ffffff] px-6 py-6
          lg:p-15
          ">
            <AnimateOnView direction="right" delay={0.3}>
              <p className="founders-grotesk-m text-[36px]
              md:text-[48px]
              lg:text-[64px]
              ">OUR COLLECTION</p>
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.2}>
              <div>
                <Carousel opts={{ 
                  align: "start"
                }}
                orientation="horizontal" 
                className="w-full">
                  <CarouselContent className="">
                  {collectionData.map((item) => (
                    <CarouselItem key={item.id} className="flex flex-col max-w-[180px]
                    md:max-w-[230px]
                    lg:max-w-[450px]
                    ">
                      <Link href={`/detail/${item.id}`}>
                        <img src={item.image} alt={item.name} className=" object-cover hover:scale-102 hover:shadow-lg transition-all duration-200" />
                      </Link>
                      <p className="founders-grotesk-m text-[12px] mt-1
                      md:text-[18px]
                      lg:text-[24px]
                      ">{item.name}</p>
                    </CarouselItem>
                  ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </AnimateOnView>
          </div>
          {/* Quotes Section */}
          <AnimateOnView direction="right" delay={0.2}>
            <div className=" bg-[#ffffff] px-6 py-6
            lg:p-15
            ">
              <p className="w-[270px] playfair-display text-[14px] text-justify
              md:text-[18px] md:w-[500px]
              lg:text-[24px] lg:w-[700px]
              ">“Great ambition is the passion of a great character. Those endowed with it may perform very good or very bad acts. All depends on the    principles which direct them.”</p>
              <p className="prata text-[16px] mt-7
              md:text-[24px]
              lg:text-[32px]
              ">BONAPARTE</p>
            </div>  
          </AnimateOnView>
          {/* View Collection Section */}
          <div className="view-collection flex flex-col items-center justify-center h-[30vh]
          lg:h-[60vh]
          ">
            <h2 className="founders-grotesk-m text-[24px] text-white
            lg:text-[48px]
            ">VIEW COLLECTION</h2>
            <Link href="/product">
              <button className="playfair-display text-white text-[12px] bg-[#242424] px-7 py-2 cursor-pointer hover:opacity-85 rounded-[5px]
              lg:text-[20px] lg:px-10 lg:py-4
              ">EXPLORE</button>
            </Link>
          </div>
      </div>
      <Footer />
    </>
  );
}
