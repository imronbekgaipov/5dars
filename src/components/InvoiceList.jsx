import React from "react";
import { Link } from "react-router-dom";

function InvoiseList({ invoices }) {
  return (
    <div>
      <ul className="flex items-center flex-col justify-center gap-4 pt-4 pb-[105px]">
        {invoices.map((invoise) => {
          const { id, clientName } = invoise;
          return (
            <li
              key={id}
              className="rounded-lg p-6 md:px-6 bg-[#fff] shadow-[0_10px_10px_-10px_rgba(72, 84, 159, 0.10)] w-[327px] md:w-[672px] h-[134px] md:h-[72px] shrink-0 md:"
            >
              <Link
                className="md:flex items-center justify-between"
                to={`invoice/${id}`}
              >
                <div className="flex gap-[140px] items-center md:gap-8">
                  <h1 className="text-khmer-curry text-base font-bold leading-4">
                    <span className="text-true-lavender">#</span>
                    {id}
                  </h1>
                  <h3 className="hidden md:inline-block mb-2 md:mb-0 text-true-lavender">
                    Due 19 Aug 2021
                  </h3>
                  <h2 className="text-frozen-state text-base font-medium">
                    {clientName}
                  </h2>
                </div>
                <div className="flex gap-[100px] items-center pt-6 md:pt-0 md:gap-10 ">
                  <div>
                    <h3 className="mb-2 text-true-lavender md:hidden">
                      Due 19 Aug 2021
                    </h3>
                    <h3 className="text-khmer-curry font-bold text-xl">
                      €{invoise.total}
                    </h3>
                  </div>
                  <div>
                    <button className="flex items-center gap-2 rounded-md py-3 px-8 bg-everlasting-ice md:flex">
                      <img
                        src="./assets/paid-touch.svg"
                        width={8}
                        height={8}
                        alt=""
                      />
                      <span className="text-base text-dark-shamrock font-bold">
                        {invoise.status}
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="hidden md:inline-block"
                  src="./assets/icon-arrow-right.svg"
                  alt="right arrow icon"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InvoiseList;
