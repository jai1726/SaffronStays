import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import  Hero from "../components/Hero";
import CheckPrice from "../components/CheckPrice";
import Details from "../components/Details";
import RealLocation from "../components/RealLocations";
import RoomCard from "../components/RoomCard";
import Footer from "../components/Footer";

import '@fortawesome/fontawesome-free/css/all.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <div className={styles.homes}>
      <Navbar/>
      <Hero/>
      {/* <CheckPrice/> */}
      <Details/>
      <RealLocation/>
      <RoomCard/>
    <Footer/>
    </div>
    </>
  );
}
