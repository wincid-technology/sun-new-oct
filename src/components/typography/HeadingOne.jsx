import Logo from "../pieces/Logo"



const Hero = () => {
  return (
    <section
      className="absolute z-10 bg-black/50 hero-section w-full h-full flex items-center"
    >


      <div
        className="relative mx-auto max-w-screenxl px-4 sm:px-6 flex items-center justify-center md:px-8"
      >

        <div className="text-center flex mt-10 justify-center items-center flex-col">
          {/* <div className="logoBounce">
            <Logo />
          </div>
          <div className="flex justify-center p-2 px-5 mt-1 bg-white mb-3 gap-3">
            <h1 className="text-3xl uppercase kanit-bold animation-right font-extrabold text-[#f58720] sm:text-6xl">
              {"Sunshine"}
            </h1>
            <h1 className="text-3xl uppercase kanit-bold animation-left font-extrabold text-[#0F063F] sm:text-6xl">
              {"coropack"}
            </h1>
          </div>
          <h2 className="flex items-center text-white w-fit text-lg gap-2 text-center">
            <hr className="w-[12vw]" />
            <span>QUALITY MATTERS</span>
            <hr className="w-[12vw]" />
          </h2> */}

          <h2 className="flex flex-col text-center">
            <span className="source-sans-400 text-[max(7vw,40px)] justify-center flex-wrap flex leading-none gap-1 sm:gap-4">
              <span className="bg-clip-text bg-gradient-to-t from-slate-400 to-white text-transparent">Sustainable</span>
              <span className="bg-clip-text bg-gradient-to-t from-slate-400 to-white text-transparent">Packaging</span>
            </span>
            <h5 className="bg-clip-text bg-gradient-to-t from-slate-400 to-white text-transparent source-sans-400 text-[max(3vw,18px)]">For Every Need</h5>

          </h2>




        </div>
      </div>
    </section>
  )
}

export default Hero