import Image from "next/image";
import React from "react";
import img from "../../public/images/placehold-500x300.png"
// import img from "";
const About = () => {
  return (
    <section className="bg-background">
    <div className="container mx-auto flex  text-dark flex-col lg:flex-row justify-between items-center py-24 px-6 md:px-0 gap-5">
      <div className="md:px-12 w-full lg:w-3/4 ">
        <h4 className="font-semibold text-center lg:text-start">About Us</h4>
        <p className=" text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          labore rerum tempore tenetur commodi natus quos itaque voluptatum
          repudiandae nostrum accusantium vero voluptate aspernatur totam,
          laboriosam aut, et quae consequatur?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
          suscipit illum, numquam incidunt nostrum dolor officia doloremque
          cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
          Dolor, minus reiciendis.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
        </p>
      </div>
      <div className=" w-full lg:w-3/4 flex items-center mx-auto">
        <Image className="rounded-lg mx-auto" src={img} height={500} width={500} alt="About Us Image" />
      </div>
    </div>
    </section>
  );
};

export default About;