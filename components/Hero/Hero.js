import Link from "next/link";
import { Button } from "../ui/Buttons";
import rightArrow from "../../public/images/next.png"
import Image from "next/image";
import bgImg from "../../public/images/hero-bg.svg"
import heroImg from "../../public/images/hero-img.webp"

function Hero() {
  return (
    <section className="hero bg-primary md:pt-52 pt-24 relative"   style={{ 
      backgroundImage: `url('../../public/images/hero-bg.svg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    }}>
      <Image
        src={bgImg}
        alt="Hero pattern background"
        height={1000}
        width={3000}
        className="absolute top-0  hero-bg"
      />
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:px-8 relative" style={{ zIndex: "3" }}>
        <div className="flex flex-col items-start py-8 lg:py-16">
          <div>
            <h5 className="text-left lg:text-left text-dark ">
              AI Based Medical Diagnosis and Online Medical Consulting Platform.
            </h5>
          </div>
          <Button variant="primary" href="/diagnosis" className='text-primary mt-10 text-base gap-4 '>Get Diagnosed
          </Button>
        </div>

        <Image
        src={heroImg}
        alt="Hero Image"
        height={500}
        width={500}
        className="m-auto"
      />
      </div>

    </section>
  );
}
export default Hero;
