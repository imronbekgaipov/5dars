import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between mt-8 px-6 md:px-0 md:mt-[72px] mb-14">
      <div>
        <h1 className="text-RUINED-SMORES text-xl font-bold md:text-[32px] md:mb-2">
          Invoices
        </h1>
        <p className="text-PAPILIO-ARGEOTUS font-medium text-xs">7 invoices</p>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="flex items-center gap-3 cursor-pointer ">
          <span className="text-xs font-bold text-RUINED-SMORES md:hidden ">
            Filter
          </span>
          <span className="text-xs font-bold text-RUINED-SMORES md:block min-[375px]:hidden ">
            Filter by status
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M1 1L5.2279 5.2279L9.4558 1"
              stroke="#7C5DFA"
              strokeWidth="2"
            />
          </svg>
        </div>
        <button className=" bg-[#7C5DFA] md:hidden rounded-3xl">
          <div className="py-[6px] ml-[6px] pr-[14px]">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z"
                  fill="#7C5DFA"
                />
              </svg>
              <span className="text-white text-xs font-bold">New</span>
            </div>
          </div>
        </button>
        <button className=" bg-[#7C5DFA] md:block min-[357px]:hidden rounded-3xl">
          <div className="py-[6px] ml-[6px] pr-[14px]">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z"
                  fill="#7C5DFA"
                />
              </svg>
              <span className="text-white text-xs font-bold">New Invoice</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
