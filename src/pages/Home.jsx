import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="min-h-screen bg-home-mobile pt-[20vh] md:pb-16 md:bg-home-tablet lg:bg-home-desktop lg:flex lg:items-center lg:justify-between lg:px-[11.45%] lg:pt-[35vh] lg:pb-0">
      <section className="text-center mb-20 md:mb-32 lg:w-[450px] lg:text-left">
        <p className="text-fmPaleBlue uppercase tracking-[2.7px] md:text-xl lg:text-[28px]">
          so, you want to travel to
        </p>
        <h1 className="text-white font-bellefair uppercase text-[80px] mb-4 md:text-[150px] md:mb-0 leading-snug">
          space
        </h1>
        <article className="text-fmPaleBlue px-4 leading-6 tracking-wide font-barlow text-[15px] md:px-40 md:text-base/7 lg:px-0 lg:text-[18px] lg:leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </article>
      </section>
      <Link to="/destination" className="bg-white mx-auto w-[150px] h-[150px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_0px_50px] hover:shadow-white/10 md:w-[250px] md:h-[250px] lg:mx-0">
        <button type="button" className="text-xl md:text-[32px] font-bellefair uppercase">explore</button>
      </Link>
    </main>
  );
};
export default Home;
