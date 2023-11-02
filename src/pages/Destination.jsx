import data from "../data";
import { useState } from "react";
import PageHeading from "../components/PageHeading";

const Destination = () => {
  const { destinations } = data;

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const selectDestination = (destinationName) => {
    const newDestination = destinations.find(
      (destination) => destination.name === destinationName
    );
    setSelectedDestination(newDestination);
  };
  return (
    <main className="bg-destination-mobile min-h-screen pt-[88px] md:bg-destination-tablet lg:bg-destination-desktop md:pt-36">
      <PageHeading serial={'01'} text='pick your destination'/>

      <section className="lg:grid lg:grid-cols-2 lg:items-center">
        <section className="mb-8 md:mb-12 lg:justify-self-end lg:pr-[10%]">
          <img
            className="w-44 md:w-72 lg:w-[420px] mx-auto lg:mx-0"
            src={selectedDestination.images.png}
            alt="destination"
          />
        </section>
        <section className="px-6 text-center pb-14 md:px-[14%] lg:text-left xl:pr-[30%] lg:pb-0">
          <ul className="text-fmPaleBlue flex gap-7 justify-center mb-7 md:mb-9 lg:justify-start">
            {destinations.map((item, index) => (
              <li key={index}>
                <button
                  className={`pb-2 uppercase tracking-[2.4px] cursor-pointer hover:border-b-[3px] hover:border-white/50 transition duration-75  ${
                    item.name === selectedDestination.name
                      ? " border-b-[3px] text-white"
                      : ""
                  }`}
                  onClick={() => {
                    selectDestination(item.name);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <h1 className="text-white font-bellefair uppercase text-6xl text-center mb-4 lg:text-left lg:text-[100px]">
            {selectedDestination.name}
          </h1>
          <article className="text-fmPaleBlue font-barlow pb-8 mb-8 border-b border-b-[#383B4B] md:pb-14 lg:text-[18px] lg:leading-8">
            {selectedDestination.description}
          </article>

          <div className="md:flex md:justify-center md:gap-32 lg:justify-start lg:gap-14 xl:gap-24">
            <div>
              <h2 className="text-fmPaleBlue uppercase tracking-[2.4px]">
                avg. distance
              </h2>
              <p className="uppercase text-white text-[28px] font-bellefair mb-6 md:mb-0">
                {selectedDestination.distance}
              </p>
            </div>

            <div>
              <h2 className="text-fmPaleBlue uppercase tracking-[2.4px]">
                est. travel time
              </h2>
              <p className="uppercase text-white text-[28px] font-bellefair">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
export default Destination;
