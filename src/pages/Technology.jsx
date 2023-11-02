import data from "../data";
import { useState } from "react";
import PageHeading from "../components/PageHeading";

const Technology = () => {
  const { technology } = data;

  const [technologyIndex, setTechnologyIndex] = useState(0);

  return (
    <main className="bg-technology-mobile min-h-screen pt-[88px] md:bg-technology-tablet md:pt-36 lg:bg-technology-desktop">
      <PageHeading serial={'03'} text='space launch 101'/>

      <section className="md:flex md:flex-col lg:flex-row-reverse lg:pl-14 xl:pl-[11.45%] lg:items-center lg:gap-32 lg:pb-14">
        <section className="mb-8 flex overflow-hidden md:mb-12 lg:w-2/5 lg:mb-0">
          {technology.map((item, index) => {
            return (
              <picture
                style={{
                  transform: `translateX(-${technologyIndex * 100}%)`,
                }}
                key={index}
                className="w-full flex-shrink-0 duration-300"
              >
                  <source
                    media="(max-width: 1023px)"
                    srcset={item.images.landscape}
                  />
                  <img
                    className="w-full mx-auto lg:mx-0"
                    src={item.images.portrait}
                    alt="technology"
                  />
              </picture>
            );
          })}
        </section>
        <section className="flex flex-col px-6 text-center pb-16 gap-7 md:gap-10 lg:flex-row lg:text-left lg:pb-0 lg:w-3/5 xl:gap-20 lg:px-0">
          <ul className="text-fmPaleBlue flex gap-5 justify-center lg:flex-col lg:gap-8 lg:justify-between">
            {technology.map((item, index) => (
              <li key={index}>
                <button
                  className={`font-bellefair w-10 h-10 rounded-full border border-white/25 hover:border-white md:text-2xl md:w-16 md:h-16 xl:w-20 xl:h-20 lg:text-3xl  ${
                    index === technologyIndex ? "bg-white text-black" : ""
                  }`}
                  onClick={() => {
                    setTechnologyIndex(index);
                  }}
                >
                  {index}
                </button>
              </li>
            ))}
          </ul>
          <article>
            <h2 className="text-fmPaleBlue mb-2 tracking-[2.3px] text-sm md:mb-6 md:text-base uppercase text-[32px]">
              the terminology...
            </h2>
            <h1 className="text-white font-bellefair uppercase text-2xl/7 text-center mb-4 md:text-[40px] xl:leading-[60px] lg:text-left xl:text-[56px]">
              {technology[technologyIndex].name}
            </h1>
            <p className="text-fmPaleBlue font-barlow md:px-[20%] lg:text-[18px] lg:px-0 lg:leading-8 xl:pr-20">
              {technology[technologyIndex].description}
            </p>
          </article>
        </section>
      </section>
    </main>
  );
};
export default Technology;
