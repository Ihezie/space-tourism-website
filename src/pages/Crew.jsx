import data from "../data";
import { useState } from "react";
import PageHeading from "../components/PageHeading";

const Crew = () => {
  const { crew } = data;

  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <main className="bg-crew-mobile min-h-screen pt-[88px] md:bg-crew-tablet md:pt-36 lg:bg-crew-desktop">
      <PageHeading serial={'02'} text='meet your crew'/>

      <section className="md:flex md:flex-col-reverse lg:flex-row-reverse lg:px-14 xl:px-[11.45%] lg:items-center">
        <section className="mb-8 mx-auto flex items-end overflow-hidden border-b border-b-[#383B4B] md:border-b-0 md:mb-0 w-1/2 relative">
          {crew.map((crewMember, index) => {
            return (
              <div
                key={index}
                style={{
                  transform: `translateX(-${crewIndex * 100}%)`,
                }}
                className="w-full flex-shrink-0 flex justify-end duration-300"
              >
                <img
                  className="mx-auto lg:mx-0"
                  src={crewMember.images.png}
                  alt="crewMember"
                />
              </div>
            );
          })}
        </section>
        <section className="flex flex-col px-6 text-center pb-16 gap-7 md:pb-0 md:mb-10  md:flex-col-reverse md:gap-10 lg:text-left lg:pb-0 lg:w-1/2 lg:gap-28 lg:px-0 lg:mb-0">
          <ul className="text-fmPaleBlue flex gap-5 justify-center lg:justify-start">
            {crew.map((item, index) => (
              <li key={index}>
                <button
                  className={` w-3 h-3 rounded-full bg-white hover:opacity-50  ${
                    index === crewIndex ? "opacity-100" : "opacity-20"
                  }`}
                  onClick={() => {
                    setCrewIndex(index);
                  }}
                ></button>
              </li>
            ))}
          </ul>
          <article>
            <h2 className="text-white font-bellefair uppercase opacity-50 text-[32px]">
              {crew[crewIndex].role}
            </h2>
            <h1 className="text-white font-bellefair uppercase text-2xl text-center mb-4 lg:text-left lg:text-[56px] leading-[60px]">
              {crew[crewIndex].name}
            </h1>
            <p className="text-fmPaleBlue font-barlow md:px-[20%] lg:text-[18px] lg:px-0 lg:leading-8 lg:pr-24">
              {crew[crewIndex].bio}
            </p>
          </article>
        </section>
      </section>
    </main>
  );
};
export default Crew;
