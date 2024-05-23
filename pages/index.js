import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Head from "@/components/Head/Head";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Statistics from "@/components/Statistics/Statistics";
import JoinUs from "@/components/JoinUs/JoinUs";


export default function Home() {
  return (
   <>
   {/* <Head title="HealMe Home"/> */}
   <Header/>
   <Hero/>
   <JoinUs/>
   <Services/>
   <About/> 
   <Statistics/>
   <TestimonialCard/>
   <Footer/>
   </>
  );
}
