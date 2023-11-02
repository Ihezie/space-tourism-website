const PageHeading = ({ serial, text }) => {
  return (
    <h1 className="text-white uppercase text-center mb-8 tracking-[2.7px] md:text-[20px] md:text-left md:ml-7 lg:ml-0 lg:mt-[8vh] lg:text-[28px] lg:pl-14 xl:pl-[11.45%]">
      <span className="opacity-50 mr-4">{serial}</span>
      {text}
    </h1>
  );
};
export default PageHeading;
