import colombus1 from "../assets/img/8.png";
import colombus2 from "../assets/img/6.png";
import colombus3 from "../assets/img/7.png";
import colombus4 from "../assets/img/9.png";
import colombusBg from "../assets/img/colombus_bg.jpg";
import earhart1 from "../assets/img/12.png";
import earhart2 from "../assets/img/10.png";
import earhart3 from "../assets/img/11.png";
import earhart4 from "../assets/img/13.png";
import earhartBg from "../assets/img/earhart_bg.jpg";
import bonaparte1 from "../assets/img/17.png";
import bonaparte2 from "../assets/img/15.png";
import bonaparte3 from "../assets/img/16.png";
import bonaparte4 from "../assets/img/17.png";
import bonaparteBg from "../assets/img/bonaparte_bg.jpg";
import { link } from "fs";

const collection = [
    {
        id: 1,
        name: "COLUMBUS",
        image: [colombus1.src, colombus2.src, colombus3.src, colombus4.src],
        aroma: ["Citrus", "Aquatic", "Aromatic"],
        size: "Exrtait de Parfum - 70ml",
        price: "IDR 242,900",
        description: "The Columbus themed fragrance by Arscent captures the spirit of adventure and discovery. It opens with a fresh burst of oceanic citrus, followed by rich aromatic woods and a warm hint of exotic spices. Bold, masculine, and curious this scent embodies the fearless essence of Columbus as he explored uncharted worlds. Perfect for those with a strong, ambitious personality and an unquenchable thirst for new experiences.",
        bgimage: colombusBg.src,
        topNotes: ["Lime", "Lemon", "Bergamot", "Jasmine", "Orange", "Mandarin Orange and Neroli"],
        middleNotes:  ["Sea notes", "Calone", "Peach", "Coriander", "Cyclamen", "Jasmine", "Calone"],
        baseNotes: ["White Musk", "Cedar", "Oakmoss", "Patchouli", "Amber"],
        quotes: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        link:"https://shopee.co.id/ARSCENT-Columbus-Extrait-de-Parfume-70ml-i.1607831196.40570603918?extraParams=%7B%22display_model_id%22%3A291683857901%7D",
    },
    {
        id: 2,
        name: "BONAPARTE",
        image: [bonaparte1.src, bonaparte2.src, bonaparte3.src, bonaparte4.src],
        aroma: ["Woody", "Fruit", "Sweet"],
        size: "Exrtait de Parfum - 70ml",
        price: "IDR 242,900",
        description: "The Bonaparte fragrance by Arscent is a sophisticated blend of woody, fruity, and sweet notes. It evokes the strategic brilliance and charismatic leadership of Napoleon Bonaparte, combining strength with a touch of elegance. This scent is perfect for those who command attention and exude confidence in every room they enter.",
        bgimage: bonaparteBg.src,
        topNotes: ["Pinapple leaf", "Pepper", "Grapefruit"],
        middleNotes:  ["Applewood", "Cardamom", "Violet", "Lavender"],
        baseNotes: [ "Vanilla", "Amber", "Tonka", "Cedarwood", "Vetiver"],
        quotes: "Great ambition is the passion of a great character. Those endowed with it may perform very good or very bad acts. All depends on the principles which direct them.",
        link:"https://shopee.co.id/ARSCENT-Bonaparte-Extrait-de-Parfume-70ml-i.1607831196.43470582007?extraParams=%7B%22display_model_id%22%3A276681657535%7D",
    },  
    {
        id: 3,
        name: "EARHART",
        image: [earhart1.src, earhart2.src, earhart3.src, earhart4.src],
        aroma: ["Vanilla", "Floral"],
        size: "Exrtait de Parfum - 70ml",
        price: "IDR 242,900", 
        description: "The Earhart fragrance by Arscent is a delicate blend of vanilla and floral notes, inspired by the pioneering spirit of Amelia Earhart. It captures the essence of freedom, courage, and elegance, making it perfect for those who dare to dream and explore new horizons.",
        bgimage: earhartBg.src,
        topNotes: [ "Pear", "Pink pepper", "Orange blossom"],
        middleNotes: [ "Coffee", "Jasmine", "Bitter almond", "Licorice"],
        baseNotes: ["Vanilla", "Patchouli", "Cashmere wood", "Cedar"],
        quotes: "Never do things others can do and will do, if there are things others cannot do or will not do." ,
        link:"https://shopee.co.id/ARSCENT-Earhart-Extrait-de-Parfume-70ml-i.1607831196.43420604218?extraParams=%7B%22display_model_id%22%3A301683926243%7D",
    }
]

export default collection;