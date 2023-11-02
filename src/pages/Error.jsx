import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="bg-home-mobile h-screen md:bg-home-tablet lg:bg-home-desktop">
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center" >
        <h1 className="text-white text-xl md:text-3xl mb-12 font-bellefair uppercase">Oops! Page not found</h1>
        <Link
          to="/"
          className="bg-white mx-auto w-[150px] h-[150px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_0px_50px] hover:shadow-white/10 md:w-[250px] md:h-[250px] lg:mx-0"
        >
          <button
            type="button"
            className="text-xl md:text-2xl font-bellefair uppercase"
          >
            back to home
          </button>
        </Link>
      </div>
    </main>
  );
};
export default Error;
