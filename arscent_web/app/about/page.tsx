import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import aboutImg1 from '../assets/img/about_img_1.jpg'
import aboutImg2 from '../assets/img/about_img_2.jpg'
import aboutImg3 from '../assets/img/about_img_3.jpg'

export default function About() {
    return(
        <div className="bg-[#F2EDE6]">
            <Navbar />
            <div>
                <img src={aboutImg1.src} alt="About Image 1" className="h-[550px] w-full object-cover" />
                <div className="px-6 py-12 
                xl:px-12
                ">
                    <h1 className="ibx-plex-mono font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR HISTORY</h1>
                    <p className="text-justify founders-grotesk-r text-[16px]
                    xl:text-[20px]
                    ">Arscent didirikan pada tahun 2025 atas keyakinan bahwa wewangian seharusnya menjadi warisan karakter yang dapat dicium, bukan sekadar aksesoris. Nama Arscent sendiri adalah gabungan filosofis dari "Archive" (Arsip/Sejarah) dan "Scent" (Wewangian). Sejak awal, visi kami adalah menjadi jembatan antara masa lalu dan masa kini dengan mengarsipkan esensi karakter dan kisah tokoh-tokoh ikonik seperti keberanian Columbus atau ketegasan Bonaparte ke dalam formulasi parfum. Setiap varian adalah hasil riset mendalam untuk menerjemahkan atribut tokoh menjadi aroma yang kompleks dan bermakna. Kami berkomitmen pada kualitas tertinggi, memilih format Extrait de Parfum (konsentrasi minyak wangi tertinggi), untuk memastikan bahwa legacy yang dibawa parfum dapat bertahan lama dan memiliki proyeksi kuat (SPL tinggi), seolah mengabadikan sejarah itu sendiri. Kami berharap dengan mengenakan Arscent, setiap pengguna termotivasi untuk mendefinisikan dan merayakan potensi serta membangun legacy mereka sendiri.</p>
                </div>
                <img src={aboutImg2.src} alt="About Image 2" className="h-[250px] w-full object-cover
                xl:h-[500px]
                " />
                <div className="px-6 py-12 
                xl:px-12
                ">
                    <h1 className="ibx-plex-mono font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR VISION</h1>
                    <p className="text-justify founders-grotesk-r text-[16px]
                    xl:text-[20px]">Menjadi brand parfum terdepan di Indonesia yang inovatif dalam mengarsipkan esensi karakter dan kisah tokoh bersejarah ke dalam wewangian premium, serta menginspirasi setiap individu untuk merayakan potensi dan legacydiri mereka sendiri.</p>
                </div>
                <img src={aboutImg3.src} alt="About Image 3" className="h-[250px] w-full object-cover
                xl:h-[500px]
                " />
                <div className="px-6 py-12 mb-12
                xl:px-12
                ">
                    <h1 className="ibx-plex-mono font-semibold text-[20px] mb-6
                    md:text-[26px]
                    xl:text-[30px]
                    ">OUR MISSION</h1>
                    <p className="text-justify founders-grotesk-r text-[16px]
                    xl:text-[20px]
                    " >Mengabadikan Sejarah, Menawarkan Pengalaman Emosional, Mendefinisikan Ulang Legacy.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}