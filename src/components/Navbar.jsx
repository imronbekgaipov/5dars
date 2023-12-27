function Navbar() {
  return (
    <header className="pl-[22px] bg-carbon-blue bg-logo-bg pr-6  text-white bg-left lg:bg-top bg-[length:72px_72px] lg:bg-[length:103px_103px] bg-no-repeat flex items-center justify-between lg:flex-col lg:px-0 lg:pt-[33.5px] lg:pb-6 lg:rounded-tr-[20px] lg:rounded-br-[20px]">
      <img src="./assets/logo.svg" alt="" height={26} width={28} />
      <div className="flex lg:flex-col">
        <div className="border-r-[1px] lg:border-r-0 lg:border-b-[1px] border-[#494E6E] py-6 lg:p-0 flex lg:justify-center items-center pr-6 lg:pb-7">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            {/* sun icon */}
            <img
              className="swap-off fill-current"
              src="./assets/icon-sun.svg"
              alt="sun icon"
              height={20}
              width={20}
            />
            {/* moon icon */}
            <img
              className="swap-on fill-current"
              src="./assets/icon-moon.svg"
              alt="moon icon"
              height={20}
              width={20}
            />
          </label>
        </div>
        <div className="py-6 pl-6 lg:py-6 lg:px-8">
          <img
            className="rounded-full"
            src="./assets/image-avatar.jpg"
            width={32}
            height={32}
            alt="avatar image"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
