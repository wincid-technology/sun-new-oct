import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

const LogoFull = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-1 w-fit flex-wrap">
        <Image
          src="/images/newLogo.png"
          alt=""
          height={35}
          width={35}
        />
        <h1 className="text-center mx-auto flex flex-col items-center ">
          <div className="flex">
            <span className="md:text-4xl text-md sm:2xl font-bold  block tracking-wider text-[#ff8502] kanit-semibold">
              {"SUNSHINE"}
            </span>
            <span className="md:text-4xl text-md sm:2xl font-bold block text-[#0e0640] kanit-semibold">
              {"COROPACK"}
            </span>
          </div>

          {/* <h2 className="flex items-center gap-2 text-white w-fit text-lg text-center">
            <hr className="w-14 md:w-20 border-white" />
            QUALITY MATTERS
            <hr className="w-14 md:w-20 border-white" />
          </h2> */}
        </h1>
      </div>
    </div>
  )
}

export default LogoFull
