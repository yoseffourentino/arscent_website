import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import aboutImg1 from '../assets/img/about_1.jpeg'
import aboutImg2 from '../assets/img/about_2.jpeg'
import aboutImg3 from '../assets/img/about_3.jpeg'

export default function About() {
    return(
        <div className="bg-[#ffffff]">
            <Navbar />
            <div>
                <img src={aboutImg1.src} alt="About Image 1" className="h-[550px] w-full object-cover brightness-60" />
                <div className="px-6 py-12 
                xl:px-12
                ">
                    <h1 className="playfair-display font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR HISTORY</h1>
                    <p className="text-justify playfair-display text-[16px]
                    xl:text-[20px]
                    ">Arscent was founded in 2025 on the belief that fragrance should be a legacy of character that can be perceived through scent, not merely an accessory. The name Arscent itself is a philosophical fusion of “Archive” (history/records) and “Scent” (fragrance). From the very beginning, our vision has been to serve as a bridge between the past and the present by archiving the essence of character and the stories of iconic figures—such as the courage of Columbus or the decisiveness of Bonaparte—into perfume formulations. Each variant is the result of in-depth research, translating a figure’s attributes into complex and meaningful aromas. We are committed to the highest quality, choosing the Extrait de Parfum format (the highest fragrance oil concentration) to ensure that the legacy carried by each perfume endures and projects strongly (high sillage), as if preserving history itself. Through wearing Arscent, we hope every wearer is inspired to define, celebrate their potential, and build their own legacy.</p>
                </div>
                <img src={aboutImg2.src} alt="About Image 2" className="h-[250px] w-full object-cover brightness-60
                xl:h-[500px]
                " />
                <div className="px-6 py-12 
                xl:px-12
                ">
                    <h1 className="playfair-display font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR VISION</h1>
                    <p className="text-justify playfair-display text-[16px]
                    xl:text-[20px]">To become Indonesia’s leading perfume brand, innovatively archiving the essence of character and the stories of historical figures into premium fragrances, while inspiring every individual to celebrate their own potential and personal legacy.</p>
                </div>
                <img src={aboutImg3.src} alt="About Image 3" className="h-[250px] w-full object-cover brightness-60
                xl:h-[500px]
                " />
                <div className="px-6 py-12 mb-12
                xl:px-12
                ">
                    <h1 className="playfair-display font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR MISSION</h1>
                    <p className="text-justify playfair-display text-[16px]
                    xl:text-[20px]
                    " >Preserving History, Offering an Emotional Experience, Redefining Legacy.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}