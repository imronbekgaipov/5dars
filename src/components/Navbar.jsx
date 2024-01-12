import React from "react";

function Navbar() {
  return (
    <div className="lg:fixed lg:h-[740px]  pl-[22px] pr-6 bg-CARBON-BLUE bg-logo-bg bg-no-repeat  bg-left bg-[length:72px_72px] flex justify-between items-center lg:flex-col lg:bg-top lg:bg-[length:103px_103px] lg:px-0 lg:pt-[33.5px] lg:pb-6 lg:rounded-tr-[20px] lg:rounded-br-[20px]">
      <img src="./assets/logo.svg" alt="logo" width={28} height={26} />
      <div className="flex lg:flex-col lg:justify-center ">
        <div className="border-r-2 lg:border-r-0 lg:border-b-2 border-[#494E6E] flex items-center lg:p-0  py-6 pr-6 lg:justify-center lg:pb-8">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <img
              className="swap-on fill-current  "
              src="./assets/icon-moon.svg"
              alt="icon moon svg"
              width={25}
              height={25}
            />
            <img
              className="swap-off fill-current "
              src="./assets/icon-sun.svg"
              alt="icon sun svg"
              width={25}
              height={25}
            />
          </label>
        </div>
        <div className="py-5 pl-6 lg:py-6 lg:pr-9">
          <img
            className="rounded-full"
            src="./assets/image-avatar.jpg"
            alt="avatar image"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
